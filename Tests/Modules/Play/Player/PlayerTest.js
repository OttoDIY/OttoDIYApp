import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Screen from 'App/Modules/Play/Player/Screen'

describe('Player', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Screen
        navigation={{navigate: () => {}}}
        speed='medium'
        showNotConnectedModal={false}
        onUp={() => {}}
        onDown={() => {}}
        onLeft={() => {}}
        onRight={() => {}}
        onToggleSpeed={() => {}}
        onHideNotConnectedModal={() => {}} />)
  })

  it('Component renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
