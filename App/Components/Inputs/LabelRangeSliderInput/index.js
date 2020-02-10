import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'

import uuid from 'react-native-uuid'

import styles, {stylesLight} from './Styles'

export default class LabelRangeSliderInput extends Component {
  static propTypes = {
    theme: PropTypes.string,
    title: PropTypes.string,
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    defaultIndex: PropTypes.number,
    onPress: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)

    const { labels, defaultIndex } = this.props
    const active =
      (defaultIndex >= 0 && defaultIndex < labels.length) ? defaultIndex : 0
    this.state = {
      active
    }
  }

  setActive = (index) => {
    this.setState({ active: index }, () => {
      this.props.onPress(index)
    })
  }

  render () {
    const { style = undefined, theme = 'default', title, labels } = this.props
    const { active } = this.state

    const s = (theme === 'light') ? stylesLight : styles

    const labelCount = labels.length - 1

    const thumbPosition = (active === 0)
      ? {left: 0}
      : (active === labelCount)
        ? {right: 0}
        : {left: ((100 / labelCount) * active) + '%'}

    const thumbStyles = (active === 0 || active === labelCount)
      ? [s.thumb, thumbPosition]
      : [s.thumb, s.thumb_center, thumbPosition]

    const sliderActiveStyles = (active === 0)
      ? {}
      : (active === labelCount)
        ? [s.slider, s.slider_active, {width: '100%'}]
        : [s.slider, s.slider_active, {width: ((100 / labelCount) * active) + '%'}]

    const sliderInactiveStyles = (active === 0)
      ? [s.slider]
      : (active === labelCount)
        ? {}
        : [s.slider, {width: (100 - ((100 / labelCount) * active)) + '%'}]

    return (
      <View style={[s.view, style]}>
        {title && <Text style={s.title}>{title}</Text>}
        <View style={s.input}>
          <View style={s.row}>
            <View style={sliderActiveStyles} />
            <View style={sliderInactiveStyles} />
          </View>
          <View style={thumbStyles} />
          {labels.map((label, index) => {
            const position = (index === 0)
              ? {left: 0}
              : (index === labelCount)
                ? {right: 0}
                : {left: ((100 / labelCount) * index) + '%'}
            const touchStyles = (index === 0 || index === labelCount)
              ? [s.touch, position]
              : [s.touch, s.touch_center, position]
            const labelStyles = (index === 0)
              ? [s.label]
              : (index === labelCount)
                ? [s.label, s.label_right]
                : [s.label, s.label_center]
            if (active === index) {
              labelStyles.push(s.label_active)
            }
            return (
              <TouchableOpacity
                key={uuid.v4()}
                style={touchStyles}
                onPress={() => { this.setActive(index) }}>
                <Text style={labelStyles}>{label}</Text>
              </TouchableOpacity>
            )
          })}
        </View>
      </View>
    )
  }
}
