import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { CenterDecorator, FullScreenDarkDecorator } from './Decorators'

import { ArrowJoystick } from '../Joystick'

storiesOf('ArrowJoystick', module)
  .addDecorator(CenterDecorator)
  .addDecorator(FullScreenDarkDecorator)
  .add('Default', () => (
    <ArrowJoystick
      style={{marginTop: 50}}
      onUp={(touch) => {}}
      onDown={(touch) => {}}
      onLeft={() => {}}
      onRight={() => {}} />
  ))
