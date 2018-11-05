import * as mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  avatarUrl: { type: String },
  tripIds: { type: [mongoose.Schema.Types.ObjectId] }
})
