import React, { Component } from 'react'
import { Linking } from 'react-native'
import { connect } from 'react-redux'

import Client, { setRobot } from 'App/Services/Client'
import Bluetooth from 'App/Services/Bluetooth'
import WebSocket from 'App/Services/WebSocket'
import { isSimulator } from 'App/Services/Properties'
import { notPossibleInSimulator } from 'App/Services/Alerts'

import Screen from './Screen'

export class ConnectContainer extends Component {
  constructor (props) {
    super(props)
    this.client = new Client()
    this.socket = WebSocket.getInstance()
    const instructions = `To view the simulator, open the following link on another device (e.g. your laptop):\ncodeandrobots.com/simulator?room=${this.socket.room}`
    this.state = {
      robot: null,
      robotImage: null,
      error: null,
      connectTo: null,
      enabled: false,
      scanning: false,
      devices: [],
      activeDevice: null,
      showProblemsConnectingModal: false,
      showIsYourDeviceSupportedModal: false,
      instructions
    }
  }

  async componentWillMount () {
    const { state } = this.props.navigation
    const robot = state && state.params && state.params.robot
    if (robot) {
      await setRobot(robot)
    }
    const config = (robot)
      ? await this.client.getConfig()
      : null
    this.props.navigation.setParams({
      title: (config != null) ? `Connect ${config.name}` : 'Connect'}
    )
    const connectTo = (robot)
      ? (robot === 'simulator')
        ? 'simulator'
        : 'device'
      : null
    const robotImage = (config && config.connection)
      ? config.connection.image
      : null

    const { enabled, error } = await Bluetooth.isEnabled()
    this.onConnectTo(connectTo)
    this.setState({robot, robotImage, enabled, error})
    if (robot !== 'simulator' && enabled) {
      this.setState({ scanning: true })
      this.showDevices()
    }
  }

  // TODO Better sorting of bluetooth devices
  //      See https://github.com/codeandrobots/codeandrobots-app/issues/29
  sortDevices = (devices) => {
    const { robot } = this.state
    if (!robot) {
      return devices
    }
    return devices.sort((deviceA, deviceB) => {
      const deviceAMatch = deviceA.name != null && deviceA.name.toLowerCase().startsWith(robot)
      const deviceBMatch = deviceB.name != null && deviceB.name.toLowerCase().startsWith(robot)
      if (deviceAMatch) {
        return -1
      } else if (deviceBMatch) {
        return 1
      } else {
        return 0
      }
    })
  }

  showDevices = async () => {
    const { devices, error } = await Bluetooth.scan()
    this.setState({scanning: false, devices: this.sortDevices(devices), error})
  }

  onConnectTo = (connectTo) => {
    if (connectTo === 'simulator') {
      this.socket.connect()
    }
    this.setState({ connectTo })
  }

  onEnableBluetooth = async () => {
    // TODO Only supported by Android, need to go to Bluetooth settings on iOS
    const { enabled, error } = await Bluetooth.enable()
    this.setState({enabled, error})
    if (enabled) {
      this.setState({ scanning: true })
      // TODO Small timeout because BLE scan hangs otherwise
      setTimeout(() => { this.showDevices() }, 100)
    }
  }

  onScan = async () => {
    this.setState({scanning: true})
    // Scan BLE and paired devices first
    const { devices, error } = await Bluetooth.scan()
    if (!error) {
      this.setState({devices, error: null})

      // Scan unpaired devices second as it's quite slow
      const { unpairedDevices, error } = await Bluetooth.scanUnpaired()
      if (!error) {
        const allDevices = devices.concat(
          unpairedDevices.filter((unpairedDevice) =>
            devices.findIndex((device) => device.id === unpairedDevice.id) < 0
          )
        )

        this.setState({scanning: false, devices: allDevices, error: null})
      } else {
        this.setState({scanning: false, error})
      }
    } else {
      this.setState({scanning: false, error})
    }
  }

  onConnect = async (device) => {
    const activeDevice = {
      ...device,
      isConnecting: true,
      isConnected: false,
      error: null
    }
    this.setState({activeDevice})

    const { error } = await Bluetooth.connect(device)

    activeDevice.isConnecting = false
    if (error) {
      activeDevice.error = error
    } else {
      activeDevice.isConnected = true

      // TODO Some bluetooth modules (e.g. Otto BLE module) require an initial
      // command before responding to further commands so sending a stop command
      // after successfully connecting
      await this.client.stop()
    }
    this.setState({activeDevice})
  }

  onDisconnect = () => {
    Bluetooth.disconnect()
    this.setState({activeDevice: null})
  }

  onDone = () => {
    const { state } = this.props.navigation
    const onDone = state && state.params && state.params.onDone
    if (onDone) {
      onDone()
    } else {
      const onBack = state && state.params && state.params.onBack
      if (onBack) {
        onBack()
      }
      this.props.navigation.goBack()
    }
  }

  onEmailInstructions = () => {
    if (isSimulator()) { return notPossibleInSimulator() }
    const subject = 'Code & Robots simulator instructions'
    const body = this.state.instructions
    const mailtoURL = `mailto:?subject=${subject}&body=${body}`

    Linking.canOpenURL(mailtoURL)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(mailtoURL).catch((error) => { console.warn(error) })
        }
      })
  }

  onProblemsConnecting = () => {
    this.setState({showProblemsConnectingModal: true})
  }

  onIsYourDeviceSupported = () => {
    this.setState({showIsYourDeviceSupportedModal: true})
  }

  onHideProblemsConnectingModal = () => {
    this.setState({showProblemsConnectingModal: false})
  }

  onHideIsYourDeviceSupportedModal = () => {
    this.setState({showIsYourDeviceSupportedModal: false})
  }

  render () {
    const {
      error,
      connectTo,
      robotImage,
      enabled,
      scanning,
      connecting,
      devices,
      activeDevice,
      showProblemsConnectingModal,
      instructions,
      showIsYourDeviceSupportedModal} = this.state
    return (
      <Screen
        ref={(ref) => {
          this.screen = ref
        }}
        {...this.props}
        error={error}
        connectTo={connectTo}
        robotImage={robotImage}
        enabled={enabled}
        scanning={scanning}
        connecting={connecting}
        devices={devices}
        activeDevice={activeDevice}
        showProblemsConnectingModal={showProblemsConnectingModal}
        showIsYourDeviceSupportedModal={showIsYourDeviceSupportedModal}
        instructions={instructions}
        onConnectTo={this.onConnectTo}
        onEnableBluetooth={this.onEnableBluetooth}
        onScan={this.onScan}
        onConnect={this.onConnect}
        onDisconnect={this.onDisconnect}
        onDone={this.onDone}
        onEmailInstructions={this.onEmailInstructions}
        onProblemsConnecting={this.onProblemsConnecting}
        onIsYourDeviceSupported={this.onIsYourDeviceSupported}
        onHideProblemsConnectingModal={this.onHideProblemsConnectingModal}
        onHideIsYourDeviceSupportedModal={this.onHideIsYourDeviceSupportedModal}
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

export default connect(mapStateToProps, mapDispatchToProps)(ConnectContainer)
