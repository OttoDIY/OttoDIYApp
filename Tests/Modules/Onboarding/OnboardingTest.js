import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Screen from 'App/Modules/Onboarding/Screen'

describe('Onboarding', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Screen onDone={() => {}} />)
  })

  it('Component renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
