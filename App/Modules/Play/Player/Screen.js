import React, { Component } from 'react'
import { View, Image } from 'react-native'
import PropTypes from 'prop-types'

import {
  Container,
  ChamferImageButton,
  ArrowJoystick,
  Modal} from 'App/Components'

import { Images } from 'App/Themes'

import s from './Styles'

const speedButtonImages = {
  slow: Images.buttons.speed.slow,
  medium: Images.buttons.speed.medium,
  fast: Images.buttons.speed.fast
}

export default class Screen extends Component {
  static propTypes = {
    speed: PropTypes.string.isRequired,
    showNotConnectedModal: PropTypes.bool.isRequired,
    onUp: PropTypes.func,
    onDown: PropTypes.func,
    onLeft: PropTypes.func,
    onRight: PropTypes.func,
    onToggleSpeed: PropTypes.func,
    onHideNotConnectedModal: PropTypes.func.isRequired
  }

  render () {
    const {
      speed,
      showNotConnectedModal,
      onUp,
      onDown,
      onLeft,
      onRight,
      onToggleSpeed,
      onHideNotConnectedModal
    } = this.props
    return (
      <Container dark>
        <View style={s.header}>
          <Image source={Images.robots.plus} />
          <View style={s.headerCenter} />
          <Image source={Images.buttons.battery} />
          <Image source={Images.buttons.bluetooth} />
        </View>
        <View style={s.separator}>
          <View style={s.separatorDiagonal}>
            <View style={s.separatorDiagonalLeft} />
          </View>
          <View style={s.separatorCenter} />
          <View style={s.separatorDiagonal}>
            <View style={s.separatorDiagonalRight} />
          </View>
        </View>
        <View style={s.driveView}>
          <ChamferImageButton
            image={speedButtonImages[speed]}
            onPress={onToggleSpeed} />
          <View style={s.joystickView}>
            <ArrowJoystick
              onUp={onUp}
              onDown={onDown}
              onLeft={onLeft}
              onRight={onRight} />
          </View>
          <ChamferImageButton
            image={Images.buttons.help}
            onPress={() => {}} />
        </View>
        <View style={s.buttonsView}>
          <View style={s.buttonsRowView}>
            <View style={s.buttonView}>
              <ChamferImageButton
                image={Images.buttons.jitter}
                onPress={() => {}} />
            </View>
            <View style={s.buttonView}>
              <ChamferImageButton
                image={Images.buttons.swing}
                onPress={() => {}} />
            </View>
            <View style={s.buttonView}>
              <ChamferImageButton
                image={Images.buttons.tiptoe}
                onPress={() => {}} />
            </View>
            <View style={s.buttonView}>
              <ChamferImageButton
                image={Images.buttons.moves}
                onPress={() => {}} />
            </View>
            <View style={s.buttonView}>
              <ChamferImageButton
                image={Images.buttons.updown}
                onPress={() => {}} />
            </View>
          </View>
          <View style={s.buttonsRowView}>
            <View style={s.buttonView}>
              <ChamferImageButton
                image={Images.buttons.flapback}
                onPress={() => {}} />
            </View>
            <View style={s.buttonView}>
              <ChamferImageButton
                image={Images.buttons.moonwalkleft}
                onPress={() => {}} />
            </View>
            <View style={s.buttonView}>
              <ChamferImageButton
                image={Images.buttons.shakeleft}
                onPress={() => {}} />
            </View>
            <View style={s.buttonView}>
              <ChamferImageButton
                image={Images.buttons.bendleft}
                onPress={() => {}} />
            </View>
            <View style={s.buttonView}>
              <ChamferImageButton
                image={Images.buttons.crossleft}
                onPress={() => {}} />
            </View>
          </View>
          <View style={s.buttonsRowView}>
            <View style={s.buttonView}>
              <ChamferImageButton
                image={Images.buttons.flapfront}
                onPress={() => {}} />
            </View>
            <View style={s.buttonView}>
              <ChamferImageButton
                image={Images.buttons.moonwalkright}
                onPress={() => {}} />
            </View>
            <View style={s.buttonView}>
              <ChamferImageButton
                image={Images.buttons.shakeright}
                onPress={() => {}} />
            </View>
            <View style={s.buttonView}>
              <ChamferImageButton
                image={Images.buttons.bendright}
                onPress={() => {}} />
            </View>
            <View style={s.buttonView}>
              <ChamferImageButton
                image={Images.buttons.crossright}
                onPress={() => {}} />
            </View>
          </View>
        </View>
        <View style={s.separator_flipped}>
          <View style={s.separatorDiagonal}>
            <View style={s.separatorDiagonalLeft} />
          </View>
          <View style={s.separatorCenter} />
          <View style={s.separatorDiagonal}>
            <View style={s.separatorDiagonalRight} />
          </View>
        </View>
        <View style={s.buttonsBottomView}>
          <View style={s.buttonsRowView}>
            <View style={s.buttonView}>
              <ChamferImageButton
                image={Images.buttons.updown}
                onPress={() => {}} />
            </View>
            <View style={s.buttonView}>
              <ChamferImageButton
                image={Images.buttons.beep}
                onPress={() => {}} />
            </View>
            <View style={s.buttonView}>
              <ChamferImageButton
                image={Images.buttons.gestures.happy}
                onPress={() => {}} />
            </View>
            <View style={s.buttonView}>
              <ChamferImageButton
                image={Images.buttons.ultrasound}
                onPress={() => {}} />
            </View>
          </View>
        </View>
        <Modal
          navigation={this.props.navigation}
          show={showNotConnectedModal}
          onHidePress={onHideNotConnectedModal}
          template='NotConnected' />
      </Container>
    )
  }
}
