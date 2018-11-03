import { put, takeEvery } from 'redux-saga/effects'

// import * as client from '../core/client'

function * fetchTrip (action) {
  try {
    // const response = yield call(client.fetchTrip, action.tripId)
    const response = {
      id: 0,
      flights: [
        {
          fromPlaceId: 'HEL',
          toPlaceId: 'TRN',
          startTime: new Date('2018-10-09T11:25:00'),
          endTime: new Date('2018-10-09T18:00:00'),
          userIds: [0, 1, 2, 3, 4, 5],
          terminal: '',
          gate: '',
          seat: ''
        },
        {
          fromPlaceId: 'TRN',
          toPlaceId: 'HEL',
          startTime: new Date('2018-10-17T11:25:00'),
          endTime: new Date('2018-10-17T18:00:00'),
          userIds: [0, 1, 2, 3, 4, 5],
          terminal: '',
          gate: '',
          seat: ''
        }
      ],
      activities: [
        {
          id: 0,
          name: 'Checking in',
          startTime: new Date('2018-10-09T21:00:00'),
          endTime: Date('2018-10-09T22:00:00'),
          userIds: [0, 1, 2, 3, 4, 5],
          placeId: 'Costa Adeje'
        }
      ],
      userIds: [0, 1, 2, 3, 4, 5],
      name: 'Tenerife hedonism escape',
      imageUrl: ''
    }

    yield put({ type: 'trip/fetch-details-success', trip: response })
  } catch {
    yield put({ type: 'trip/fetch-details-failure' })
  }
}

function * tripSaga () {
  yield takeEvery('trip/fetch-details-request', fetchTrip)
}

export default tripSaga
