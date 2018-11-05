import { Document } from 'mongoose'

export interface FlightSeat extends Document {
  readonly userId: string,
  readonly seat: string
}
