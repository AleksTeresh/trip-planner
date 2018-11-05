import { Document } from 'mongoose'

export interface Trip extends Document {
  readonly name: string
  readonly creatorId: string
}
