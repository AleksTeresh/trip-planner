import { Controller, Get, Post, Body, Dependencies } from '@nestjs/common'

import { CreateTripDto } from './dto/create-trip.dto'
import { Trip } from './interfaces/trip.interface'
import { TripsService } from './trips.service';

@Controller('trips')
export class TripsController {
    constructor(private readonly tripsService: TripsService) {}

    @Post()
    async create(@Body() createTripDto: CreateTripDto) {
        this.tripsService.create(createTripDto)
    }

    @Get()
    async findAll(): Promise<Trip[]> {
        return this.tripsService.findAll()
    }
}
