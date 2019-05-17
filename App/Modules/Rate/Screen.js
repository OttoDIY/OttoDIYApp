import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Container, Footer, Card } from 'App/Components'

export default class Screen extends Component {
  static propTypes = {
    onRatePress: PropTypes.func.isRequired
  }

  render () {
    const { onRatePress } = this.props
    return (
      <Container>
        <Footer>
          <Card
            theme='light'
            title='LOVING THE APP?'
            text={'Every rating means the world to us.\n\n★★★★★'}
            button='Rate'
            onPress={onRatePress}
            styles={{titleView: {marginTop: 0}}} />
        </Footer>
      </Container>
    )
  }
}
