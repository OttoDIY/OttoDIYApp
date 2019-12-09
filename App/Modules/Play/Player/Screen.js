import React, { Component } from 'react'
import { View, Image } from 'react-native'
import PropTypes from 'prop-types'
import uuid from 'react-native-uuid'

import {
  Container,
  ChamferImageButton,
  ArrowJoystick,
  BottomTabs,
  Modal} from 'App/Components'

import { splitItemsByRow } from 'App/Services/UIUtils'

import { Images } from 'App/Themes'

import s from './Styles'

const speedButtonImages = {
  slow: Images.buttons.speed.slow,
  medium: Images.buttons.speed.medium,
  fast: Images.buttons.speed.fast
}

export default class Screen extends Component {
  static propTypes = {
    connected: PropTypes.bool.isRequired,
    config: PropTypes.any,
    speed: PropTypes.string.isRequired,
    showNotConnectedModal: PropTypes.bool.isRequired,
    onConnect: PropTypes.func,
    onUp: PropTypes.func,
    onDown: PropTypes.func,
    onLeft: PropTypes.func,
    onLongPress: PropTypes.func,
    onLongPressOut: PropTypes.func,
    onSkillPress: PropTypes.func,
    onToggleSpeed: PropTypes.func,
    onHelp: PropTypes.func,
    onHideNotConnectedModal: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)

    this.state = {
      activeTabIndex: 0
    }
  }

  onTabPress = (tab, i) => {
    this.setState({ activeTabIndex: i })
  }

  render () {
    const {
      connected,
      config,
      speed,
      showNotConnectedModal,
      onConnect,
      onUp,
      onDown,
      onLeft,
      onRight,
      onLongPress,
      onLongPressOut,
      onSkillPress,
      onToggleSpeed,
      onHelp,
      onHideNotConnectedModal
    } = this.props

    const { activeTabIndex } = this.state

    const { skills } = config || {}

    const showPlayerBottomNav = config && skills && skills.length > 0

    const activeSkills = (showPlayerBottomNav && skills.length > activeTabIndex)
      ? skills[activeTabIndex].items
      : []
    const skillsInRows = (showPlayerBottomNav)
      ? splitItemsByRow(activeSkills, true)
      : []

    return (
      <Container dark>
        <View style={s.header}>
          <Image source={(config) ? config.imageSmall : null} />
          <View style={s.headerCenter} />
          {/* <Image source={Images.buttons.battery} /> */}
          {connected && <Image source={Images.buttons.bluetooth} />}
        </View>
        {/*
          <View style={s.separator}>
            <View style={s.separatorDiagonal}>
              <View style={s.separatorDiagonalLeft} />
            </View>
            <View style={s.separatorCenter} />
            <View style={s.separatorDiagonal}>
              <View style={s.separatorDiagonalRight} />
            </View>
          </View>
        */}
        <View style={s.driveView}>
          <ChamferImageButton
            image={speedButtonImages[speed]}
            onPress={onToggleSpeed} />
          <View style={s.joystickView}>
            <ArrowJoystick
              onUp={onUp}
              onDown={onDown}
              onLeft={onLeft}
              onRight={onRight}
              onLongPress={onLongPress}
              onLongPressOut={onLongPressOut} />
          </View>
          <ChamferImageButton
            image={(config) ? config.imageHelp : null}
            onPress={onHelp} />
        </View>
        <View style={s.buttonsView}>
          {skillsInRows.map((skillsInRow) => {
            return (
              <View key={uuid.v4()} style={s.buttonsRowView}>
                {skillsInRow.map((skill) => {
                  return (skill)
                    ? (
                      <View key={uuid.v4()} style={s.buttonView}>
                        <ChamferImageButton
                          image={skill.image}
                          onPress={() => { onSkillPress(skill) }} />
                      </View>
                    )
                    : (
                      <View key={uuid.v4()} />
                    )
                })}
              </View>
            )
          })}
        </View>
        {/*
        <View style={s.separator_flipped}>
          <View style={s.separatorDiagonal}>
            <View style={s.separatorDiagonalLeft} />
          </View>
          <View style={s.separatorCenter} />
          <View style={s.separatorDiagonal}>
            <View style={s.separatorDiagonalRight} />
          </View>
        </View>
        */}
        {/* <View style={s.buttonsBottomView}>
          <View style={s.buttonsRowView}>
            <View style={s.buttonView}>
              <ChamferImageButton
                image={Images.buttons.updown}
                onPress={onupdown} />
            </View>
            <View style={s.buttonView}>
              <ChamferImageButton
                image={Images.buttons.beep}
                onPress={() => {}} />
            </View>
            <View style={s.buttonView}>
              <ChamferImageButton
                image={Images.gestures.happy}
                onPress={() => {}} />
            </View>
            <View style={s.buttonView}>
              <ChamferImageButton
                image={Images.buttons.ultrasound}
                onPress={() => {}} />
            </View>
          </View>
        </View> */}
        { showPlayerBottomNav &&
          <View style={[s.footer, {borderTopWidth: 0}]}>
            <BottomTabs
              tabs={skills}
              onTabPress={this.onTabPress} />
          </View>
        }
        <Modal
          navigation={this.props.navigation}
          show={showNotConnectedModal}
          onHidePress={onHideNotConnectedModal}
          onBack={onConnect}
          template='NotConnected' />
      </Container>
    )
  }
}
