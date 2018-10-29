// @flow

export type Activity = {
  id: number,
  startTime: Date,
  endTime: Date,
  userIds: number[],
  placeId: string,
  userIds: number[]
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
  seat: FlightSeat[]
}

export type User = {
  id: number,
  name: string,
  avatarUrl: string
}

export type Trip = {
  id: number,
  eventIds: number[],
  userIds: number[],
  name: string
}