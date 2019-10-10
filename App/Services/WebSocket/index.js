import Config from 'react-native-config'

import SocketIOClient from 'socket.io-client'

import { isSimulator } from 'App/Services/Properties'

// Random 4-digit room number (0000-9999)
// See https://stackoverflow.com/a/45551032
const randomFourDigitNumber = () => {
  return (Math.floor(Math.random() * 10000) + 10000).toString().substring(1)
}

export default class WebSocket {
  static myInstance = null

  socket = null
  room = null
  isConnected = false

  static getInstance () {
    if (WebSocket.myInstance == null) {
      WebSocket.myInstance = new WebSocket()
      if (isSimulator()) {
        // If in simulator then use room 10000
        WebSocket.myInstance.room = '10000'
      } else {
        WebSocket.myInstance.room = randomFourDigitNumber()
      }
    }

    return WebSocket.myInstance
  }

  connect () {
    if (Config.SOCKET_IO_URL) {
      const opts = {query: { room: this.room }}
      this.socket = SocketIOClient(Config.SOCKET_IO_URL, opts)
      this.isConnected = true
    }
  }

  emit = (event) => {
    if (this.socket && this.isConnected) {
      this.socket.emit('event', {room: this.room, ...event})
    }
  }
}
