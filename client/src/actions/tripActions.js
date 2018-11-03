// @flow

import type { Trip } from '../types'

export type TripAction
  = { type: 'trip/fetch-details-request', tripId: number }
  | { type: 'trip/fetch-details-success', trip: Trip }
  | { type: 'trip/fetch-details-failure' }

export const tripActions = {
  fetchTripDetails (tripId: number): TripAction {
    return {
      type: 'trip/fetch-details-request',
      tripId
    }
  },

  fetchTripDetailsSuccess (trip: Trip): TripAction {
    return {
      type: 'trip/fetch-details-success',
      trip
    }
  },

  fetchTripDetailsFailure (): TripAction {
    return {
      type: 'trip/fetch-details-failure'
    }
  }
}
