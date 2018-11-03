// @flow

import type { Trip } from '../types'
import type { Action } from '../actions'

const initState: Trip = {
  id: 0,
  flights: [],
  activities: [],
  userIds: [],
  name: '',
  imageUrl: ''
}

export default function tripReducer (
  state: Trip = initState,
  action: Action
) {
  switch (action.type) {
    case 'trip/fetch-details-success':
      return {
        ...state,
        ...action.trip
      }

    default:
      return state
  }
}
