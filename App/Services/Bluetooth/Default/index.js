import BluetoothSerial from 'react-native-bluetooth-serial'

import BleManager from './BleManager'

class ConnectedDevice {
  device = null
}

const bleManager = BleManager.getInstance()
const connectedDevice = new ConnectedDevice()

BluetoothSerial.on('error', (err) => console.log(`Error: ${err.message}`))
BluetoothSerial.on('connectionLost', () => {
  disconnect()
})

const isEnabled = async () => {
  try {
    const enabled = await BluetoothSerial.isEnabled()
    return {enabled}
  } catch (error) {
    return {error}
  }
}

const isConnected = async () => {
  try {
    return (connectedDevice.device && connectedDevice.device.isBle)
      ? true
      : await BluetoothSerial.isConnected()
  } catch (error) {
    return false
  }
}

const getConnectedDevice = () => {
  return connectedDevice.device
}

const enable = async () => {
  try {
    await BluetoothSerial.enable()
    return {enabled: true, error: null}
  } catch (error) {
    return {enabled: false, error}
  }
}

const scan = async () => {
  try {
    const bleDevices = await bleManager.scan()

    const serialDevices = await BluetoothSerial.list()

    const devices = bleDevices.concat(
      serialDevices.filter((serialDevice) =>
        bleDevices.findIndex((device) => device.id === serialDevice.id) < 0
      )
    )

    return {devices, error: null}
  } catch (error) {
    return {devices: [], error}
  }
}

const scanUnpaired = async () => {
  try {
    const unpairedDevices = await BluetoothSerial.discoverUnpairedDevices()

    return {unpairedDevices, error: null}
  } catch (error) {
    return {unpairedDevices: [], error}
  }
}

const connect = async (device) => {
  try {
    if (device.isBle) {
      connectedDevice.device = await bleManager.connect(device)
    } else {
      await BluetoothSerial.connect(device.id)
      connectedDevice.device = device
    }
    return {connected: true, error: null}
  } catch (error) {
    return {connected: false, error}
  }
}

const disconnect = async () => {
  try {
    if (connectedDevice.device && connectedDevice.device.isBle) {
      await bleManager.disconnect(connectedDevice.device)
    } else {
      await BluetoothSerial.disconnect()
    }

    connectedDevice.device = null
    return {error: null}
  } catch (error) {
    return {error}
  }
}

const write = async (s) => {
  const ok = (connectedDevice.device.isBle)
    ? await bleManager.write(connectedDevice.device, s + '\r')
    : await BluetoothSerial.write(s + '\r')
  return { ok }
}

const stopService = async () => {
  await disconnect()
  bleManager.removeListeners()
}

export default {
  isEnabled,
  isConnected,
  getConnectedDevice,
  enable,
  scan,
  scanUnpaired,
  connect,
  disconnect,
  write,
  stopService
}
