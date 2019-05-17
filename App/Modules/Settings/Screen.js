import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import { appInfo } from 'App/Services/Properties'

import { Container, Footer, CompactListItem, Links, Link } from 'App/Components'

import s from './Styles'

export default class Screen extends Component {
  static propTypes = {
    onShareAppPress: PropTypes.func.isRequired,
    onFeedbackPress: PropTypes.func.isRequired,
    onFAQPress: PropTypes.func.isRequired,
    onSupportPress: PropTypes.func.isRequired,
    onAboutPress: PropTypes.func.isRequired,
    onPrivacyPress: PropTypes.func.isRequired
  }

  render () {
    const {
      onShareAppPress,
      onFeedbackPress,
      onFAQPress,
      onSupportPress,
      onAboutPress,
      onPrivacyPress} = this.props
    return (
      <Container>
        <CompactListItem title='Share app with a friend' onPress={onShareAppPress} />
        <CompactListItem title='Share your ideas with us' onPress={onFeedbackPress} />
        <View style={s.appVersionView}>
          <Text style={s.appVersion}>{`App Version ${appInfo()}`}</Text>
        </View>
        <Footer>
          <Links>
            <Link theme='light' text='FAQ' onPress={onFAQPress} />
            <Link theme='light' text='Support' onPress={onSupportPress} />
            <Link theme='light' text='About' onPress={onAboutPress} />
            <Link theme='light' text='Privacy' onPress={onPrivacyPress} />
          </Links>
        </Footer>
      </Container>
    )
  }
}
