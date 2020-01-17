import React, { Component } from 'react'
import { View, ScrollView, Text } from 'react-native'
import PropTypes from 'prop-types'

import { TouchableOpacity, Icon, Button } from 'App/Components'

import { Colors } from 'App/Themes'

import s from './Styles'

import Instructions from 'App/Components/CodeLab/Instructions'

const Types = {
  action: 'action',
  sensor: 'sensor',
  control: 'control',
  data: 'data'
}

export default class CodeLabNav extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    onRun: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)

    this.state = {
      active: Types.action
    }
  }

  setActive = (active) => {
    this.setState({ active })
  }

  render () {
    const { style = undefined, onPress, onRun } = this.props
    const { active } = this.state

    return (
      <View style={[s.view, style]}>
        <View style={s.typesView}>
          <TouchableOpacity
            style={[s.typeView, (active === Types.action) ? s.typeView_action : null]}
            onPress={() => { this.setActive(Types.action) }}>
            <Text style={s.text}>ACTION</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[s.typeView, (active === Types.sensor) ? s.typeView_sensor : null]}
            onPress={() => { this.setActive(Types.sensor) }}>
            <Text style={s.text}>SENSOR</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[s.typeView, (active === Types.control) ? s.typeView_control : null]}
            onPress={() => { this.setActive(Types.control) }}>
            <Text style={s.text}>CONTROL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[s.typeView, (active === Types.data) ? s.typeView_data : null]}
            onPress={() => { this.setActive(Types.data) }}>
            <Text style={s.text}>DATA</Text>
          </TouchableOpacity>
        </View>
        {active === Types.action && (
          <ScrollView
            horizontal
            bounces={false}
            showsHorizontalScrollIndicator={false}
            style={s.instructionsScrollView}>
            <View style={s.instructionsView}>
              <TouchableOpacity style={s.instructionView} onPress={() => { onPress(Instructions.action.up) }}>
                <Icon name={Instructions.action.up.icon} size={24} color={Colors.white} style={s.icon} />
                <Text style={s.instruction}>{Instructions.action.up.title}</Text>
              </TouchableOpacity>
              <View style={s.separator} />
              <TouchableOpacity style={s.instructionView} onPress={() => { onPress(Instructions.action.left) }}>
                <Icon name={Instructions.action.left.icon} size={24} color={Colors.white} style={s.icon} />
                <Text style={s.instruction}>{Instructions.action.left.title}</Text>
              </TouchableOpacity>
              <View style={s.separator} />
              <TouchableOpacity style={s.instructionView} onPress={() => { onPress(Instructions.action.right) }}>
                <Icon name={Instructions.action.right.icon} size={24} color={Colors.white} style={s.icon} />
                <Text style={s.instruction}>{Instructions.action.right.title}</Text>
              </TouchableOpacity>
              <View style={s.separator} />
              <TouchableOpacity style={s.instructionView} onPress={() => { onPress(Instructions.action.down) }}>
                <Icon name={Instructions.action.down.icon} size={24} color={Colors.white} style={s.icon} />
                <Text style={s.instruction}>{Instructions.action.down.title}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
        {active === Types.sensor && (
          <ScrollView
            horizontal
            bounces={false}
            showsHorizontalScrollIndicator={false}
            style={[s.instructionsScrollView, s.instructionsScrollView_sensor]}>
            <View style={s.instructionsView}>
              <TouchableOpacity style={s.instructionView} onPress={() => { onPress(Instructions.sensor.temperature) }}>
                <Icon name={Instructions.sensor.temperature.icon} size={24} color={Colors.white} style={s.icon} />
                <Text style={s.instruction}>{Instructions.sensor.temperature.title}</Text>
              </TouchableOpacity>
              <View style={s.separator} />
              <TouchableOpacity style={s.instructionView} onPress={() => { onPress(Instructions.sensor.distance) }}>
                <Icon name={Instructions.sensor.distance.icon} size={24} color={Colors.white} style={s.icon} />
                <Text style={s.instruction}>{Instructions.sensor.distance.title}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
        {active === Types.control && (
          <ScrollView
            horizontal
            bounces={false}
            showsHorizontalScrollIndicator={false}
            style={[s.instructionsScrollView, s.instructionsScrollView_control]}>
            <View style={s.instructionsView}>
              <TouchableOpacity style={s.instructionView} onPress={() => { onPress(Instructions.control.if) }}>
                <Text style={s.instruction}>{Instructions.control.if.title}</Text>
              </TouchableOpacity>
              <View style={s.separator} />
              <TouchableOpacity style={s.instructionView} onPress={() => { onPress(Instructions.control.loop) }}>
                <Text style={s.instruction}>{Instructions.control.loop.title}</Text>
              </TouchableOpacity>
              <View style={s.separator} />
              <TouchableOpacity style={s.instructionView} onPress={() => { onPress(Instructions.control.while) }}>
                <Text style={s.instruction}>{Instructions.control.while.title}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
        {active === Types.data && (
          <ScrollView
            horizontal
            bounces={false}
            showsHorizontalScrollIndicator={false}
            style={[s.instructionsScrollView, s.instructionsScrollView_data]}>
            <View style={s.instructionsView}>
              <TouchableOpacity style={s.instructionView} onPress={() => { onPress(Instructions.data.color) }}>
                <Icon name={Instructions.data.color.icon} size={24} color={Colors.white} style={s.icon} />
                <Text style={s.instruction}>{Instructions.data.color.title}</Text>
              </TouchableOpacity>
              <View style={s.separator} />
              <TouchableOpacity style={s.instructionView} onPress={() => { onPress(Instructions.data.speed) }}>
                <Icon name={Instructions.data.speed.icon} size={24} color={Colors.white} style={s.icon} />
                <Text style={s.instruction}>{Instructions.data.speed.title}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
        <View style={s.footer}>
          <Button text='Run' onPress={onRun} />
        </View>
      </View>
    )
  }
}
