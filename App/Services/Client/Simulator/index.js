import WebSocket from 'App/Services/WebSocket'

import Config from './Config'

const socket = WebSocket.getInstance()

const sounds = [
  {key: '1', name: 'Beep'},
  {key: '2', name: 'Bop'}
]

const calculateDirection = (touch) => {
  if (touch.dy <= -40) {
    return 'up'
  } else if (touch.dy >= 40) {
    return 'down'
  } else if (touch.dx <= -40) {
    return 'left'
  } else if (touch.dx >= 40) {
    return 'right'
  } else {
    return null
  }
}

export default class Simulator {
  getConfig = () => {
    return Config
  }

  getSounds = () => {
    return sounds
  }

  setSpeed = async (speed) => {
    // TODO
  }

  setLEDMatrix = async (matrix) => {
    // TODO
  }

  stop = async (delay) => {
    if (!delay) {
      // TODO Stop command not supported right now
    }
    setTimeout(() => { this.stop() }, delay)
  }

  play = (sound) => {
    socket.emit({event: 'play', sound})
  }

  move = (touch) => {
    // Only moveAndStop is supported for the time being
  }

  moveByDirection = (direction, stopAtEnd = true) => {
    socket.emit({event: 'move', direction})
  }

  moveAndStop = (touch) => {
    const direction = calculateDirection(touch)
    if (direction) {
      socket.emit({event: 'move', direction})
    }
  }

  doSkill = (cmd, stopAtEnd) => {
    // TODO skill commands not supported right now
  }

  run = (instructions) => {
    let delay = 0
    instructions.forEach((instruction) => {
      setTimeout(() => {
        // TODO Translate instruction to correct event and data
        socket.emit({event: 'move', direction: instruction})
      }, delay)
      delay += 500
    })
  }
}
