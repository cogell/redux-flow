// @flow
import React from 'react'
import { connect } from 'react-redux'
import type { ExtractReturn } from '../arch/types'
import counter from '../arch/counter'

type Props = {|
  ...ExtractReturn<typeof mapState>,
  ...ExtractReturn<typeof mapActions>,
|}

const UI = ({ value, incrementCount, decrementCount }: Props) => (
  <p>
    Clicked: {value} times <button onClick={incrementCount}>+</button>{' '}
    <button onClick={decrementCount}>-</button>{' '}
  </p>
)

const mapState = state => ({
  value: counter.selectors.value(state),
})

const mapActions = dispatch => ({
      incrementCount: () => dispatch(counter.actions.incrementCount(6)),
      decrementCount: dispatch(counter.actions.decrementCount),
    })

export default connect(mapState, mapActions)(UI)
