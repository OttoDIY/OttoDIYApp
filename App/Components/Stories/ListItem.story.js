import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { Images, Videos } from 'App/Themes'

import Decorator from './Decorators'
import {
  ListItem,
  SquareListItem,
  CompactListItem,
  FeaturedListItem,
  StatListItem,
  CardListItem } from '../ListItems'

storiesOf('ListItem', module)
  .addDecorator(Decorator)
  .add('Default', () => (
    <ListItem title='Play & Explore' text='Let’s play' button='Play' onPress={() => {}} />
  ))
  .add('Beep', () => (
    <ListItem icon='message-text' iconSet='Material' iconStyle={{marginTop: 4}} title='Beep beep' text='Beep bop boopity beep' onPress={() => {}} />
  ))
  .add('Drive', () => (
    <ListItem image={Images.controls.controls} title='Drive Mode' text='Let’s get moving' onPress={() => {}} />
  ))
  .add('Disabled', () => (
    <ListItem title='Pro Level' text='Go up a level' button='Locked' disabled onPress={() => {}} />
  ))
  .add('Square', () => (
    <SquareListItem icon='play' iconStyle={{marginLeft: 4}} title='Dance' text='Let’s boogie' onPress={() => {}} />
  ))
  .add('Square Disabled', () => (
    <SquareListItem icon='lock' title='Pro Level' text='Go up a level' disabled onPress={() => {}} />
  ))
  .add('Compact', () => (
    <CompactListItem icon='circle-o' title='Play a game' onPress={() => {}} />
  ))
  .add('Compact No Icon', () => (
    <CompactListItem title='Task #1' onPress={() => {}} />
  ))
  .add('Compact Disabled', () => (
    <CompactListItem icon='lock' title='Level 2 (Locked)' disabled onPress={() => {}} />
  ))
  .add('Featured', () => (
    <FeaturedListItem image={Images.featured.led} title='Blink' onPress={() => {}} />
  ))
  .add('Featured Disabled', () => (
    <FeaturedListItem icon='lock' title='Pro Level' disabled onPress={() => {}} />
  ))
  .add('Stat', () => (
    <StatListItem icon='bluetooth' title='bluetooth' value='Connected' />
  ))
  .add('CardListItem Image', () => (
    <CardListItem
      image={Images.robots.otto}
      title='Otto DIY'
      text='The open source robot that you can build yourself' />
  ))
  .add('CardListItem Video', () => (
    <CardListItem
      video={Videos.atlas}
      title='Otto DIY'
      text='The open source robot that you can build yourself'
    />
  ))
