import React, { Component } from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import PropTypes from 'prop-types'
import uuid from 'react-native-uuid'

import s from './Styles'

export default class BottomNav extends Component {
  static propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      image: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
    })),
    showIcons: PropTypes.bool,
    onTabPress: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)

    this.state = {
      activeTab: null
    }
  }

  componentWillMount () {
    const { tabs } = this.props
    if (tabs && tabs.length > 0) {
      this.setState({ activeTab: tabs[0] })
    }
  }

  onTabPress = (tab) => {
    const { tabs, onTabPress } = this.props
    this.setState({ activeTab: tab })
    if (onTabPress) {
      onTabPress(tab, tabs.indexOf(tab))
    }
  }

  render () {
    const { tabs, showIcons = true } = this.props
    const { activeTab } = this.state
    const flexStyle = {
      flex: (tabs && tabs.length > 0) ? (1 / tabs.length) : 0
    }

    const textStyle = [s.text]
    if (tabs.length === 5) {
      textStyle.push(s.text_medium)
    } else if (tabs.length > 5) {
      textStyle.push(s.text_small)
    }

    return (
      <View style={s.view}>
        {tabs.map((tab) => {
          return (
            <TouchableOpacity
              key={uuid.v4()}
              style={[s.tab, flexStyle, (activeTab && activeTab.id === tab.id) ? s.tab_active : null]}
              onPress={() => { this.onTabPress(tab) }}>
              {showIcons && <Image style={s.image} source={tab.image} />}
              {!showIcons && <Text style={textStyle}>{tab.category.toUpperCase()}</Text>}
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }
}
