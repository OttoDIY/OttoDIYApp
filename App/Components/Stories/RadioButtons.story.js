import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import { Metrics, Colors } from 'App/Themes'
import { PaddedDecorator } from './Decorators'
import { RadioButtons } from '../Buttons'

const style = {
  padding: Metrics.unit * 2,
  alignItems: 'center'
}

storiesOf('Radio Button', module)
  .addDecorator(PaddedDecorator)
  .add('Default', () => (
    <View style={style}>
      <RadioButtons labels={['First', 'Second', 'Third']} onPress={(i) => {}} />
    </View>
  ))
  .add('Second', () => (
    <View style={style}>
      <RadioButtons labels={['First', 'Second', 'Third']} activeIndex={1} onPress={(i) => {}} />
    </View>
  ))
  .add('Third', () => (
    <View style={style}>
      <RadioButtons labels={['First', 'Second', 'Third']} activeIndex={2} onPress={(i) => {}} />
    </View>
  ))
  .add('Light', () => (
    <View style={[style, {backgroundColor: Colors.primary}]}>
      <RadioButtons theme='light' labels={['First', 'Second', 'Third']} onPress={(i) => {}} />
    </View>
  ))
