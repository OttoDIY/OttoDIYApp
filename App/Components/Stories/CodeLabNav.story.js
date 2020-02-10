import React from 'react'
import { storiesOf } from '@storybook/react-native'

import OttoConfig from 'App/Services/Client/Otto/Config'
import { FullScreenDecorator } from './Decorators'
import { CodeLabNav } from '../CodeLab'

const skills = OttoConfig.skills

storiesOf('CodeLab Nav', module)
  .addDecorator(FullScreenDecorator)
  .add('Default', () => (
    <CodeLabNav skills={skills} onPress={(instruction) => {}} />
  ))
