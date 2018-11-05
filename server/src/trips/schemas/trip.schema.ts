import * as mongoose from 'mongoose'

import { FlightSchema } from './flight.schema'
import { ActivitySchema } from './activity.schema'

export const TripSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  creatorId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  userIds: { type: [mongoose.Schema.Types.ObjectId] },
  flights: { type: [FlightSchema] },
  activities: { type: [ActivitySchema] },
  imageUrl: { type: String }
})

