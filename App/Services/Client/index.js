
import Bluetooth from 'App/Services/Bluetooth'
import WebSocket from 'App/Services/WebSocket'

import Simulator from './Simulator'
import Otto from './Otto'

const simulator = new Simulator()
const otto = new Otto()

const isConnectedToSocket = () => {
  return WebSocket.getInstance().isConnected
}

const isConnectedToBluetooth = async () => {
  return Bluetooth.isConnected()
}

export const isConnected = async () => {
  return isConnectedToSocket() || isConnectedToBluetooth()
}

export default class Client {
  getClient = () => {
    if (isConnectedToSocket()) {
      return simulator
    } else if (isConnectedToBluetooth()) {
      return otto
    }
    return null
  }

  getSounds = async () => {
    const client = this.getClient()
    return (client) ? client.getSounds() : []
  }

  setSpeed = async (speed) => {
    const client = this.getClient()
    if (client) {
      client.setSpeed(speed)
    }
  }

  stop = async (delay) => {
    const client = this.getClient()
    if (client) {
      client.stop(delay)
    }
  }

  play = async (sound) => {
    const client = this.getClient()
    if (client) {
      client.play(sound)
    }
  }

  move = async (touch) => {
    const client = this.getClient()
    if (client) {
      client.move(touch)
    }
  }

  moveAndStop = async (touch) => {
    const client = this.getClient()
    if (client) {
      client.moveAndStop(touch)
    }
  }

  run = async (instructions, stopAtEnd = true) => {
    const client = this.getClient()
    if (client) {
      client.run(instructions, stopAtEnd)
    }
  }
}
