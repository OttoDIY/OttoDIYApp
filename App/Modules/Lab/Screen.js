import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  Footer,
  Modal,
  Links,
  Link,
  List,
  StatListItem } from 'App/Components'

import { Metrics } from 'App/Themes'

export default class Screen extends Component {
  static propTypes = {
    showNotReadyModal: PropTypes.bool.isRequired,
    onHideNotReadyModal: PropTypes.func.isRequired,
    onPress: PropTypes.func.isRequired
  }

  render () {
    const {
      showNotReadyModal,
      onHideNotReadyModal,
      onPress } = this.props
    return (
      <Container>
        <List style={{ margin: Metrics.unit * 2 }} cols={2}>
          <StatListItem icon='bluetooth' title='bluetooth' value='Connected' />
          <StatListItem icon='battery' title='battery' value='85%' />
          <StatListItem icon='play' title='playtime' value='4.8h' />
          <StatListItem icon='code' title='remixes' value='5' />
          <StatListItem icon='book' title='lessons' value='2' />
          <StatListItem icon='gamepad' title='level' value='1' />
        </List>
        <Modal
          navigation={this.props.navigation}
          show={showNotReadyModal}
          onHidePress={onHideNotReadyModal}
          template='NotReady' />
        <Footer>
          <Links>
            <Link theme='light' text='Shop' onPress={onPress} />
            <Link theme='light' text='Customize' onPress={onPress} />
            <Link theme='light' text='Add a buddy' onPress={onPress} />
            <Link theme='light' text='View logs' onPress={onPress} />
          </Links>
        </Footer>
      </Container>
    )
  }
}
