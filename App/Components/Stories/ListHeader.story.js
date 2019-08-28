import React from 'react'
import { storiesOf } from '@storybook/react-native'

import Decorator from './Decorators'
import ListHeader from '../ListHeaders'

storiesOf('ListHeader', module)
  .addDecorator(Decorator)
  .add('Default', () => (
    <ListHeader title='Shopping List' />
  ))
  .add('Todos', () => (
    <ListHeader title='Todos' count={6} completed={2} />
  ))
