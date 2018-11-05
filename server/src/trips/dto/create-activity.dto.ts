export class CreateActivityDto {
  readonly name: string
  readonly startTime?: Date
  readonly endTime?: Date
  readonly userIds: string[]
  readonly placeId?: string
}
