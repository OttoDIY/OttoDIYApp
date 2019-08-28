import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { FullScreenDecorator } from './Decorators'
import { InstructionList } from '../CodeLab'

const up = {icon: 'arrow-up', title: 'Move Up'}
const left = {icon: 'arrow-left', title: 'Move Left'}
const right = {icon: 'arrow-right', title: 'Move Right'}
const down = {icon: 'arrow-down', title: 'Move Down'}

const instructions = [up, left, left, down, down, right, right, up]

storiesOf('InstructionList', module)
  .addDecorator(FullScreenDecorator)
  .add('Default', () => (
    <InstructionList
      instructions={instructions}
      onChangeOrder={(orderNext) => {}}
      onClose={() => {}} />
  ))
