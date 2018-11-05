import { Document } from 'mongoose'

import { Flight } from './flight.interface'
import { Activity } from './activity.interface'

export interface Trip extends Document {
  readonly name: string
  readonly creatorId: string
  readonly userIds: string[]
  readonly imageUrl?: string
  readonly flights: Flight[]
  readonly activities: Activity[]
}
