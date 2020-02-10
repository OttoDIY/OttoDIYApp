import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import { Metrics, Colors } from 'App/Themes'

import { PaddedDecorator } from './Decorators'

import { LabelRangeSliderInput, SliderInput } from '../Inputs'

storiesOf('Inputs', module)
  .addDecorator(PaddedDecorator)
  .add('Range Slider with 3 Labels', () => (
    <LabelRangeSliderInput
      title='Speed'
      labels={['Slow', 'Normal', 'Fast']}
      onPress={(index) => {}} />
  ))
  .add('Range Slider with 4 Labels', () => (
    <LabelRangeSliderInput
      title='Gait'
      defaultIndex={1}
      labels={['Crawl', 'Walk', 'Trot', 'Bound']}
      onPress={(index) => {}} />
  ))
  .add('Range Slider Light Theme', () => (
    <View style={{ backgroundColor: Colors.primary, paddingHorizontal: Metrics.unit }}>
      <LabelRangeSliderInput
        theme='light'
        title='Speed'
        labels={['Slow', 'Normal', 'Fast']}
        defaultIndex={2}
        onPress={(index) => {}} />
    </View>
  ))
  .add('Slider', () => (
    <SliderInput
      min={1}
      max={60}
      value={1}
      step={1}
      labelSuffix='s'
      onValueChange={(value) => {}} />
  ))
  .add('Slider Light Theme', () => (
    <View style={{ backgroundColor: Colors.primary, paddingHorizontal: Metrics.unit }}>
      <SliderInput
        theme='light'
        min={1}
        max={60}
        value={1}
        step={1}
        labelSuffix='s'
        onValueChange={(value) => {}} />
    </View>
  ))
