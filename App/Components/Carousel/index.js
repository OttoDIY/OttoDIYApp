import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import GestureRecognizer from 'react-native-swipe-gestures'

import { Button } from 'App/Components'

import s from './Styles'

export default class Carousel extends Component {
  static propTypes = {
    buttons: PropTypes.arrayOf(PropTypes.string),
    onPress: PropTypes.arrayOf(PropTypes.func),
    onPageChange: PropTypes.func,
    onDone: PropTypes.func
  }

  constructor (props) {
    super(props)

    this.state = {
      page: 0
    }
  }

  onSwipeLeft = (gestureState) => {
    this.nextPage()
  }

  onSwipeRight = (gestureState) => {
    this.prevPage()
  }

  getPage = () => {
    return this.state.page
  }

  prevPage = () => {
    const { page } = this.state
    const { onPageChange = () => {} } = this.props
    if (page > 0) {
      this.setState({ page: page - 1 }, () => { onPageChange() })
    }
  }

  nextPage = () => {
    const { page } = this.state
    const { children, onPageChange = () => {} } = this.props

    if (page < children.length - 1) {
      this.setState({ page: page + 1 }, () => { onPageChange() })
    }
  }

  onPress = () => {
    const { page } = this.state
    const {
      children,
      onPress = [],
      onDone = () => {}
    } = this.props

    const onPressPage = (page < onPress.length - 1) ? onPress[page] : null

    if (onPressPage != null) {
      onPressPage()
    } else if (page < children.length - 1) {
      this.nextPage()
    } else {
      onDone()
    }
  }

  renderControls = () => {
    const { page } = this.state
    const { children, buttons = [] } = this.props

    let bubbles = []
    for (var i = 0; i < children.length; i++) {
      const style = (page === i) ? [s.bubble, s.bubble_active] : s.bubble
      bubbles.push(<View style={style} key={i} />)
    }

    const button = (buttons && page < buttons.length - 1)
      ? buttons[page]
      : (page === children.length - 1) ? 'Done' : 'Next'

    return (
      <View style={s.controls}>
        {bubbles}
        <View style={{flex: 1}} />
        <Button text={button} onPress={this.onPress} />
      </View>
    )
  }

  render () {
    const { page } = this.state
    const { children } = this.props

    if (children.length < 1) {
      return null
    }

    return (
      <View>
        <GestureRecognizer
          onSwipeLeft={this.onSwipeLeft}
          onSwipeRight={this.onSwipeRight}
          config={{
            velocityThreshold: 0.1,
            directionalOffsetThreshold: 80
          }}
          style={s.page}>
          { children[page] }
        </GestureRecognizer>
        <View style={s.footer}>
          { this.renderControls() }
        </View>
      </View>
    )
  }
}
