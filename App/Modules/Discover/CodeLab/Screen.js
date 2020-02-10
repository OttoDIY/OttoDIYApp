import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  InstructionList,
  CodeLabNav,
  Modal } from 'App/Components'

import { Metrics } from 'App/Themes'

import Types from 'App/Services/PropTypes'

export default class Screen extends Component {
  static propTypes = {
    config: PropTypes.any,
    instructions: PropTypes.arrayOf(PropTypes.shape({
      ...Types.instruction
    })).isRequired,
    showNotConnectedModal: PropTypes.bool.isRequired,
    navHeight: PropTypes.number.isRequired,
    onConnect: PropTypes.func.isRequired,
    onSlidingComplete: PropTypes.func.isRequired,
    onChangeOrder: PropTypes.func.isRequired,
    onNavHeightChange: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    onNavPress: PropTypes.func.isRequired,
    onRun: PropTypes.func.isRequired,
    onHideNotConnectedModal: PropTypes.func.isRequired
  }

  resolveSkills = () => {
    const { config } = this.props
    const { moves, skills } = config || {}

    const allSkills = []
    if (moves && moves.length > 0) {
      allSkills.push({
        id: 'moves',
        category: 'Moves',
        items: moves
      })
    }
    if (skills && skills.length > 0) {
      allSkills.push(...skills)
    }

    return allSkills
  }

  render () {
    const {
      instructions,
      showNotConnectedModal,
      navHeight,
      onConnect,
      onSlidingComplete,
      onChangeOrder,
      onNavHeightChange,
      onClose,
      onNavPress,
      onHideNotConnectedModal} = this.props

    const skills = this.resolveSkills()

    return (
      <Container>
        <InstructionList
          style={{marginBottom: navHeight + Metrics.unit}}
          instructions={instructions}
          onSlidingComplete={onSlidingComplete}
          onChangeOrder={onChangeOrder}
          onClose={onClose} />
        <Modal
          navigation={this.props.navigation}
          show={showNotConnectedModal}
          onHidePress={onHideNotConnectedModal}
          onBack={onConnect}
          template='NotConnected' />
        <CodeLabNav
          skills={skills}
          onPress={onNavPress}
          onNavHeightChange={onNavHeightChange} />
      </Container>
    )
  }
}
