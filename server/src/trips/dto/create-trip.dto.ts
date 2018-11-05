export class CreateTripDto {
  readonly name: string
  readonly creatorId: string
  readonly userIds: string[]
  readonly imageUrl: string
}
