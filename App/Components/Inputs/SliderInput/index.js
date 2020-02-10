import React, { Component } from 'react'
import { Platform, View, Text } from 'react-native'
import PropTypes from 'prop-types'
import Slider from '@react-native-community/slider'

import { Colors, Images } from 'App/Themes'

import styles, {stylesLight} from './Styles'

export default class SliderInput extends Component {
  static propTypes = {
    theme: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    value: PropTypes.number,
    step: PropTypes.number,
    labelPrefix: PropTypes.string,
    labelSuffix: PropTypes.string,
    onValueChange: PropTypes.func,
    onSlidingComplete: PropTypes.func
  }

  constructor (props) {
    super(props)
    const { value, min = 0, max = 1 } = this.props
    this.state = {
      value: (value != null && value <= max) ? value : min
    }
  }

  onValueChange = (value) => {
    const { onValueChange } = this.props
    this.setState({ value })
    if (onValueChange) {
      onValueChange(value)
    }
  }

  render () {
    const {
      style = undefined,
      theme = 'default',
      min = 0,
      max = 1,
      value: initialValue = 0,
      step,
      labelPrefix = '',
      labelSuffix = '',
      onSlidingComplete = () => {} } = this.props

    const { value: currentValue } = this.state

    const s = (theme === 'light') ? stylesLight : styles

    // On Android, thumbImage is ignored so use thumbTintColor instead
    // On iOS, thumb is too big so use a small thumbImage instead
    const thumbTintColor = (Platform.OS !== 'ios')
      ? theme === 'default' ? Colors.primary : Colors.white
      : null

    return (
      <View style={[s.view, style]}>
        <Text style={s.label}>{`${labelPrefix}${currentValue}${labelSuffix}`}</Text>
        <View style={s.slider}>
          <Slider
            minimumValue={min}
            maximumValue={max}
            value={initialValue}
            step={step}
            thumbTintColor={thumbTintColor}
            thumbImage={theme === 'default' ? Images.slider.thumb : Images.slider[`thumb_${theme}`]}
            minimumTrackTintColor={theme === 'default' ? Colors.primary : Colors.white}
            maximumTrackTintColor={Colors.primaryTranslucent}
            onValueChange={this.onValueChange}
            onSlidingComplete={onSlidingComplete}
          />
        </View>
      </View>
    )
  }
}
