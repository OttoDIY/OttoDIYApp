import React, { Component } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import uuid from 'react-native-uuid'

import {
  Container,
  ChamferImageButton,
  Joystick,
  ArrowJoystick,
  LEDMatrix,
  RadioButtons,
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

// Deep clone of default LED Matrix values
const defaultLEDMatrixValue = () => JSON.parse(JSON.stringify([
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0]
]))

export default class Screen extends Component {
  static propTypes = {
    connected: PropTypes.bool.isRequired,
    config: PropTypes.any,
    speed: PropTypes.string.isRequired,
    showNotConnectedModal: PropTypes.bool.isRequired,
    onConnect: PropTypes.func,
    onDraggableMove: PropTypes.func,
    onDraggableRelease: PropTypes.func,
    onDraggableStart: PropTypes.func,
    onUp: PropTypes.func,
    onDown: PropTypes.func,
    onLeft: PropTypes.func,
    onLongPress: PropTypes.func,
    onLongPressOut: PropTypes.func,
    onSkillPress: PropTypes.func,
    onToggleSpeed: PropTypes.func,
    onLEDMatrixPress: PropTypes.func,
    onHelp: PropTypes.func,
    onHideNotConnectedModal: PropTypes.func.isRequired,
    onChooseRobotPress: PropTypes.func.isRequired,
    onCodeLabPress: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)

    this.state = {
      activeTabIndex: 0,
      activeInterfaceIndex: 0,
      ledMatrixValue: defaultLEDMatrixValue()
    }
  }

  onTabPress = (tab, i) => {
    this.setState({
      activeTabIndex: i,
      activeInterfaceIndex: 0,
      ledMatrixValue: defaultLEDMatrixValue()
    })
  }

  onInterfacePress = (i) => {
    this.setState({
      activeInterfaceIndex: i,
      ledMatrixValue: defaultLEDMatrixValue()
    })
  }

  // Clone current ledMatrixValue & swap value at row*col
  onLEDMatrixPress = (row, col) => {
    const { onLEDMatrixPress } = this.props
    const { ledMatrixValue } = this.state
    const newLEDMatrixValue = [...ledMatrixValue]
    newLEDMatrixValue[row][col] = (newLEDMatrixValue[row][col] === 0)
      ? newLEDMatrixValue[row][col] = 1
      : newLEDMatrixValue[row][col] = 0
    this.setState({ ledMatrixValue: newLEDMatrixValue })
    onLEDMatrixPress(newLEDMatrixValue)
  }

  render () {
    const {
      config,
      speed,
      showNotConnectedModal,
      onConnect,
      onDraggableMove,
      onDraggableRelease,
      onDraggableStart,
      onUp,
      onDown,
      onLeft,
      onRight,
      onLongPress,
      onLongPressOut,
      onSkillPress,
      onToggleSpeed,
      onHelp,
      onHideNotConnectedModal,
      onChooseRobotPress,
      onCodeLabPress
    } = this.props

    const { ledMatrixValue, activeTabIndex, activeInterfaceIndex } = this.state

    const { skills, joystick } = config || {}
    // Default (aka arrows) and thumbstick joystick supported,
    // fallback to default if joystick isn't set to 'thumbstick'
    const isDefaultJoystick = joystick !== 'thumbstick'

    const showPlayerBottomNav = config && skills && skills.length > 0

    const activeSkills = (showPlayerBottomNav && skills.length > activeTabIndex)
      ? skills[activeTabIndex].items
      : []
    const skillsInRows = (showPlayerBottomNav)
      ? splitItemsByRow(activeSkills, true)
      : []

    const interfaces = (skills && skills[activeTabIndex]) ? skills[activeTabIndex].interfaces : null

    const isDefaultInterface = (!interfaces || interfaces[activeInterfaceIndex].type === 'default')
    const isLEDMatrixInterface = (interfaces && interfaces[activeInterfaceIndex].type === 'ledMatrix')

    return (
      <Container dark>
        <View style={s.header}>
          <TouchableOpacity onPress={onChooseRobotPress}>
            <Image source={(config) ? config.imageSmall : null} />
          </TouchableOpacity>
          <View style={s.headerCenter} />
          <TouchableOpacity onPress={onCodeLabPress}>
            <Image source={(config) ? config.imageCodeLab : null} />
          </TouchableOpacity>
          {/* <Image source={Images.buttons.battery} /> */}
          {/* connected &&
            <TouchableOpacity onPress={onChooseRobotPress}>
              <Image source={Images.buttons.bluetooth} />
            </TouchableOpacity>
          */}
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
            {isDefaultJoystick &&
              <ArrowJoystick
                onUp={onUp}
                onDown={onDown}
                onLeft={onLeft}
                onRight={onRight}
                onLongPress={onLongPress}
                onLongPressOut={onLongPressOut} />
            }
            {!isDefaultJoystick &&
              <Joystick
                onDraggableMove={onDraggableMove}
                onDraggableRelease={onDraggableRelease}
                onDraggableStart={onDraggableStart} />
            }
          </View>
          <ChamferImageButton
            image={(config) ? config.imageHelp : null}
            onPress={onHelp} />
        </View>
        {interfaces && interfaces.length > 1 &&
          <View style={s.radioButtonsView}>
            <RadioButtons
              theme='light'
              labels={interfaces.map(({ title }) => title)}
              activeIndex={activeInterfaceIndex}
              onPress={this.onInterfacePress} />
          </View>
        }
        {isDefaultInterface &&
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
        }
        {isLEDMatrixInterface &&
          <View style={s.ledMatrixView}>
            <LEDMatrix
              colSize={6}
              rowSize={5}
              matrix={ledMatrixValue}
              onPress={this.onLEDMatrixPress} />
          </View>
        }
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
