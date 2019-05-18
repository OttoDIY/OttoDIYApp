import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import {
  Container,
  Footer,
  Joystick,
  Card,
  Modal} from 'App/Components'

import s from './Styles'

export default class Screen extends Component {
  static propTypes = {
    showNotConnectedModal: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    onDraggableMove: PropTypes.func,
    onDraggableRelease: PropTypes.func,
    onDraggableStart: PropTypes.func,
    onHideNotConnectedModal: PropTypes.func.isRequired
  }

  render () {
    const {
      message,
      showNotConnectedModal,
      onDraggableMove,
      onDraggableRelease,
      onDraggableStart,
      onHideNotConnectedModal
    } = this.props
    return (
      <Container>
        <View style={s.joystickView}>
          <Joystick
            onDraggableMove={onDraggableMove}
            onDraggableRelease={onDraggableRelease}
            onDraggableStart={onDraggableStart} />
        </View>
        <Modal
          navigation={this.props.navigation}
          show={showNotConnectedModal}
          onHidePress={onHideNotConnectedModal}
          template='NotConnected' />
        <Footer>
          <Card theme='light' text={message} />
        </Footer>
      </Container>
    )
  }
}
