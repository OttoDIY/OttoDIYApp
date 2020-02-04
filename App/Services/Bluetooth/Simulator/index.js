
import Simulator from './Simulator'

const simulator = new Simulator()

const isEnabled = async () => {
  return {enabled: simulator.enabled}
}

const isConnected = async () => {
  return (simulator.connectedDevice !== null)
}

const getConnectedDevice = () => {
  return simulator.connectedDevice
}

const enable = async () => {
  simulator.enabled = true
  return {enabled: simulator.enabled, error: null}
}

const list = async () => {
  try {
    return {devices: simulator.devices, error: null}
  } catch (error) {
    return {devices: [], error}
  }
}

const scan = async () => {
  // Wait 0.5 seconds to mimic scanning
  await new Promise(resolve => setTimeout(resolve, 500))
  return {devices: simulator.devices.concat(simulator.unpairedDevices), error: null}
}

const connect = async (device) => {
  // Wait 0.5 seconds to mimic connecting
  await new Promise(resolve => setTimeout(resolve, 500))

  if (device && device.id === '2') {
    return {connected: false, error: {message: 'Not able to connect'}}
  }

  simulator.connectedDevice = device
  return {connected: true, error: null}
}

const disconnect = async () => {
  return {error: null}
}

const write = async (s) => {
  return { ok: true }
}

export default {
  isEnabled,
  isConnected,
  getConnectedDevice,
  enable,
  list,
  scan,
  connect,
  disconnect,
  write
}
