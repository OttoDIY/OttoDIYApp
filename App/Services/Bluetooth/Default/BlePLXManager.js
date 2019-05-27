import { Platform, PermissionsAndroid } from 'react-native'
import { BleManager } from 'react-native-ble-plx'
import base64 from 'react-native-base64'

export default class BlePLXManager {
  static myInstance = null

  manager = new BleManager()

  scanning = false
  scannedDevices = []
  devices = []

  static getInstance () {
    if (BlePLXManager.myInstance == null) {
      BlePLXManager.myInstance = new BlePLXManager()
      BlePLXManager.myInstance.init()
    }
    return BlePLXManager.myInstance
  }

  init = () => {
    // Note: On iOS, need to wait for BLE stack to init if scanning on init
    // if (Platform.OS === 'ios') {
    //   this.manager.onStateChange((state) => {
    //     if (state === 'PoweredOn') { }
    //   })
    // }

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

  scan = async () => {
    if (!this.scanning) {
      this.scanning = true
      this.scannedDevices = []
      this.manager.startDeviceScan(null, null, (error, device) => {
        if (error) {
          console.log('Whoops, bluetooth BLE scan failed')
          console.log(error.message)
        } else {
          if (this.scannedDevices.findIndex((scannedDevice) => scannedDevice.id === device.id) < 0) {
            device.isBle = true
            device.isConnected = false
            this.scannedDevices.push(device)
          }
        }
      })
    }

    // Wait 3 seconds for scan to complete
    // TODO is 3 seconds a good wait time?
    await new Promise(resolve => setTimeout(resolve, 3000))
    if (this.scanning) {
      this.manager.stopDeviceScan()
      this.scanning = false
    }

    // TODO This will ovewrite existing devices that might be connected!
    this.devices = this.scannedDevices

    return this.devices
  }

  connect = async (device) => {
    if (this.devices.findIndex((aDevice) => aDevice.id === device.id) < 0) {
      throw new Error(`Device ${device.name} (${device.id}) not found`)
    }

    await this.manager.connectToDevice(device.id)
    device.isConnected = true

    // Discover device characteristic that is writable without response
    const deviceWithServices = await this.manager.discoverAllServicesAndCharacteristicsForDevice(device.id)
    const services = await deviceWithServices.services()
    for (let i = 0; i < services.length; i++) {
      const service = services[i]
      const characteristics = await service.characteristics()
      for (let j = 0; j < characteristics.length; j++) {
        const characteristic = characteristics[j]
        if (characteristic.isWritableWithoutResponse) {
          device.characteristicForWriting = characteristic
        }
      }
    }

    // TODO throw error if device is not writable
    if (device.characteristicForWriting == null) {
      throw new Error(`Device ${device.name} (${device.id}) is not writable`)
    }

    return device
  }

  disconnect = async (device) => {
    if (this.devices.findIndex((aDevice) => aDevice.id === device.id) < 0) {
      throw new Error(`Device ${device.name} (${device.id}) not found`)
    }
    await this.manager.cancelDeviceConnection(device.id)
    device.isConnected = false
    return device
  }

  write = async (device, str) => {
    if (!device.isConnected) {
      throw new Error(`Device ${device.name} (${device.id}) is not connected`)
    }
    if (device.characteristicForWriting == null) {
      throw new Error(`Device ${device.name} (${device.id}) is not writable`)
    }
    await device.characteristicForWriting.writeWithoutResponse(base64.encode(str))
    return true
  }
}
