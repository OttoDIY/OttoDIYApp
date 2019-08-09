import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import PropTypes from 'prop-types'

import { StyleSheet as s } from 'App/Themes'

export default class Container extends Component {
  static propTypes = {
    dark: PropTypes.bool,
    scrollable: PropTypes.bool
  }

  render () {
    const {style = undefined, dark = false, scrollable = false} = this.props
    const ContainerView = (scrollable) ? ScrollView : View
    const containerStyle = (dark)
      ? s.container_dark
      : s.container
    return (
      <ContainerView style={[containerStyle, style]}>
        {this.props.children}
      </ContainerView>
    )
  }
}
