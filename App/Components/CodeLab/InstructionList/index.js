// Based on https://github.com/gitim/react-native-sortable-list/blob/master/examples/Basic/App.js

import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import uuid from 'react-native-uuid'

import SortableList from 'react-native-sortable-list'

import Types from 'App/Services/PropTypes'

import Row from './Row'

import s from './Styles'

export default class InstructionList extends Component {
  static propTypes = {
    instructions: PropTypes.arrayOf(PropTypes.shape({
      ...Types.instruction
    })).isRequired,
    onSlidingComplete: PropTypes.func.isRequired,
    onChangeOrder: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    this.nextOrder = null
    this.state = { data: this.dataFromProps(props) }
  }

  componentWillReceiveProps (nextProps) {
    this.nextOrder = null
    this.setState({ data: this.dataFromProps(nextProps) })
  }

  renderRow = ({data, active}) => {
    const { onSlidingComplete, onClose } = this.props
    return (
      <Row
        data={data}
        active={active}
        onSlidingComplete={(value) => { onSlidingComplete(data, value) }}
        onClose={onClose} />
    )
  }

  dataFromProps = (props) => {
    const data = {}
    for (const [index, instruction] of props.instructions.entries()) {
      data[index] = {
        ...instruction,
        key: (instruction.id) ? instruction.id : uuid.v4()
      }
    }
    return data
  }

  onChangeOrder = (nextOrder) => {
    this.nextOrder = nextOrder
  }

  onReleaseRow = (key) => {
    if (this.nextOrder != null) {
      this.props.onChangeOrder(this.nextOrder)
    }
  }

  render () {
    const {style = undefined} = this.props
    return (
      <View style={[s.container, style]}>
        <SortableList
          style={s.list}
          contentContainerStyle={s.contentContainer}
          data={this.state.data}
          renderRow={this.renderRow}
          onChangeOrder={this.onChangeOrder}
          onReleaseRow={this.onReleaseRow} />
      </View>
    )
  }
}
