import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  startup: null,
  setInstalledAt: null
})

export const StartupTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  time: null,
  installedAt: null
})

/* ------------- Reducers ------------- */

export const updateTime = (state, action) => {
  const time = new Date()
  return state.merge({ time })
}

export const setInstalledAt = (state, action) => {
  const { installedAt } = state
  if (installedAt) {
    return state
  }
  return state.merge({ installedAt: new Date() })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.STARTUP]: updateTime,
  [Types.SET_INSTALLED_AT]: setInstalledAt
})
