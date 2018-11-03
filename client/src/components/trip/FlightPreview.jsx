// @flow

import React from 'react'

import format from 'date-fns/format'

import styled from 'react-emotion'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import type { Flight } from '../../types'

const StyledCard = styled(Card)`
  display: 'flex'
`

type FlightPreviewProps = {
  flight: Flight
}
export default function FlightPreview ({
  flight
}: FlightPreviewProps) {
  return (
    <StyledCard>
      <div>
        <CardContent>
          <Typography component='h5' variant='h5'>
            {flight.fromPlaceId + ' - ' + flight.toPlaceId}
          </Typography>
          <Typography variant='subtitle1' color='textSecondary'>
            {
              format(flight.startTime, 'DD.MM.YY hh:mm') + ' - ' +
              format(flight.endTime, 'DD.MM.YY hh:mm')
            }
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        image='/static/images/cards/live-from-space.jpg'
        title='Live from space album cover'
      />
    </StyledCard>
  )
}
