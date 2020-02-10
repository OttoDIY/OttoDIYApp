const Instructions = {
  action: {
    up: {
      cmd: 'up',
      icon: 'arrow-up',
      title: 'Move Up'
    },
    left: {
      cmd: 'left',
      icon: 'arrow-left',
      title: 'Move Left'
    },
    right: {
      cmd: 'right',
      icon: 'arrow-right',
      title: 'Move Right'
    },
    down: {
      cmd: 'down',
      icon: 'arrow-down',
      title: 'Move Down'
    }
  },
  sensor: {
    temperature: {
      cmd: 'temperature',
      type: 'sensor',
      icon: 'thermometer',
      title: 'Read Temperature'
    },
    distance: {
      cmd: 'distance',
      type: 'sensor',
      icon: 'road',
      title: 'Read Distance'
    }
  },
  control: {
    if: {
      cmd: 'if',
      type: 'control',
      title: 'If'
    },
    loop: {
      cmd: 'loop',
      type: 'control',
      title: 'Loop'
    },
    while: {
      cmd: 'while',
      type: 'control',
      title: 'While'
    }
  },
  data: {
    color: {
      cmd: 'color',
      type: 'data',
      icon: 'eyedropper',
      title: 'Set Color'
    },
    speed: {
      cmd: 'speed',
      type: 'data',
      icon: 'rocket',
      title: 'Set Speed'
    }
  }
}

export default Instructions
