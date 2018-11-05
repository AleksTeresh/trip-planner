import { Controller, Get, Post, Body, Dependencies, Param } from '@nestjs/common'

import { CreateTripDto } from './dto/create-trip.dto'
import { Trip } from './interfaces/trip.interface'
import { TripsService } from './trips.service';
import { CreateFlightDto } from './dto/create-flight.dto';
import { identity } from 'rxjs';
import { CreateActivityDto } from './dto/create-activity.dto';

@Controller('trips')
export class TripsController {
    constructor(private readonly tripsService: TripsService) {}

    @Post()
    async create(@Body() createTripDto: CreateTripDto) {
        this.tripsService.create(createTripDto)
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<Trip> {
        return this.tripsService.findById(id)
    }

    @Get()
    async findAll(): Promise<Trip[]> {
        return this.tripsService.findAll()
    }

    @Post(':id/flights')
    async addFlight(@Param('id') id: string, @Body() createFlightDto: CreateFlightDto) {
        this.tripsService.addFlight(id, createFlightDto)
    }

    @Post(':id/activities')
    async addActivity(@Param('id') id: string, @Body() createActivityDto: CreateActivityDto) {
        this.tripsService.addActivity(id, createActivityDto)
    }
}
