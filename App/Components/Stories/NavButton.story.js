import React from 'react'
import { storiesOf } from '@storybook/react-native'

import Decorator from './Decorators'
import { NavButton } from '../Buttons'

storiesOf('NavButton', module)
  .addDecorator(Decorator)
  .add('Default', () => (
    <NavButton onPress={() => {}} text='Done' />
  ))
