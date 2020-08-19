
import Bluetooth from 'App/Services/Bluetooth'
import WebSocket from 'App/Services/WebSocket'

import Simulator from './Simulator'
import Otto from './Otto'
import Eyes from './Eyes'
import Humanoid from './Humanoid'
import Wheels from './Wheels'

const robot = { name: null }

const simulator = new Simulator()
const otto = new Otto()
const eyes = new Eyes()
const humanoid = new Humanoid()
const wheels = new Wheels()

export const setRobot = async (robotName) => {
  if (robot.name !== robotName) {
    robot.name = robotName
    const connectedToBluetooth = await isConnectedToBluetooth()
    if (connectedToBluetooth) {
      // Robot changed so best to disconnect
      await Bluetooth.disconnect()
    }
  }
}

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
  getClient = async () => {
    if (robot.name === 'otto') {
      return otto
    } else if (robot.name === 'eyes') {
      return eyes
    } else if (robot.name === 'humanoid') {
      return humanoid
    } else if (robot.name === 'wheels') {
      return wheels
    } else if (robot.name === 'simulator') {
      return simulator
    } else {
      // Get client based on connection if possible
      const connectedToBluetooth = await isConnectedToBluetooth()
      if (connectedToBluetooth) {
        return otto
      } else {
        return null
      }
    }
  }

  getConfig = async () => {
    const client = await this.getClient()
    return (client) ? client.getConfig() : null
  }

  getSounds = async () => {
    const client = await this.getClient()
    return (client) ? client.getSounds() : []
  }

  setSpeed = async (speed) => {
    const client = await this.getClient()
    if (client) {
      client.setSpeed(speed)
    }
  }

  setLEDMatrix = async (matrix) => {
    const client = await this.getClient()
    if (client) {
      client.setLEDMatrix(matrix)
    }
  }

  stop = async (delay) => {
    const client = await this.getClient()
    if (client) {
      client.stop(delay)
    }
  }

  play = async (sound) => {
    const client = await this.getClient()
    if (client) {
      client.play(sound)
    }
  }

  move = async (touch) => {
    const client = await this.getClient()
    if (client) {
      client.move(touch)
    }
  }

  moveByDirection = async (direction, stopAtEnd = true) => {
    const client = await this.getClient()
    if (client) {
      client.moveByDirection(direction, stopAtEnd)
    }
  }

  moveAndStop = async (touch) => {
    const client = await this.getClient()
    if (client) {
      client.moveAndStop(touch)
    }
  }

  doSkill = async (cmd, stopAtEnd) => {
    const client = await this.getClient()
    if (client) {
      client.doSkill(cmd, stopAtEnd)
    }
  }

  run = async (instructions) => {
    const client = await this.getClient()
    if (client) {
      client.run(instructions)
    }
  }
}
