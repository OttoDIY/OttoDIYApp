import React from 'react'
import { Linking } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import Decorator from './Decorators'
import { Images, Videos } from 'App/Themes'

import Card from '../Card'

storiesOf('Card', module)
  .addDecorator(Decorator)
  .add('Hello', () => (
    <Card
      image={Images.hello}
      title='HELLO'
      text='Welcome to Code&Robots'
      button='Learn More'
      onPress={() => {}} />
  ))
  .add('Atlas', () => (
    <Card
      video={Videos.atlas}
      title='🤖⬆️'
      text='Jump, Atlas, Jump!'
      link='Atlas on Wikipedia'
      onLinkPress={() => {
        Linking.openURL('https://en.wikipedia.org/wiki/Atlas_(robot)')
      }} />
  ))
