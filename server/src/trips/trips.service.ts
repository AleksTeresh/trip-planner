import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { CreateTripDto } from './dto/create-trip.dto'
import { CreateActivityDto } from './dto/create-activity.dto'
import { CreateFlightDto } from './dto/create-flight.dto'

import { Trip } from './interfaces/trip.interface'
import { Activity } from './interfaces/activity.interface'
import { Flight } from './interfaces/flight.interface'

@Injectable()
export class TripsService {
    constructor(
        @InjectModel('Trip') private readonly tripModel: Model<Trip>,
        @InjectModel('Flight') private readonly flightModel: Model<Flight>,
        @InjectModel('Activity') private readonly activityModel: Model<Activity>
    ) {
        this.tripModel = tripModel
        this.flightModel = flightModel
        this.activityModel = activityModel
    }

    async create(createTripDto: CreateTripDto): Promise<Trip> {
        const createdTrip = new this.tripModel(createTripDto)
        return await createdTrip.save()
    }

    async addFlight(tripId: string, createFlightDto: CreateFlightDto): Promise<Trip> {
        let trip = await this.tripModel.findById(tripId)

        const createdFlight = new this.flightModel(createFlightDto)

        trip.flights.push(createdFlight)
        return await trip.save()
    }

    async addActivity(tripId: string, createActivityDto: CreateActivityDto): Promise<Trip> {
        let trip = await this.tripModel.findById(tripId)

        const createdActivity = new this.activityModel(createActivityDto)

        trip.activities.push(createdActivity)
        return await trip.save()
    }

    async findAll(): Promise<Trip[]> {
        return await this.tripModel.find().exec()
    }

    async findById(id: string): Promise<Trip> {
        return await this.tripModel.findById(id).exec()
    }
}
