import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { PaddedDecorator } from './Decorators'

import { Images, Colors } from 'App/Themes'

import { ChamferImageButton } from '../Buttons'

storiesOf('ChamferImageButton', module)
  .addDecorator(PaddedDecorator)
  .add('Default', () => (
    <ChamferImageButton
      image={Images.buttons.ascend}
      backgroundColor={Colors.white}
      onPress={() => {}} />
  ))
