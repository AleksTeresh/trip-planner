import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { TripsController } from './trips.controller'
import { TripsService } from './trips.service'
import { TripSchema } from './schemas/trip.schema'
import { FlightSchema } from './schemas/flight.schema'
import { ActivitySchema } from './schemas/activity.schema'

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Trip', schema: TripSchema }]),
        MongooseModule.forFeature([{ name: 'Flight', schema: FlightSchema }]),
        MongooseModule.forFeature([{ name: 'Activity', schema: ActivitySchema }])
    ],
    controllers: [TripsController],
    providers: [TripsService]
})
export class TripsModule { }
