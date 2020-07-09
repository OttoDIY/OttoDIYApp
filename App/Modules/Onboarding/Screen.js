import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  Carousel,
  Card
} from 'App/Components'

import { Images } from 'App/Themes'

export default class Screen extends Component {
  static propTypes = {
    onDone: PropTypes.func.isRequired
  }

  render () {
    const { onDone } = this.props

    return (
      <Container>
        <Carousel
          buttons={['Next', 'Next', 'Done']}
          onPress={[null, null, null]}
          onDone={onDone}>
          <Card
            image={Images.onboarding.one}
            title='Welcome to the Otto DIY App'
            text='Where you can learn coding and bring your robot to live'
            style={{titleViewText: {fontSize: 22}}}
          />
          <Card
            image={Images.onboarding.two}
            title='Otto awaits your commands'
            text='Otto DIY+, Eyes, Wheels & Humanoid supported out of the box!'
            style={{titleViewText: {fontSize: 22}}}
          />
          <Card
            image={Images.onboarding.three}
            title='Lots more to come! 🎉'
            text='Games, more robots, customize your Otto and more fun!'
            style={{titleViewText: {fontSize: 22}}}
          />
        </Carousel>
      </Container>
    )
  }
}
