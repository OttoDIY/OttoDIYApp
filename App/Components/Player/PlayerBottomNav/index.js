import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import uuid from 'react-native-uuid'

import { LabelRangeSliderInput, PlayerButton, BottomTabs } from 'App/Components'
import { Images } from 'App/Themes'
import { splitItemsByRow } from 'App/Services/UIUtils'

import s from './Styles'

export default class PlayerBottomNav extends Component {
  static propTypes = {
    theme: PropTypes.string,
    slider: PropTypes.shape({
      title: PropTypes.string,
      labels: PropTypes.arrayOf(PropTypes.string).isRequired,
      defaultIndex: PropTypes.number
    }),
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        image: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
      }).isRequired
    ),
    showSkillIcons: PropTypes.bool,
    onSliderPress: PropTypes.func,
    onSkillPress: PropTypes.func,
    onNavHeightChange: PropTypes.func
  }

  constructor (props) {
    super(props)

    this.state = {
      activeSkillCategoryIndex: 0
    }
  }

  onCategoryPress = (category, i) => {
    this.setState({ activeSkillCategoryIndex: i })
  }

  onLayout = (event) => {
    const { height } = event.nativeEvent.layout
    const { onNavHeightChange } = this.props
    if (onNavHeightChange) {
      onNavHeightChange(height)
    }
  }

  render () {
    const { activeSkillCategoryIndex } = this.state
    const {
      style = undefined,
      theme = 'default',
      slider,
      skills = [],
      showSkillIcons = false,
      onSliderPress = () => {},
      onSkillPress = () => {} } = this.props

    const skillCategories = skills.map(skill => (skill.category) ? skill.category : '?')
    const activeSkills = skills[activeSkillCategoryIndex].items
    const skillsInRows = (skills.length > 0)
      ? splitItemsByRow(activeSkills, showSkillIcons)
      : []

    const buttonsStyle = (showSkillIcons)
      ? [s.buttons, s.buttons_small]
      : [s.buttons]

    return (
      <View onLayout={this.onLayout} style={[s.footer, style]}>
        <View style={s.view}>
          {slider &&
            <LabelRangeSliderInput
              theme={theme}
              {...slider}
              onPress={onSliderPress} />
          }
          <View style={s.skills}>
            {skillsInRows.map((skillsInRow) => {
              return (
                <View key={uuid.v4()} style={buttonsStyle}>
                  {skillsInRow.map((skill) => {
                    return (skill)
                      ? (
                        <PlayerButton
                          key={uuid.v4()}
                          theme={theme}
                          text={skill.title}
                          image={(showSkillIcons) ? skill.image : null}
                          onPress={() => {
                            onSkillPress(skillCategories[activeSkillCategoryIndex], activeSkills.findIndex(s => s.title === skill.title))
                          }} />
                      )
                      : (
                        <PlayerButton
                          key={uuid.v4()}
                          theme={theme}
                          image={(showSkillIcons) ? Images.transparent : null}
                          disabled
                          onPress={() => {}} />
                      )
                  })}
                </View>
              )
            })}
          </View>
        </View>
        {skillCategories.length > 1 &&
          <BottomTabs
            theme={theme}
            tabs={skillCategories.map(category => category.toUpperCase())}
            onTabPress={this.onCategoryPress} />
        }
      </View>
    )
  }
}
