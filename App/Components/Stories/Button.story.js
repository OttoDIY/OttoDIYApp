import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { PaddedDecorator } from './Decorators'
import { Button } from '../Buttons'

storiesOf('Button', module)
  .addDecorator(PaddedDecorator)
  .add('Default', () => (
    <Button text='Click Me' onPress={() => {}} />
  ))
  .add('Disabled', () => (
    <Button text='Locked' disabled onPress={() => {}} />
  ))
