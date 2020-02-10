import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Screen from 'App/Modules/Play/Player/Screen'
import Config from 'App/Services/Client/Otto/Config'

describe('Player', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Screen
        navigation={{navigate: () => {}}}
        speed='medium'
        connected
        config={Config}
        showNotConnectedModal={false}
        onConnect={() => {}}
        onUp={() => {}}
        onDown={() => {}}
        onLeft={() => {}}
        onRight={() => {}}
        onupdown={() => {}}
        onLongPress={() => {}}
        onLongPressOut={() => {}}
        onSkillPress={() => {}}
        onToggleSpeed={() => {}}
        onHelp={() => {}}
        onHideNotConnectedModal={() => {}}
        onChooseRobotPress={() => {}}
        onCodeLabPress={() => {}} />)
  })

  it('Component renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
