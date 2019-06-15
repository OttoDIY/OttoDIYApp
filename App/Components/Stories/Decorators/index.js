import React from 'react'
import { View } from 'react-native'

import { Colors, Metrics } from 'App/Themes'

const Decorator = (getStory) => (
  <View style={{ margin: Metrics.unit * 2 }}>{getStory()}</View>
)

export const CenterDecorator = (getStory) => (
  <View style={{ flex: 1, alignItems: 'center' }}>{getStory()}</View>
)

export const FullScreenDecorator = (getStory) => (
  <View style={{ backgroundColor: Colors.offwhite, height: '100%' }}>{getStory()}</View>
)

export const FullScreenDarkDecorator = (getStory) => (
  <View style={{ backgroundColor: Colors.primary, height: '100%' }}>{getStory()}</View>
)

export default Decorator
