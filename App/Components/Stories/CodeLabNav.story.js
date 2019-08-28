import React from 'react'
import { storiesOf } from '@storybook/react-native'

import Decorator from './Decorators'
import { CodeLabNav } from '../CodeLab'

storiesOf('CodeLab Nav', module)
  .addDecorator(Decorator)
  .add('Default', () => (
    <CodeLabNav onPress={(instruction) => {}} onRun={() => {}} />
  ))
