// @flow

import type { Event, Flight, Activity } from '../../types'

export function mergeByStartTime (arr1: any, arr2: any) {
  let p1 = 0
  let p2 = 0
  let res = []

  while (p1 < arr1.length || p2 < arr2.length) {
    if (p2 === arr2.length || arr1[p1].startTime <= arr2[p2].startTime) {
      res.push(arr1[p1])
      p1++
    } else {
      res.push(arr2[p2])
      p2++
    }
  }

  return res
}

export function isFlight (event: Event) {
  return event.hasOwnProperty('fromPlaceId') && event.hasOwnProperty('toPlaceId')
}

export function eventToFlight (event: Event): Flight {
  let flight: Flight = { ...event }
  return flight
}

export function eventToActivity (event: Activity): Activity {
  let activity: Activity = { ...event }
  return activity
}
