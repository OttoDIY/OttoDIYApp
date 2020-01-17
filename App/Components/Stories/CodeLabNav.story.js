import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { FullScreenDecorator } from './Decorators'
import { CodeLabNav } from '../CodeLab'

const skills = [
  {
    category: 'Move',
    items: [
      { title: 'Forwards' },
      { title: 'Back' },
      { title: 'Left' },
      { title: 'Right' }
    ]
  },
  {
    category: 'Skills',
    items: [
      { title: 'Up Down' },
      { title: 'Swing' },
      { title: 'Ascend' },
      { title: 'Tiptoe' },
      { title: 'Jitter' }
    ]
  },
  {
    category: 'Sounds',
    items: [
      { title: 'Beep' },
      { title: 'Bye' },
      { title: 'Surprise' }
    ]
  },
  {
    category: 'Moods',
    items: [
      { title: 'Happy' },
      { title: 'Sad' },
      { title: 'Silly' }
    ]
  }
]

storiesOf('CodeLab Nav', module)
  .addDecorator(FullScreenDecorator)
  .add('Default', () => (
    <CodeLabNav skills={skills} onPress={(instruction) => {}} />
  ))
