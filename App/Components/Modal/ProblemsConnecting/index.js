import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { Card } from 'App/Components'

import { Images } from 'App/Themes'

export default class ProblemsConnecting extends Component {
  static propTypes = {
    onHidePress: PropTypes.func
  }

  onLinkPress = () => {
    const { navigation, onHidePress } = this.props
    if (onHidePress) {
      onHidePress()
    }
    navigation.navigate('WebScreen', {
      source: 'http://www.codeandrobots.com/bluetooth.html',
      title: 'Bluetooth Troubleshooting'
    })
  }

  render () {
    return (
      <Card
        image={Images.bluetooth}
        text={'1. Check the device you are pairing with is discoverable. Often, you’ll see a red light blinking on a different speed when it’s ready.\n\n2. Turn Bluetooth off and then on again on this device.\n\n3. If a passcode is needed and you don’t have it, try 0000 or 1234.\n\n4. Restart this device.'} />
    )
  }
}
