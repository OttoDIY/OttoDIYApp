import React from 'react'
import { storiesOf } from '@storybook/react-native'
import OttoConfig from 'App/Services/Client/Otto/Config'
import { FullScreenDecorator } from './Decorators'

import { PlayerBottomNav } from '../Player'

const slider = {
  default: {
    title: 'Speed',
    labels: ['Slow', 'Normal', 'Fast'],
    defaultIndex: 1
  },
  otto: {
    ...OttoConfig.params[0],
    labels: OttoConfig.params[0].values
  }
}

const skills = {
  default: [
    {
      id: 'skills',
      category: 'Skills',
      items: [
        {title: 'Jump'},
        {title: 'Shuffle'},
        {title: 'Bow'},
        {title: 'Spin'},
        {title: 'Dance'},
        {title: 'Moonwalk'},
        {title: 'Chill'}
      ]
    }
  ],
  otto: OttoConfig.skills
}

storiesOf('Player', module)
  .addDecorator(FullScreenDecorator)
  .add('Bottom Nav', () => (
    <PlayerBottomNav
      slider={slider.default}
      skills={skills.default}
      onSliderPress={() => {}}
      onSkillPress={() => {}} />
  ))
  .add('Bottom Nav Light', () => (
    <PlayerBottomNav
      theme='light'
      slider={slider.default}
      skills={skills.default}
      onSliderPress={() => {}}
      onSkillPress={() => {}} />
  ))
  .add('Otto Bottom Nav', () => (
    <PlayerBottomNav
      theme='light'
      slider={slider.otto}
      skills={skills.otto}
      showSkillIcons
      onSliderPress={() => {}}
      onSkillPress={() => {}} />
  ))
