import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Screen from 'App/Modules/Play/Drive/Screen'

describe('Drive', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Screen
        navigation={{navigate: () => {}}}
        message='Use joystick to drive'
        showNotConnectedModal={false}
        onDraggableMove={(touch) => {}}
        onDraggableRelease={(touch) => {}}
        onDraggableStart={() => {}}
        onHideNotConnectedModal={() => {}} />)
  })

  it('Component renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
