import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import PropTypes from 'prop-types'

import {
  Container,
  Footer,
  Modal,
  Card,
  List,
  FeaturedListItem,
  CompactListItem } from 'App/Components'

import { Metrics, Colors, Images } from 'App/Themes'

export default class Screen extends Component {
  static propTypes = {
    showNotReadyModal: PropTypes.bool.isRequired,
    onHideNotReadyModal: PropTypes.func.isRequired,
    onPress: PropTypes.func.isRequired
  }

  render () {
    const {
      showNotReadyModal,
      onHideNotReadyModal,
      onPress } = this.props
    return (
      <Container>
        <ScrollView style={{ marginBottom: 210 }}>
          <List title='Featured' cols={2}>
            <FeaturedListItem
              image={Images.featured.led}
              title='Blink'
              onPress={() => { onPress('Blink') }} />
            <FeaturedListItem
              icon={'heartbeat'}
              iconColor={Colors.red}
              title='Heart Beat'
              onPress={() => { onPress('Heart Beat') }} />
          </List>
          <List title='Projects'>
            <CompactListItem
              icon='circle-o'
              title='Hello World'
              onPress={() => { onPress('Hello World') }} />
            <CompactListItem
              icon='circle-o'
              title='Dance Show'
              onPress={() => { onPress('Dance Show') }} />
          </List>
        </ScrollView>
        <Modal
          navigation={this.props.navigation}
          show={showNotReadyModal}
          onHidePress={onHideNotReadyModal}
          template='NotReady' />
        <Footer style={{paddingTop: 0}}>
          <Card
            theme='light'
            title='DISCOVER'
            text={'Get inspired by what you can create. Build your own creations or remix others to jumpstart your ideas.'}
            button='Code Lab'
            textAlign='left'
            onPress={() => { onPress('Code Lab') }}
            style={{textView: {marginBottom: Metrics.unit}}} />
        </Footer>
      </Container>
    )
  }
}
