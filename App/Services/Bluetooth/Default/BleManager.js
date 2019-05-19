import {
  Platform,
  NativeEventEmitter,
  NativeModules,
  PermissionsAndroid } from 'react-native'
import RNBleManager from 'react-native-ble-manager'
import { stringToBytes } from 'convert-string'

const BleManagerModule = NativeModules.BleManager
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule)

export default class BleManager {
  static myInstance = null

  handlerDiscover = null
  handlerStop = null
  handlerDisconnect = false
  handlerUpdate = false

  scanning = false
  devices = new Map()

  static getInstance () {
    if (BleManager.myInstance == null) {
      BleManager.myInstance = new BleManager()
      BleManager.myInstance.init()
    }
    return BleManager.myInstance
  }

  init = () => {
    // Option for Android only, see https://github.com/innoveit/react-native-ble-manager#startoptions
    const forceLegacy = true

    RNBleManager.start({forceLegacy, showAlert: false})
    this.addListeners() // TODO Should be managed by a component?

    if (Platform.OS === 'android' && Platform.Version >= 23) {
      PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION).then((result) => {
        if (result) {
          // Permission is OK
        } else {
          PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION).then((result) => {
            if (result) {
              // User accepted
            } else {
              // TODO User refused, what to do?
            }
          })
        }
      })
    }
  }

  addListeners = () => {
    this.handlerDiscover = bleManagerEmitter.addListener('BleManagerDiscoverPeripheral', this.handleDiscoverDevice)
    this.handlerStop = bleManagerEmitter.addListener('BleManagerStopScan', this.handleStopScan)
    this.handlerDisconnect = bleManagerEmitter.addListener('BleManagerDisconnectPeripheral', this.handleDisconnectedDevice)
    this.handlerUpdate = bleManagerEmitter.addListener('BleManagerDidUpdateValueForCharacteristic', this.handleUpdateValueForCharacteristic)
  }

  removeListeners = () => {
    if (this.handlerDiscover) { this.handlerDiscover.remove() }
    if (this.handlerStop) { this.handlerStop.remove() }
    if (this.handlerDisconnect) { this.handlerDisconnect.remove() }
    if (this.handlerUpdate) { this.handlerUpdate.remove() }
  }

  handleDiscoverDevice = (device) => { }

  handleStopScan = async () => {
    const discoveredDevices = await RNBleManager.getDiscoveredPeripherals([])

    // Remove devices from the devices map that were not discovered again
    const prevDiscoveredDevices = Array.from(this.devices.values())
    const undiscoveredDevices = prevDiscoveredDevices.filter(
      device => discoveredDevices.findIndex((discoveredDevice) => device.id === discoveredDevice.id) < 0
    )
    undiscoveredDevices.forEach(undiscoveredDevice => {
      this.devices.delete(undiscoveredDevice.id)
    })

    // Add discovered device to devices map if not already present
    discoveredDevices.forEach(device => {
      if (device.name && !this.devices.has(device.id)) {
        device.isBle = true
        device.isConnected = false
        this.devices.set(device.id, device)
      }
    })

    this.scanning = false
  }

  handleDisconnectedDevice = (data) => {
    let device = this.devices.get(data.peripheral)
    if (device) {
      device.isConnected = false
      this.devices.set(device.id, device)
    }
  }

  handleUpdateValueForCharacteristic = (data) => { }

  scan = async () => {
    if (!this.scanning) {
      await RNBleManager.scan([], 3, true)
      this.scanning = true
    }
    while (this.scanning) {
      await new Promise(resolve => setTimeout(resolve, 50))
    }
    return Array.from(this.devices.values())
  }

  connect = async (device) => {
    if (!this.devices.has(device.id)) {
      throw new Error(`Device ${device.name} (${device.id}) not found`)
    }
    await RNBleManager.connect(device.id)
    device.isConnected = true
    this.devices.set(device.id, device)
    return device
  }

  disconnect = async (device) => {
    if (!this.devices.has(device.id)) {
      throw new Error(`Device ${device.name} (${device.id}) not found`)
    }
    await RNBleManager.disconnect(device.id)
    device.isConnected = false
    this.devices.set(device.id, device)
    return device
  }

  retrieveConnected = async () => {
    const connectedDevices = await RNBleManager.getConnectedPeripherals([])
    return Array.from(connectedDevices.values())
  }

  write = async (device, str) => {
    const deviceInfo = await RNBleManager.retrieveServices(device.id)
    if (!deviceInfo || !deviceInfo.advertising || !deviceInfo.characteristics) {
      return false
    }

    const characteristic = deviceInfo.characteristics.find(characteristic => {
      if (!characteristic.properties) {
        return false
      }
      const hasWriteWithoutResponseProperty = (Array.isArray(characteristic.properties))
        ? characteristic.properties.includes('WriteWithoutResponse')
        : characteristic.properties.hasOwnProperty('WriteWithoutResponse')
      return hasWriteWithoutResponseProperty
    })
    if (!characteristic) {
      return false
    }

    await RNBleManager.writeWithoutResponse(device.id, characteristic.service, characteristic.characteristic, stringToBytes(str))

    return true
  }
}
