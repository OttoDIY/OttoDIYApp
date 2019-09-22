import React, { Component } from 'react'
import { connect } from 'react-redux'

import Client, { isConnected } from 'App/Services/Client'

import Screen from './Screen'

export class PlayerContainer extends Component {
  constructor (props) {
    super(props)
    this.client = new Client()
    this.state = {
      connected: false,
      speed: 'medium',
      showNotConnectedModal: false
    }
  }

  async componentWillMount () {
    const connected = await isConnected()
    this.setState({showNotConnectedModal: !connected, connected})
  }

  checkIsConnected = async () => {
    const connected = await isConnected()
    this.setState({showNotConnectedModal: !connected, connected})
    return connected
  }

  onConnect = async () => {
    const connected = await isConnected()
    if (connected) {
      const { speed } = this.state
      this.client.setSpeed(speed)
    }
    this.setState({connected})
  }

  onUp = async () => {
    if (await this.checkIsConnected()) {
      this.client.run(['up'])
    }
  }

  onDown = async () => {
    if (await this.checkIsConnected()) {
      this.client.run(['down'])
    }
  }

  onLeft = async () => {
    if (await this.checkIsConnected()) {
      this.client.run(['left'])
    }
  }

  onRight = async () => {
    if (await this.checkIsConnected()) {
      this.client.run(['right'])
    }
  }

  onLongPress = async (direction) => {
    if (await this.checkIsConnected()) {
      this.client.run([direction], false)
    }
  }

  onLongPressOut = async () => {
    if (await this.checkIsConnected()) {
      this.client.stop()
    }
  }

  onupdown = async () => {
    if (await this.checkIsConnected()) {
      this.client.run(['updown'])
    }
  }
  onmoonwalkright = async () => {
    if (await this.checkIsConnected()) {
      this.client.run(['moonwalkright'])
    }
  }
  onmoonwalkleft = async () => {
    if (await this.checkIsConnected()) {
      this.client.run(['moonwalkleft'])
    }
  }
  oncrossright = async () => {
    if (await this.checkIsConnected()) {
      this.client.run(['crossright'])
    }
  }
  oncrossleft = async () => {
    if (await this.checkIsConnected()) {
      this.client.run(['crossleft'])
    }
  }
  onflapfront = async () => {
    if (await this.checkIsConnected()) {
      this.client.run(['flapfront'])
    }
  }
  onflapback = async () => {
    if (await this.checkIsConnected()) {
      this.client.run(['flapback'])
    }
  }
  onswing = async () => {
    if (await this.checkIsConnected()) {
      this.client.run(['swing'])
    }
  }
  onbendright = async () => {
    if (await this.checkIsConnected()) {
      this.client.run(['bendright'])
    }
  }
  onbendleft = async () => {
    if (await this.checkIsConnected()) {
      this.client.run(['bendleft'])
    }
  }
  onshakeright = async () => {
    if (await this.checkIsConnected()) {
      this.client.run(['shakeright'])
    }
  }
  onshakeleft = async () => {
    if (await this.checkIsConnected()) {
      this.client.run(['shakeleft'])
    }
  }
  onjitter = async () => {
    if (await this.checkIsConnected()) {
      this.client.run(['jitter'])
    }
  }
  onascend = async () => {
    if (await this.checkIsConnected()) {
      this.client.run(['ascend'])
    }
  }
  ontiptoe = async () => {
    if (await this.checkIsConnected()) {
      this.client.run(['tiptoe'])
    }
  }

  onToggleSpeed = () => {
    const { speed } = this.state
    let newSpeed = null
    if (speed === 'medium') {
      newSpeed = 'fast'
    } else if (speed === 'fast') {
      newSpeed = 'slow'
    } else if (speed === 'slow') {
      newSpeed = 'medium'
    }
    this.client.setSpeed(newSpeed)
    this.setState({speed: newSpeed})
  }

  onHelp = () => {
    this.props.navigation.navigate('WebScreen', {
      source: 'https://wikifactory.com/+OttoDIY/otto-diy-plus',
      title: 'Otto DIY+'
    })
  }

  onHideNotConnectedModal = () => {
    this.setState({showNotConnectedModal: false})
  }

  render () {
    const {connected, speed, showNotConnectedModal} = this.state
    return (
      <Screen
        ref={(ref) => {
          this.screen = ref
        }}
        {...this.props}
        connected={connected}
        speed={speed}
        showNotConnectedModal={showNotConnectedModal}
        onConnect={this.onConnect}
        onUp={this.onUp}
        onDown={this.onDown}
        onLeft={this.onLeft}
        onRight={this.onRight}
        onLongPress={this.onLongPress}
        onLongPressOut={this.onLongPressOut}
        onjitter={this.onjitter}
        onswing={this.onswing}
        onupdown={this.onupdown}
        onmoonwalkleft={this.onmoonwalkleft}
        onmoonwalkright={this.onmoonwalkright}
        oncrossright={this.oncrossright}
        oncrossleft={this.oncrossleft}
        onflapfront={this.onflapfront}
        onflapback={this.onflapback}
        ontiptoe={this.ontiptoe}
        onbendright={this.onbendright}
        onbendleft={this.onbendleft}
        onshakeright={this.onshakeright}
        onshakeleft={this.onshakeleft}
        onascend={this.onascend}
        onToggleSpeed={this.onToggleSpeed}
        onHelp={this.onHelp}
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

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer)
