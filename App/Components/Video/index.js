import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import RNVideo from 'react-native-video'

import { TouchableOpacity, Icon } from 'App/Components'
import VideoButton from './VideoButton'

import { Colors } from 'App/Themes'

import s from './Styles'

export default class Video extends Component {
  static propTypes = {
    video: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    size: PropTypes.oneOf(['small', 'default'])
  }

  constructor (props) {
    super(props)
    this.state = {
      paused: true,
      imageWidth: 0,
      imageHeight: 0
    }
  }

  async componentDidMount () {
    this._isMounted = true
  }

  componentWillUnmount () {
    this._isMounted = false
  }

  onVideoToggle = () => {
    const { paused } = this.state
    this.setState({ paused: !paused })
  }

  onVideoEnd = (data) => {
    this.setState({ paused: true }, () => {
      this.player.seek(0)
    })
  }

  onVideoError = (e) => {
    console.log(e)
  }

  render () {
    const {
      video,
      size,
      style = {} } = this.props
    const isSmall = (size === 'small')

    const iconSize = isSmall ? 16 : 32
    const iconLeftPadding = isSmall ? 2 : 4

    const {paused} = this.state

    const styles = {
      videoPlayer: [
        s.videoPlayer,
        ...((isSmall) ? [s.videoPlayer_small] : []),
        ...((style.videoPlayer) ? [style.videoPlayer] : [])
      ]}

    return (
      <TouchableOpacity style={s.videoView} onPress={this.onVideoToggle}>
        {paused && (
          <VideoButton
            style={{ button: StyleSheet.flatten(s.videoButton) }}
            onPress={this.onVideoToggle}
            size={size}>
            <Icon
              name='play'
              size={iconSize}
              style={{ color: Colors.primary, paddingLeft: iconLeftPadding }} />
          </VideoButton>
        )}
        <RNVideo
          ref={(ref) => { this.player = ref }}
          paused={paused}
          source={video}
          resizeMode='cover'
          ignoreSilentSwitch={'ignore'}
          progressUpdateInterval={100.0}
          onEnd={this.onVideoEnd}
          onError={this.onVideoError}
          style={styles.videoPlayer} />
      </TouchableOpacity>
    )
  }
}
