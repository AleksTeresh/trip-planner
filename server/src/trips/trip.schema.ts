import * as mongoose from 'mongoose'

export const TripSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  creatorId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
})
