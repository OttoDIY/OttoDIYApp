import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import PropTypes from 'prop-types'

import Types from 'App/Services/PropTypes'

import {
  Container,
  Footer,
  Card,
  List,
  ListItem,
  Modal } from 'App/Components'

import { Metrics, Images } from 'App/Themes'

export default class Screen extends Component {
  static propTypes = {
    error: Types.error,
    connectTo: PropTypes.string,
    robotImage: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    enabled: PropTypes.bool.isRequired,
    scanning: PropTypes.bool.isRequired,
    devices: PropTypes.arrayOf(Types.bluetoothDevice).isRequired,
    activeDevice: Types.bluetoothDevice,
    showProblemsConnectingModal: PropTypes.bool.isRequired,
    showIsYourDeviceSupportedModal: PropTypes.bool.isRequired,
    instructions: PropTypes.string.isRequired,
    onEnableBluetooth: PropTypes.func.isRequired,
    onScan: PropTypes.func.isRequired,
    onConnect: PropTypes.func.isRequired,
    onDisconnect: PropTypes.func.isRequired,
    onDone: PropTypes.func.isRequired,
    onEmailInstructions: PropTypes.func.isRequired,
    onIsYourDeviceSupported: PropTypes.func.isRequired,
    onProblemsConnecting: PropTypes.func.isRequired,
    onHideProblemsConnectingModal: PropTypes.func.isRequired
  }

  getRobotImage = () => {
    const { robotImage = Images.bluetooth } = this.props
    return robotImage
  }

  renderConnectTo = () => {
    const {
      onConnectTo,
      onIsYourDeviceSupported } = this.props
    return (
      <Container>
        <Card
          image={this.getRobotImage()}
          link={'Is the device you want\nto connect to supported?'}
          onLinkPress={onIsYourDeviceSupported} />
        {this.renderIsYourDeviceSupportedModal()}
        <Footer style={{paddingTop: 0}}>
          <Card
            theme='light'
            title='CHOOSE HOW TO CONNECT'
            text='Connect to a bluetooth device OR to the Code & Robots simulator'
            button='Connect Bluetooth Device'
            link={'Connect to the\nCode & Robots Simulator'}
            textAlign='left'
            onPress={() => { onConnectTo('device') }}
            onLinkPress={() => { onConnectTo('simulator') }}
            style={{textView: {marginBottom: Metrics.unit * 2}}} />
        </Footer>
      </Container>
    )
  }

  renderConnectedToSimulator = () => {
    const { instructions, onDone, onEmailInstructions } = this.props
    return (
      <Container>
        <Footer style={{paddingTop: 0}}>
          <Card
            theme='light'
            title='YOU`RE CONNECTED TO THE SIMULATOR'
            text={instructions}
            button='Done'
            link='Email simulator link'
            textAlign='left'
            onPress={onDone}
            onLinkPress={onEmailInstructions}
            style={{textView: {marginBottom: Metrics.unit * 2}}} />
        </Footer>
        <Card
          image={this.getRobotImage()}
          title='Good job 👍' />
      </Container>
    )
  }

  renderTurnOnBluetooth = () => {
    const { onEnableBluetooth, onProblemsConnecting } = this.props
    return (
      <Container>
        <Footer style={{paddingTop: 0}}>
          <Card
            theme='light'
            title='BLUETOOTH IS TURNED OFF'
            text='You need to turn on Bluetooth before connecting'
            button='Turn on Bluetooth'
            link='Problems Connecting?'
            textAlign='left'
            onPress={onEnableBluetooth}
            onLinkPress={onProblemsConnecting}
            style={{textView: {marginBottom: Metrics.unit * 2}}} />
        </Footer>
        <Card image={this.getRobotImage()} />
        {this.renderProblemsConnectingModal()}
      </Container>
    )
  }

  renderConnectedDevice = () => {
    const {
      activeDevice,
      onDone,
      onDisconnect } = this.props

    return (
      <Container>
        <List>
          <ListItem
            key={activeDevice.id}
            title={activeDevice.name}
            text='Connected, tap to disconnect'
            buttonIcon='bluetooth-b'
            buttonIconSize={22}
            onPress={() => { onDisconnect() }} />
        </List>
        <Footer style={{paddingTop: 0}}>
          <Card
            theme='light'
            title='YOU’RE CONNECTED'
            text='All hooked up & ready to go!'
            button='Done'
            textAlign='left'
            onPress={onDone}
            style={{textView: {marginBottom: Metrics.unit * 2}}} />
        </Footer>
      </Container>
    )
  }

  renderDevices = () => {
    const {
      enabled,
      scanning,
      devices,
      activeDevice,
      onScan,
      onConnect,
      onProblemsConnecting } = this.props

    const footerText = (scanning)
      ? 'Scanning for nearby bluetooth devices...\n'
      : 'Tap on a bluetooth device above to connect or scan to find other devices nearby.'

    return (
      <Container>
        <Footer style={{paddingTop: 0}}>
          <Card
            theme='light'
            title='GET CONNECTED'
            text={footerText}
            button='Scan'
            link='Problems Connecting?'
            textAlign='left'
            loading={scanning}
            onPress={onScan}
            onLinkPress={onProblemsConnecting}
            style={{textView: {marginBottom: Metrics.unit * 2}}} />
        </Footer>
        {enabled && (
          <ScrollView style={{ marginBottom: 210 }}>
            <List>
              {devices.map(device => {
                let text = null
                if (activeDevice && activeDevice.id === device.id) {
                  if (activeDevice.isConnecting) {
                    text = 'Connecting...'
                  } else if (activeDevice.isConnected) {
                    text = 'Connected, tap to disconnect'
                  } else if (activeDevice.error) {
                    text = 'Failed to connect, tap to try again'
                  }
                }
                return (
                  <ListItem
                    key={device.id}
                    title={device.name}
                    text={text}
                    buttonIcon='bluetooth-b'
                    buttonIconSize={22}
                    onPress={() => { onConnect(device) }} />
                )
              })}
            </List>
          </ScrollView>
        )}
        {this.renderProblemsConnectingModal()}
      </Container>
    )
  }

  renderProblemsConnectingModal = () => {
    const {
      showProblemsConnectingModal,
      onHideProblemsConnectingModal } = this.props
    return <Modal
      navigation={this.props.navigation}
      show={showProblemsConnectingModal}
      onHidePress={onHideProblemsConnectingModal}
      template='ProblemsConnecting' />
  }

  renderIsYourDeviceSupportedModal = () => {
    const {
      showIsYourDeviceSupportedModal,
      onHideIsYourDeviceSupportedModal } = this.props
    return <Modal
      navigation={this.props.navigation}
      show={showIsYourDeviceSupportedModal}
      onHidePress={onHideIsYourDeviceSupportedModal}
      template='IsYourDeviceSupported' />
  }

  render () {
    const {
      connectTo,
      enabled,
      activeDevice } = this.props

    if (!connectTo) {
      return this.renderConnectTo()
    }

    if (connectTo === 'device') {
      if (!enabled) {
        return this.renderTurnOnBluetooth()
      }

      if (activeDevice && activeDevice.isConnected) {
        return this.renderConnectedDevice()
      }

      return this.renderDevices()
    }

    if (connectTo === 'simulator') {
      return this.renderConnectedToSimulator()
    }
  }
}
