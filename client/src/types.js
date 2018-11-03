// @flow

export type Activity = {
  id: number,
  name: string,
  startTime: Date,
  endTime: Date,
  userIds: number[],
  placeId: string
}

export type FlightSeat = {
  userId: number,
  seat: string
}

export type Flight = {
  fromPlaceId: string,
  toPlaceId: string,
  startTime: Date,
  endTime: Date,
  userIds: number[],
  terminal: string,
  gate: string,
  seat: string
}

export type Event = Flight | Activity

export type User = {
  id: number,
  name: string,
  avatarUrl: string
}

export type Trip = {
  id: number,
  flights: Flight[],
  activities: Activity[],
  userIds: number[],
  name: string,
  imageUrl: string
}

export type TripShort = {
  id: number,
  name: string,
  imageUrl: string
}

export type AppState = {
  trips: TripShort[],
  trip: Trip
}
