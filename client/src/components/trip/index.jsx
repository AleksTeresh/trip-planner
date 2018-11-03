// @flow

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import Grid from '@material-ui/core/Grid'

import ActivityPreview from './ActivityPreview'
import FlightPreview from './FlightPreview'

import { eventUtil } from '../../core/util'

import type {
  User,
  AppState,
  Flight,
  Activity
} from '../../types'

type TripViewProps = {
  name: string,
  users: User[],
  flights: Flight[],
  activities: Activity[],
  dispatch: any
}
export class TripView extends PureComponent<TripViewProps> {
  componentWillMount () {
    this.props.dispatch({ type: 'trip/fetch-details-request', tripId: 0 })
  }

  render () {
    const { flights, activities } = this.props

    const events = eventUtil.mergeByStartTime(flights, activities)

    return (
      <Grid container spacing={24}>
        {
          events.map((event, idx) => (
            eventUtil.isFlight(event)
              ? (
                <Grid key={idx} item xs={12}>
                  <FlightPreview flight={eventUtil.eventToFlight(event)} />
                </Grid>
              )
              : (
                <Grid key={idx} item xs={12}>
                  <ActivityPreview activity={eventUtil.eventToActivity(event)} />
                </Grid>
              )
          ))
        }
      </Grid>
    )
  }
}

export default connect(
  (state: AppState) => ({ ...state.trip }),
  (dispatch: any) => ({ dispatch })
)(TripView)
