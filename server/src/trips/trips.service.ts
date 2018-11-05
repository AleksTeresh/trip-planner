import { Model } from 'mongoose'
import { Injectable, Dependencies } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Trip } from './interfaces/trip.interface';
import { CreateTripDto } from './dto/create-trip.dto';

@Injectable()
export class TripsService {
    constructor(@InjectModel('Trip') private readonly tripModel: Model<Trip>) {
        this.tripModel = tripModel
    }

    async create(createTripDto: CreateTripDto): Promise<Trip> {
        const createdTrip = new this.tripModel(createTripDto)
        return await createdTrip.save()
    }

    async findAll(): Promise<Trip[]> {
        return await this.tripModel.find().exec()
    }
}
