import React from 'react'
import { storiesOf } from '@storybook/react-native'

import Decorator from './Decorators'
import { Links, Link } from '../Links'

storiesOf('Links', module)
  .addDecorator(Decorator)
  .add('Single', () => (
    <Link text='Click Me' onPress={() => {}} centered />
  ))
  .add('Multiple', () => (
    <Links>
      <Link text='Link 1' onPress={() => {}} />
      <Link text='Link 2' onPress={() => {}} />
    </Links>
  ))
