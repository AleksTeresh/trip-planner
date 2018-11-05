import { Document } from 'mongoose'

export interface Activity extends Document {
  readonly name: string
  readonly startTime?: Date
  readonly endTime?: Date
  readonly userIds: string[]
  readonly placeId?: string
}
