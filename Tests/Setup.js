import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

// TODO See below todo
// import { describe, it } from 'storybook-addon-specifications'

import DebugConfig from 'App/Config/DebugConfig'

DebugConfig.useFixtures = true
DebugConfig.useReactotron = false

configure({ adapter: new Adapter() })

// TODO Will allow the use of Enzyme’s mount function with jest,
// but needs to only be setup for those tests and not other tests
//
// jest.mock('react-native', () => {
//   const reactNativeMockRender = require('react-native-mock-render')
//   reactNativeMockRender.I18nManager = {
//     isRTL: false,
//     doLeftAndRightSwapInRTL: true,
//     allowRTL: () => {},
//     forceRTL: () => {},
//     swapLeftAndRightInRTL: () => {}
//   }
//   return reactNativeMockRender
// }, {virtual: true})
//
// Since enzyme's mount API requires a DOM, JSDOM is required in order to use
// mount if you are not already in a browser environment.
//
// See http://airbnb.io/enzyme/docs/guides/jsdom.html
// function copyProps (src, target) {
//   const props = Object.getOwnPropertyNames(src)
//     .filter(prop => typeof target[prop] === 'undefined')
//     .reduce((result, prop) => ({
//       ...result,
//       [prop]: Object.getOwnPropertyDescriptor(src, prop)
//     }), {})
//   Object.defineProperties(target, props)
// }
// const { JSDOM } = require('jsdom')
// const jsdom = new JSDOM('<!doctype html><html><body></body></html>')
// const { window } = jsdom
// global.window = window
// global.document = window.document
// window.describe = describe
// window.it = it
// global.navigator = {
//   userAgent: 'node.js'
// }
// copyProps(window, global)

// Mock your external modules here if needed
jest.mock('react-native-i18n', () => {
  const english = require('../App/I18n/languages/english.json')
  const keys = require('ramda')
  const replace = require('ramda')
  const forEach = require('ramda')

  return {
    t: (key, replacements) => {
      let value = english[key]
      if (!value) return key
      if (!replacements) return value

      forEach((r) => {
        value = replace(`{{${r}}}`, replacements[r], value)
      }, keys(replacements))
      return value
    }
  }
})

jest.mock('react-native-device-info', () => {
  return {
    getDeviceName: () => (null),
    getDeviceCountry: () => ('IE'),
    getDeviceLocale: () => ('en-IE'),
    getPhoneNumber: () => (null),
    getManufacturer: () => (null),
    getModel: () => (null),
    getUniqueID: () => (null),
    getUserAgent: () => (null),
    getSystemName: () => (null),
    getDeviceId: () => (null),
    getSystemVersion: () => (null),
    getBundleId: () => (null),
    getBuildNumber: () => (null),
    getVersion: () => (null),
    getReadableVersion: () => (null)
  }
})

jest.mock('ScrollView', () => jest.genMockFromModule('ScrollView'))

jest.mock('analytics-react-native', () => jest.genMockFromModule('analytics-react-native'))

jest.mock('react-native-firebase', () => {
  return {
    auth: jest.fn(() => {
      return {
        signInWithPhoneNumber: jest.fn(),
        signOut: jest.fn(),
        onAuthStateChanged: jest.fn(() => Promise.resolve('myMockFirebaseUser'))
      }
    }),
    messaging: jest.fn(() => {
      return {
        hasPermission: jest.fn(() => Promise.resolve(true)),
        subscribeToTopic: jest.fn(),
        unsubscribeFromTopic: jest.fn(),
        requestPermission: jest.fn(() => Promise.resolve(true)),
        getToken: jest.fn(() => Promise.resolve('myMockToken'))
      }
    }),
    notifications: jest.fn(() => {
      return {
        onNotification: jest.fn(),
        onNotificationDisplayed: jest.fn(),
        onNotificationOpened: jest.fn()
      }
    })
  }
})

jest.mock('react-native-video', () => 'react-native-video')

jest.mock('global', () =>
  Object.assign(global, { window: { STORYBOOK_HOOKS_CONTEXT: '' } })
)

global.requestAnimationFrame = function (callback) {
  setTimeout(callback, 0)
}
