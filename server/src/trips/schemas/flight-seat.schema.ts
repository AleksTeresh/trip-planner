import * as mongoose from 'mongoose'

export const FlightSeatSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  seat: { type: String }
})
