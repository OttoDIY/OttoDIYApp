import React, { Component } from 'react'
import { Linking, Share } from 'react-native'
import { connect } from 'react-redux'

import Config from 'react-native-config'

import { appName, appInfo, deviceInfo, isSimulator } from 'App/Services/Properties'
import { notPossibleInSimulator } from 'App/Services/Alerts'

import Screen from './Screen'

export class SettingsContainer extends Component {
  onShareAppPress = () => {
    const title = appName()
    Share.share({
      message: `${Config.APP_DOWNLOAD_URL}`,
      title: title
    }, {
      // Android only:
      dialogTitle: title,
      // iOS only:
      subject: title,
      excludedActivityTypes: [
        'com.apple.UIKit.activity.Print',
        'com.apple.UIKit.activity.AssignToContact',
        'com.apple.UIKit.activity.SaveToCameraRoll',
        'com.apple.UIKit.activity.AddToReadingList',
        'com.apple.UIKit.activity.PostToFlickr',
        'com.apple.UIKit.activity.PostToVimeo',
        'com.apple.reminders.RemindersEditorExtension',
        'com.apple.mobilenotes.SharingExtension'
      ]
    })
  }

  onFeedbackPress = () => {
    if (isSimulator()) { return notPossibleInSimulator() }
    const subject = 'Feedback and ideas'
    const body = `How can we improve Otto? We're all ears...`
    const mailtoURL = `mailto:${Config.SUPPORT_EMAIL}?subject=${subject}&body=${body}`

    Linking.canOpenURL(mailtoURL)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(mailtoURL).catch((error) => { console.warn(error) })
        }
      })
  }

  onFAQPress = () => {
    this.props.navigation.navigate('WebScreen', { source: Config.FAQ_URL, title: 'FAQ' })
  }

  onSupportPress = () => {
    if (isSimulator()) { return notPossibleInSimulator() }

    const subject = 'Technical support'
    const body = `What can we help you with?\n\n---\nApp Version ${appInfo()}\n${deviceInfo()}`
    const mailtoURL = `mailto:${Config.SUPPORT_EMAIL}?subject=${subject}&body=${body}`

    Linking.canOpenURL(mailtoURL)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(mailtoURL).catch((error) => { console.warn(error) })
        }
      })
  }

  onAboutPress = () => {
    this.props.navigation.navigate('WebScreen', { source: Config.ABOUT_URL, title: 'About' })
  }

  onPrivacyPress = () => {
    this.props.navigation.navigate('WebScreen', { source: Config.PRIVACY_URL, title: 'Privacy Policy' })
  }

  render () {
    return (
      <Screen
        ref={(ref) => {
          this.screen = ref
        }}
        {...this.props}
        onShareAppPress={this.onShareAppPress}
        onFeedbackPress={this.onFeedbackPress}
        onFAQPress={this.onFAQPress}
        onSupportPress={this.onSupportPress}
        onAboutPress={this.onAboutPress}
        onPrivacyPress={this.onPrivacyPress}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer)
