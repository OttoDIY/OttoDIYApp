import React, { Component } from 'react'
import { View } from 'react-native'
import { WebView } from 'react-native-webview'
import PropTypes from 'prop-types'

import { LoadingIndicator } from 'App/Components'

import s from './Styles'

export default class Web extends Component {
  static propTypes = {
    source: PropTypes.string.isRequired,
    title: PropTypes.string
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state
    const { title } = params
    return (title) ? { title } : {}
  }

  constructor (props) {
    super(props)
    this.state = { loading: true }
  }

  loadingDone = () => {
    this.setState({ loading: false })
  }

  componentWillUnmount (props) {
    if (props) {
      const { title } = props
      this.props.navigation.setParams({ title })
    }
  }

  render () {
    return (
      <View style={s.view}>
        <WebView
          onLoad={this.loadingDone}
          style={s.webView}
          source={{uri: this.props.source}} />
        {this.state.loading && (
          <LoadingIndicator style={s.loadingView} size='large' />
        )}
      </View>
    )
  }
}
