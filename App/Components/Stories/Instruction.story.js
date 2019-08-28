import React from 'react'
import { storiesOf } from '@storybook/react-native'

import Decorator from './Decorators'
import { Instruction } from '../CodeLab'

storiesOf('Instruction', module)
  .addDecorator(Decorator)
  .add('Action', () => (
    <Instruction icon='arrow-up' title='Move Up' onClose={() => {}} />
  ))
  .add('Sensor', () => (
    <Instruction type='sensor' icon='thermometer' title='Read Temperature' onClose={() => {}} />
  ))
  .add('Control', () => (
    <Instruction type='control' title='If' onClose={() => {}} />
  ))
  .add('Data', () => (
    <Instruction type='data' icon='eyedropper' title='Set Color' onClose={() => {}} />
  ))
