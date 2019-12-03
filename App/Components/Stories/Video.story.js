import React from 'react'
import { storiesOf } from '@storybook/react-native'

import Decorator from './Decorators'
import { Videos } from 'App/Themes'

import Video from '../Video'

storiesOf('Video', module)
  .addDecorator(Decorator)
  .add('Default', () => (
    <Video
      video={Videos.atlas}
      size='default'
    />
  ))
  .add('Small', () => (
    <Video
      video={Videos.atlas}
      size='small'
    />
  ))
