import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { Images, Colors } from 'App/Themes'

import Decorator from './Decorators'
import List from '../Lists'
import ListHeader from '../ListHeaders'
import {
  ListItem,
  SquareListItem,
  CompactListItem,
  FeaturedListItem,
  StatListItem } from '../ListItems'

storiesOf('List', module)
  .addDecorator(Decorator)
  .add('Default', () => (
    <List title='Explore'>
      <ListItem image={Images.controls.controls} title='Drive Mode' text='Let’s get moving' onPress={() => {}} />
      <ListItem icon='message-text' iconSet='Material' iconStyle={{marginTop: 4}} title='Beep beep' text='Beep bop boopity beep' onPress={() => {}} />
    </List>
  ))
  .add('Games', () => (
    <List title='Games' cols={2}>
      <SquareListItem icon='play' iconStyle={{marginLeft: 4}} title='Drive' text='Vroom vroom' onPress={() => {}} />
      <SquareListItem icon='play' iconStyle={{marginLeft: 4}} title='Dance' text='Let’s boogie' onPress={() => {}} />
      <SquareListItem icon='play' iconStyle={{marginLeft: 4}} title='Find a friend' text='Humans are nice' disabled onPress={() => {}} />
    </List>
  ))
  .add('Lessons', () => (
    <List>
      <ListHeader title='Lessons' count={3} completed={1} />
      <CompactListItem icon='check-circle-o' title='Get started' onPress={() => {}} />
      <CompactListItem icon='circle-o' title='Play a game' onPress={() => {}} />
      <CompactListItem icon='circle-o' title='Code Remix' disabled onPress={() => {}} />
    </List>
  ))
  .add('Featured', () => (
    <List title='Featured' cols={2}>
      <FeaturedListItem image={Images.featured.led} title='Blink' onPress={() => {}} />
      <FeaturedListItem icon='rocket' iconColor={Colors.black} title='Fly' onPress={() => {}} />
      <FeaturedListItem icon={'heartbeat'} iconColor={Colors.red} title='Heart Beat' onPress={() => {}} />
    </List>
  ))
  .add('Stats', () => (
    <List cols={2}>
      <StatListItem icon='bluetooth' title='bluetooth' value='Connected' />
      <StatListItem icon='battery' title='battery' value='85%' />
      <StatListItem icon='play' title='playtime' value='4.8h' />
      <StatListItem icon='code' title='remixes' value='5' />
      <StatListItem icon='book' title='lessons' value='2' />
      <StatListItem icon='gamepad' title='level' value='1' />
    </List>
  ))
