import { Document } from 'mongoose'

import { FlightSeat } from './flightSeat.interface'

export interface Flight extends Document {
  readonly fromPlaceId: string,
  readonly toPlaceId: string,
  readonly startTime: Date,
  readonly endTime: Date,
  readonly userIds: string[],
  readonly terminal?: string,
  readonly gate?: string,
  readonly seats?: FlightSeat[],
}
