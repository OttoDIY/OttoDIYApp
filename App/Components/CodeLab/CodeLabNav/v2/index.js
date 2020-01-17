import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { PlayerBottomNav } from 'App/Components'

export default class CodeLabNav extends Component {
  static propTypes = {
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string
      }).isRequired
    ),
    onPress: PropTypes.func.isRequired,
    onNavHeightChange: PropTypes.func
  }

  onSkillPress = (category, index) => {
    const { skills, onPress } = this.props

    const skill = skills.find(skill => skill.category === category)
    if (skill && skill.items.length > index) {
      onPress(category, skill.items[index])
    }
  }

  render () {
    const { skills, onNavHeightChange } = this.props

    if (!skills || skills.length < 1) {
      return null
    }

    return (
      <PlayerBottomNav
        theme='light'
        skills={skills}
        onSkillPress={this.onSkillPress}
        onNavHeightChange={onNavHeightChange} />
    )
  }
}
