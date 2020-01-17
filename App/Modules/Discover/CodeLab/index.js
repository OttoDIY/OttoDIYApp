import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'react-native-uuid'

import Client, { isConnected } from 'App/Services/Client'
import { NavButton } from 'App/Components'

import Screen from './Screen'

export class CodeLabContainer extends Component {
  static navigationOptions = ({ navigation }) => {
    const {params = {}} = navigation.state
    return (params.headerRight)
      ? { headerRight: params.headerRight }
      : {}
  }

  constructor (props) {
    super(props)
    this.client = new Client()
    this.order = null
    this.state = {
      config: null,
      instructions: [],
      instructionValues: {},
      showNotConnectedModal: false,
      navHeight: 0
    }
  }

  async componentWillMount () {
    this.props.navigation.setParams({
      headerRight: <NavButton onPress={this.onRun} text='Run' />
    })
    const connected = await isConnected()
    if (connected) {
      const config = await this.client.getConfig()
      this.setState({ config })
    } else {
      this.setState({showNotConnectedModal: true})
    }
  }

  onConnect = async () => {
    const connected = await isConnected()
    if (connected) {
      const config = await this.client.getConfig()
      this.setState({ config })
    }
  }

  onHideNotConnectedModal = () => {
    this.setState({showNotConnectedModal: false})
  }

  sortInstructions = () => {
    if (!this.order) {
      return this.state.instructions
    }
    const instructions = []
    for (var i = 0; i < this.order.length; i++) {
      const next = this.order[i]
      instructions.push(this.state.instructions[next])
    }

    // reset order now that instructions have been sorted
    this.order = null

    return instructions
  }

  // Make a copy of the instructions and set their duration
  // Convert duration to millis if toMillis is true
  copyInstructionsWithDuration = (instructions, toMillis = false) => {
    const { instructionValues } = this.state
    const instructionsWithDuration = [...instructions]
    const convertionMultiplier = (toMillis) ? 1000 : 1

    for (var instruction of instructionsWithDuration) {
      const value = instructionValues[instruction.id]
      instruction.duration = (value)
        ? value.duration * convertionMultiplier
        : null
    }
    return instructionsWithDuration
  }

  onSlidingComplete = (instruction, value) => {
    const { instructionValues } = this.state
    const instructionValuesUpdate = {...instructionValues}
    const instructionValue = instructionValuesUpdate[instruction.id] || {}
    if (instructionValue.duration !== value) {
      instructionValue.duration = value
      instructionValuesUpdate[instruction.id] = instructionValue
      this.setState({ instructionValues: instructionValuesUpdate })
    }
  }

  onChangeOrder = (order) => {
    this.order = order
    const instructions = [...this.sortInstructions()]
    this.setState({ instructions })
  }

  onNavHeightChange = (navHeight) => {
    this.setState({ navHeight })
  }

  onClose = (instructionToRemove) => {
    const instructions = this.sortInstructions().filter(
      (instruction) => instruction.id !== instructionToRemove.id
    )
    this.setState({ instructions })
  }

  onNavPress = (category, instruction) => {
    const instructions = [...this.sortInstructions()]
    instructions.push({...instruction, id: uuid.v4()})
    this.setState({ instructions })
  }

  onRun = async () => {
    const connected = await isConnected()
    if (connected) {
      const instructions = this.sortInstructions()
      const instructionsWithDuration = this.copyInstructionsWithDuration(instructions, true)
      this.client.run(instructionsWithDuration)
    } else {
      this.setState({showNotConnectedModal: true})
    }
  }

  render () {
    const { config, instructions, showNotConnectedModal, navHeight } = this.state
    const instructionsWithDuration = this.copyInstructionsWithDuration(instructions)
    return (
      <Screen
        ref={(ref) => {
          this.screen = ref
        }}
        {...this.props}
        config={config}
        instructions={instructionsWithDuration}
        showNotConnectedModal={showNotConnectedModal}
        navHeight={navHeight}
        onConnect={this.onConnect}
        onSlidingComplete={this.onSlidingComplete}
        onChangeOrder={this.onChangeOrder}
        onNavHeightChange={this.onNavHeightChange}
        onClose={this.onClose}
        onNavPress={this.onNavPress}
        onRun={this.onRun}
        onHideNotConnectedModal={this.onHideNotConnectedModal}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CodeLabContainer)
