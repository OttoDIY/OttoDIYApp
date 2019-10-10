import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { FullScreenDecorator } from './Decorators'

import { Images } from 'App/Themes'

import Footer from '../Footer'
import BottomTabs from '../BottomTabs'

const tabs = [
  {
    id: 'moves',
    image: Images.buttons.moves
  },
  {
    id: 'sounds',
    image: Images.sing.beep
  },
  {
    id: 'gestures',
    image: Images.gestures.superhappy
  }
]

storiesOf('BottomTabs', module)
  .addDecorator(FullScreenDecorator)
  .add('Default', () => (
    <Footer>
      <BottomTabs
        tabs={tabs}
        onTabPress={(tab, tabIndex) => {}} />
    </Footer>
  ))
