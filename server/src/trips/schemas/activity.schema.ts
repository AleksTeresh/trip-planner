import * as mongoose from 'mongoose'

export const ActivitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  startTime: { type: Date },
  endTime: { type: Date },
  userIds: { type: [mongoose.Schema.Types.ObjectId] },
  placeId: { type: String }
})
