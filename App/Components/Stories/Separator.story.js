import React from 'react'
import { storiesOf } from '@storybook/react-native'

import Decorator from './Decorators'

import Separator from '../Separator'

storiesOf('Separator', module)
  .addDecorator(Decorator)
  .add('Default', () => (
    <Separator />
  ))
