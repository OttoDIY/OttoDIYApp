import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { FullScreenDecorator } from './Decorators'

import { Images } from 'App/Themes'

import Footer from '../Footer'
import BottomTabs from '../BottomTabs'

const tabs = [
  {
    id: 'moves',
    category: 'Moves',
    image: Images.buttons.moves
  },
  {
    id: 'sounds',
    category: 'Sounds',
    image: Images.sing.beep
  },
  {
    id: 'gestures',
    category: 'Gestures',
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
