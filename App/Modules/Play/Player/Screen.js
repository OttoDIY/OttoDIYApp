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
import { on } from 'cluster';

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
    onupdown: PropTypes.func,
    onmoonwalkright: PropTypes.func,
    onmoonwalkleft: PropTypes.func,
    onswing: PropTypes.func,
    oncrossright: PropTypes.func,
    oncrossleft: PropTypes.func,
    onflapfront: PropTypes.func,
    onflapback: PropTypes.func,
    ontiptoe: PropTypes.func,
    onbendright: PropTypes.func,
    onbendleft: PropTypes.func,
    onshakeright: PropTypes.func,
    onshakeleft: PropTypes.func,
    onjitter: PropTypes.func,
    onascend: PropTypes.func,
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
      onupdown,
      onmoonwalkright,
      oncrossright,
      oncrossleft,
      onswing,
      onflapfront,
      onflapback,
      ontiptoe,
      onbendright,
      onbendleft,
      onshakeright,
      onshakeleft,
      onjitter,
      onascend,
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
                onPress={onjitter} />
            </View>
            <View style={s.buttonView}>
              <ChamferImageButton
                image={Images.buttons.swing}
                onPress={onswing} />
            </View>
            <View style={s.buttonView}>
              <ChamferImageButton
                image={Images.buttons.tiptoe}
                onPress={ontiptoe} />
            </View>
            <View style={s.buttonView}>
              <ChamferImageButton
                image={Images.buttons.moves}
                onPress={() => {}} />
            </View>
            <View style={s.buttonView}>
              <ChamferImageButton
                image={Images.buttons.updown}
                onPress={updown} />
            </View>
          </View>
          <View style={s.buttonsRowView}>
            <View style={s.buttonView}>
              <ChamferImageButton
                image={Images.buttons.flapback}
                onPress={flapback} />
            </View>
            <View style={s.buttonView}>
              <ChamferImageButton
                image={Images.buttons.moonwalkleft}
                onPress={moonwalkright} />
            </View>
            <View style={s.buttonView}>
              <ChamferImageButton
                image={Images.buttons.shakeleft}
                onPress={shakeleft} />
            </View>
            <View style={s.buttonView}>
              <ChamferImageButton
                image={Images.buttons.bendleft}
                onPress={bendleft} />
            </View>
            <View style={s.buttonView}>
              <ChamferImageButton
                image={Images.buttons.crossleft}
                onPress={crossleft} />
            </View>
          </View>
          <View style={s.buttonsRowView}>
            <View style={s.buttonView}>
              <ChamferImageButton
                image={Images.buttons.flapfront}
                onPress={flapfront} />
            </View>
            <View style={s.buttonView}>
              <ChamferImageButton
                image={Images.buttons.moonwalkright}
                onPress={moonwalkright} />
            </View>
            <View style={s.buttonView}>
              <ChamferImageButton
                image={Images.buttons.shakeright}
                onPress={shakeright} />
            </View>
            <View style={s.buttonView}>
              <ChamferImageButton
                image={Images.buttons.bendright}
                onPress={bendright} />
            </View>
            <View style={s.buttonView}>
              <ChamferImageButton
                image={Images.buttons.crossright}
                onPress={crossright} />
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
                onPress={updown} />
            </View>
            <View style={s.buttonView}>
              <ChamferImageButton
                image={Images.buttons.beep}
                onPress={beep} />
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
