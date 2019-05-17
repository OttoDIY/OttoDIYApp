import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import PropTypes from 'prop-types'

import {
  Container,
  Footer,
  Modal,
  Card,
  List,
  ListHeader,
  CompactListItem } from 'App/Components'

import { Metrics } from 'App/Themes'

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
          <List>
            <ListHeader title='Lessons' />
            <CompactListItem
              icon='circle-o'
              title='Get Started'
              onPress={() => { onPress('Get Started') }} />
            <CompactListItem
              icon='circle-o'
              title='Play Time'
              onPress={() => { onPress('Play Time') }} />
            <CompactListItem
              icon='circle-o'
              title='Customize'
              onPress={() => { onPress('Customize') }} />
            <CompactListItem
              icon='circle-o'
              title='Code Remix'
              onPress={() => { onPress('Code Remix') }} />
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
            title='START YOUR NEXT LESSON'
            text={'Learn them skills!'}
            button='Start'
            textAlign='left'
            onPress={() => { onPress('Get Started') }}
            style={{textView: {marginBottom: Metrics.unit}}} />
        </Footer>
      </Container>
    )
  }
}
