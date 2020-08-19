import { Images } from 'App/Themes'

export const Speed = {
  Slow: 1500,
  Normal: 1000,
  Fast: 500
}

export default {
  name: 'Eyes',
  image: Images.robots.eyes,
  imageSmall: Images.robots.eyesSmall,
  imageCodeLab: Images.robots.eyesCodeLab,
  imageHelp: Images.eyes.help,
  description: 'Emotional lovely robot with expresive eyes',
  links: [
    {
      title: 'Build Instructions',
      url: 'https://wikifactory.com/+OttoDIY/eyes'
    },
    {
      title: 'Build Video',
      url: 'https://youtu.be/w7IcB6HTTqM'
    },
    {
      title: 'Website',
      url: 'https://www.ottodiy.com'
    }
  ],
  connection: {
    type: 'bluetooth',
    image: Images.robots.eyesBluetooth
  },
  params: [
    {
      title: 'Speed',
      values: ['Slow', 'Normal', 'Fast'],
      defaultIndex: 1
    }
  ],
  joystick: 'default',
  commands: {
    stop: 'M 0',
    walk: {
      forwards: 'M 1',
      backwards: 'M 2',
      right: 'M 3',
      left: 'M 4'
    }
  },
  moves: [
    { title: 'Wait', cmd: 'M 0', showDuration: true },
    { title: 'Forwards', cmd: 'M 1', showDuration: true },
    { title: 'Back', cmd: 'M 2', showDuration: true },
    { title: 'Left', cmd: 'M 4', showDuration: true },
    { title: 'Right', cmd: 'M 3', showDuration: true }
  ],
  skills: [
    {
      id: 'skills',
      category: 'Skills',
      image: Images.eyes.moonwalkleft,
      items: [
        { title: 'Jitter', image: Images.eyes.jitter, cmd: 'M 19', stopAtEnd: true },
        { title: 'Swing', image: Images.eyes.swing, cmd: 'M 8', stopAtEnd: true },
        { title: 'Tiptoe', image: Images.eyes.tiptoe, cmd: 'M 14', stopAtEnd: true },
        { title: 'Ascend', image: Images.eyes.ascend, cmd: 'M 20', stopAtEnd: true },
        { title: 'Up Down', image: Images.eyes.updown, cmd: 'M 5', stopAtEnd: true },
        { title: 'Flap Back', image: Images.eyes.flapback, cmd: 'M 13', stopAtEnd: true },
        { title: 'Moonwalk Left', image: Images.eyes.moonwalkleft, cmd: 'M 7', stopAtEnd: true },
        { title: 'Shake Left', image: Images.eyes.shakeleft, cmd: 'M 17', stopAtEnd: true },
        { title: 'Bend Left', image: Images.eyes.bendleft, cmd: 'M 15', stopAtEnd: true },
        { title: 'Cross Left', image: Images.eyes.crossleft, cmd: 'M 10', stopAtEnd: true },
        { title: 'Flap Front', image: Images.eyes.flapfront, cmd: 'M 12', stopAtEnd: true },
        { title: 'Moonwalk Right', image: Images.eyes.moonwalkright, cmd: 'M 6', stopAtEnd: true },
        { title: 'Shake Right', image: Images.eyes.shakeright, cmd: 'M 18', stopAtEnd: true },
        { title: 'Bend Right', image: Images.eyes.bendright, cmd: 'M 16', stopAtEnd: true },
        { title: 'Cross Right', image: Images.eyes.crossright, cmd: 'M 9', stopAtEnd: true }
      ]
    },
    {
      id: 'sounds',
      category: 'Sounds',
      image: Images.eyes.beep,
      items: [
        { title: 'Sing 1', image: Images.sing.mode1, cmd: 'K 16', stopAtEnd: false },
        { title: 'Sing 2', image: Images.sing.mode2, cmd: 'K 17', stopAtEnd: false },
        { title: 'Sing 3', image: Images.sing.mode3, cmd: 'K 18', stopAtEnd: false },
        { title: 'OhOoh', image: Images.sing.ohooh, cmd: 'K 4', stopAtEnd: false },
        { title: 'Push', image: Images.sing.buttonPushed, cmd: 'K 19', stopAtEnd: false },
        { title: 'Kinda Happy', image: Images.sing.happyShort, cmd: 'K 10', stopAtEnd: false },
        { title: 'Happy', image: Images.sing.happy, cmd: 'K 8', stopAtEnd: false },
        { title: 'Super Happy', image: Images.sing.superHappy, cmd: 'K 9', stopAtEnd: false },
        { title: 'Sad', image: Images.sing.sad, cmd: 'K 11', stopAtEnd: false },
        { title: 'Sleeping', image: Images.sing.sleeping, cmd: 'K 7', stopAtEnd: false },
        { title: 'Surprise', image: Images.sing.surprise, cmd: 'K 3', stopAtEnd: false },
        { title: 'Disconnection', image: Images.sing.disconnection, cmd: 'K 2', stopAtEnd: false },
        { title: 'Confused', image: Images.sing.confused, cmd: 'K 12', stopAtEnd: false },
        { title: 'Fart', image: Images.sing.fart3, cmd: 'K 15', stopAtEnd: false },
        { title: 'Cuddly', image: Images.sing.cuddly, cmd: 'K 6', stopAtEnd: false }
      ]
    },
    {
      id: 'gestures',
      category: 'Gestures',
      image: Images.gestures.superhappy,
      items: [
        { title: 'Happy', image: Images.gestures.happy, cmd: 'H 1', stopAtEnd: false },
        { title: 'Super Happy', image: Images.gestures.superhappy, cmd: 'H 2', stopAtEnd: false },
        { title: 'Love', image: Images.gestures.love, cmd: 'H 7', stopAtEnd: false },
        { title: 'Sad', image: Images.gestures.sad, cmd: 'H 3', stopAtEnd: false },
        { title: 'Fail', image: Images.gestures.fail, cmd: 'H 13', stopAtEnd: false },
        { title: 'Confused', image: Images.gestures.confused, cmd: 'H 6', stopAtEnd: false },
        { title: 'Fart', image: Images.gestures.fart, cmd: 'H 5', stopAtEnd: false },
        { title: 'Fretful', image: Images.gestures.fretful, cmd: 'H 9', stopAtEnd: false },
        { title: 'Angry', image: Images.gestures.angry, cmd: 'H 8', stopAtEnd: false },
        { title: 'Sleeping', image: Images.gestures.sleeping, cmd: 'H 4', stopAtEnd: false },
        { title: 'Magic', image: Images.gestures.magic, cmd: 'H 10', stopAtEnd: false },
        { title: 'Victory', image: Images.gestures.victory, cmd: 'H 12', stopAtEnd: false },
        { title: 'Wave', image: Images.gestures.wave, cmd: 'H 11', stopAtEnd: false }
      ]
    }
  ]
}
