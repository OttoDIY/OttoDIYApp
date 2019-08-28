import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { FullScreenDecorator } from './Decorators'
import Web from '../Web'

storiesOf('Web', module)
  .addDecorator(FullScreenDecorator)
  .add('Code&Robots', () => (
    <Web source='http://codeandrobots.com' title='Code & Robots' />
  ))
