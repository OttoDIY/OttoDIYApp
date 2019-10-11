import '../Config'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootContainer from './RootContainer'
import createStore from '../Redux'
import StorybookUI from '../../storybook'

// See https://stackoverflow.com/a/52644367
global.Symbol = require('core-js/es6/symbol')
require('core-js/fn/symbol/iterator')

// create our store
const store = createStore()

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      storybook: false
    }
  }

  async componentWillMount () {
    if (__DEV__) {
      const storybook = await this.checkStorybook()
      this.setState({ storybook })
    }
  }

  checkStorybook = async () => {
    try {
      const res = await fetch('http://localhost:7007')
      return (res.ok)
    } catch (e) {
      console.log(e)
      return false
    }
  }

  render () {
    // Check if the storybook server is running
    // if true then load the storybook UI
    // otherwise load the app
    if (this.state.storybook) {
      return <StorybookUI />
    } else {
      return (
        <Provider store={store}>
          <RootContainer />
        </Provider>
      )
    }
  }
}

// allow reactotron overlay for fast design in dev mode
export default App
