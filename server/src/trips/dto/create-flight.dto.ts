export class CreateFlightDto {
  readonly fromPlaceId: string
  readonly toPlaceId: string
  readonly startTime: Date
  readonly endTime: Date
  readonly userIds: string[]
  readonly terminal?: string
  readonly gate?: string
}
