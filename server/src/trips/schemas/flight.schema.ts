import * as mongoose from 'mongoose'

import { FlightSeatSchema } from './flight-seat.schema'

export const FlightSchema = new mongoose.Schema({
  fromPlaceId: {
    type: String,
    required: true
  },
  toPlaceId: {
    type: String,
    required: true
  },
  startTime: { type: Date },
  endTime: { type: Date },
  userIds: { type: [mongoose.Schema.Types.ObjectId] },
  terminal: { type: String },
  gate: { type: String },
  seats: { type: [FlightSeatSchema] }
})
