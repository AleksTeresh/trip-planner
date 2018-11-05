import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { TripsModule } from './trips/trips.module'

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/tripplanner'), TripsModule],
  controllers: [],
  providers: []
})
export class AppModule {}
