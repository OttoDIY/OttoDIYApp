import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { FullScreenDecorator } from './Decorators'
import Carousel from '../Carousel'
import Card from '../Card'

storiesOf('Carousel', module)
  .addDecorator(FullScreenDecorator)
  .add('Default', () => (
    <Carousel>
      <Card title='Page 1' />
      <Card title='Page 2' />
      <Card title='Page 3' />
      <Card title='Page 4' />
    </Carousel>
  ))
  .add('Dilbert', () => (
    <Carousel>
      <Card image={{uri: 'https://i.imgur.com/eMuml0e.png'}} title='Dilbert.com' text='by @ScottAdamSays' />
      <Card image={{uri: 'https://i.imgur.com/rUCKhA8.png'}} title='Dilbert.com' text='by @ScottAdamSays' />
      <Card image={{uri: 'https://i.imgur.com/QFjackk.png'}} title='Dilbert.com' text='by @ScottAdamSays' />
    </Carousel>
  ))
