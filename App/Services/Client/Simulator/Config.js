export default {
  name: 'Simulator',
  connection: {
    type: 'socket',
    url: 'http://192.168.1.8:3001'
  },
  features: {
    drive: true,
    beep: true
  },
  params: [],
  moves: [
    { title: 'Wait', showDuration: true },
    { title: 'Up', cmd: 'up' },
    { title: 'Down', cmd: 'down' },
    { title: 'Left', cmd: 'left' },
    { title: 'Right', cmd: 'right' }
  ],
  skills: []
}
