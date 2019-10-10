import React, { Component } from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import PropTypes from 'prop-types'
import uuid from 'react-native-uuid'

import s from './Styles'

export default class BottomNav extends Component {
  static propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.oneOfType([PropTypes.number, PropTypes.object]).isRequired
    })),
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
    const { tabs } = this.props
    const { activeTab } = this.state
    const flexStyle = {
      flex: (tabs && tabs.length > 0) ? (1 / tabs.length) : 0
    }
    return (
      <View style={s.view}>
        {tabs.map((tab) => {
          return (
            <TouchableOpacity
              key={uuid.v4()}
              style={[s.tab, flexStyle, (activeTab === tab) ? s.tab_active : null]}
              onPress={() => { this.onTabPress(tab) }}>
              <Image style={s.image} source={tab.image} />
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }
}
