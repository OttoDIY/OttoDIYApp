import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  Modal,
  List,
  ListHeader,
  ListItem,
  CompactListItem,
  SquareListItem } from 'App/Components'

import { Images } from 'App/Themes'

export default class Screen extends Component {
  static propTypes = {
    showNotReadyModal: PropTypes.bool.isRequired,
    onHideNotReadyModal: PropTypes.func.isRequired,
    onPress: PropTypes.objectOf(PropTypes.func).isRequired
  }

  render () {
    const {
      showNotReadyModal,
      onHideNotReadyModal,
      onPress } = this.props
    return (
      <Container scrollable>
        <List>
          <ListHeader title='Level 1' count={3} completed={0} />
          <CompactListItem
            icon='circle-o'
            title='Get Started'
            onPress={onPress.getStarted} />
          <CompactListItem
            icon='circle-o'
            title='Explore'
            onPress={onPress.explore} />
          <CompactListItem
            icon='circle-o'
            title='Play a game'
            onPress={onPress.playGame} />
        </List>
        <List title='Explore'>
          <ListItem
            image={Images.controls.controls}
            title='Drive Mode'
            text='Let’s get moving'
            onPress={onPress.drive} />
          <ListItem
            icon='music'
            iconSet='Material'
            iconStyle={{marginTop: 4}}
            title='Beep beep'
            text='Beep bop boopity beep'
            onPress={onPress.beep} />
        </List>
        <List title='Games' cols={2}>
          <SquareListItem
            icon='play'
            iconStyle={{marginLeft: 4}}
            title='Drive'
            text='Vroom vroom'
            onPress={onPress.drive} />
          <SquareListItem
            icon='play'
            iconStyle={{marginLeft: 4}}
            title='Dance'
            text='Let’s boogie'
            onPress={onPress.dance} />
          <SquareListItem
            icon='play'
            iconStyle={{marginLeft: 4}}
            title='Find a friend'
            text='Humans are nice'
            disabled
            onPress={onPress.findAFriend} />
        </List>
        <Modal
          navigation={this.props.navigation}
          show={showNotReadyModal}
          onHidePress={onHideNotReadyModal}
          template='NotReady' />
      </Container>
    )
  }
}
