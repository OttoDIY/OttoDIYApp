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
  skills: []
}
