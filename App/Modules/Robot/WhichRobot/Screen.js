import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Container, List, Footer, Card, CardListItem } from 'App/Components'
import { Images } from 'App/Themes'

export default class WhichRobotScreen extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired
  }

  render () {
    const { onPress } = this.props
    return (
      <Container>
        <List linedRows scrollable>
          <CardListItem
            image={Images.robots.plus}
            title='Otto DIY'
            text='The open source robot that you can build yourself'
            onPress={() => { onPress('otto') }} />
        </List>
        <Footer>
          <Card theme='light' text='Choose the robot you want to play with' />
        </Footer>
      </Container>
    )
  }
}
