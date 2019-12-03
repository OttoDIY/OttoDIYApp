import React, { Component } from 'react'
import { View } from 'react-native'

import { StyleSheet as s } from 'App/Themes'

export default class Separator extends Component {
  render () {
    const {style = undefined} = this.props
    return (
      <View style={[s.separator, style]} />
    )
  }
}
