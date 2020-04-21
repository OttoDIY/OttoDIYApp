import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { Colors } from 'App/Themes'
import { CenterDecorator } from './Decorators'
import LEDMatrix from '../LEDMatrix'

const smile = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0, 0, 1, 0],
  [0, 0, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]

const cross = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 1, 0],
  [0, 0, 1, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0]
]

const smallStyle = {
  led: {
    width: 12,
    height: 12,
    borderRadius: 6,
    margin: 3,
    backgroundColor: Colors.primaryTranslucent
  },
  led_active: {
    backgroundColor: Colors.primary
  }
}

storiesOf('LEDMatrix', module)
  .addDecorator(CenterDecorator)
  .add('Default', () => (
    <LEDMatrix onPress={() => {}} />
  ))
  .add('Smile', () => (
    <LEDMatrix matrix={smile} onPress={() => {}} />
  ))
  .add('Small cross', () => (
    <LEDMatrix
      style={smallStyle}
      colSize={7}
      rowSize={7}
      matrix={cross}
      onPress={() => {}} />
  ))
