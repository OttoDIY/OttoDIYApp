import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Screen from 'App/Modules/Discover/CodeLab/Screen'

import config from 'App/Services/Client/Otto/Config'

describe('CodeLab', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Screen
        navigation={{navigate: () => {}}}
        config={config}
        instructions={[]}
        showNotConnectedModal={false}
        navHeight={86}
        onConnect={() => {}}
        onSlidingComplete={() => {}}
        onChangeOrder={() => {}}
        onNavHeightChange={() => {}}
        onClose={() => {}}
        onNavPress={() => {}}
        onRun={() => {}}
        onHideNotConnectedModal={(touch) => {}} />)
  })

  it('Component renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
