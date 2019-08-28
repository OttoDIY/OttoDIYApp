import React from 'react'
import { SafeAreaView } from 'react-native'

import { Colors, Metrics } from 'App/Themes'

const Decorator = (getStory) => (
  <SafeAreaView>{getStory()}</SafeAreaView>
)

export const PaddedDecorator = (getStory) => (
  <SafeAreaView style={{ margin: Metrics.unit * 2 }}>{getStory()}</SafeAreaView>
)

export const CenterDecorator = (getStory) => (
  <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>{getStory()}</SafeAreaView>
)

export const FullScreenDecorator = (getStory) => (
  <SafeAreaView style={{ backgroundColor: Colors.offwhite, height: '100%' }}>{getStory()}</SafeAreaView>
)

export const FullScreenDarkDecorator = (getStory) => (
  <SafeAreaView style={{ backgroundColor: Colors.primary, height: '100%' }}>{getStory()}</SafeAreaView>
)

export default Decorator
