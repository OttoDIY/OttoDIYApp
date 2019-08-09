import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Container, List, ListItem, BottomNav } from 'App/Components'

export default class Screen extends Component {
  static propTypes = {
    onNavigatePress: PropTypes.func.isRequired
  }

  render () {
    const { onNavigatePress } = this.props
    return (
      <Container>
        <List>
          <ListItem
            title='Play & Explore'
            text='Let’s play'
            button='Play'
            onPress={() => { onNavigatePress('PlayerScreen') }} />
          <ListItem
            title='Discover'
            text='Let’s see what you can do'
            button='Discover'
            onPress={() => { onNavigatePress('DiscoverScreen') }} />
          <ListItem
            title='Learn'
            text='You’ll be a guru in no time'
            button='Learn'
            onPress={() => { onNavigatePress('LearnScreen') }} />
          <ListItem
            title='Lab'
            text='Get under the hood'
            button='Lab'
            onPress={() => { onNavigatePress('LabScreen') }} />
        </List>
        <BottomNav
          onRatePress={() => { onNavigatePress('RateScreen') }}
          onHomePress={() => {}}
          onSettingsPress={() => { onNavigatePress('SettingsScreen') }} />
      </Container>
    )
  }
}
