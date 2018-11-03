// @flow

import React from 'react'

import format from 'date-fns/format'

import styled from 'react-emotion'

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'

import type { Flight, User } from '../../types'

const StyledCard = styled(Card)`
  display: 'flex'
`

type FlightPreviewProps = {
  flight: Flight,
  users: User[]
}
export default function FlightPreview ({
  flight,
  users
}: FlightPreviewProps) {
  return (
    <StyledCard>
      <Grid container direction='column'>
        <Grid item>
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
        </Grid>
        <Grid item container>
          <Grid item xs container direction='row' spacing={8}>
            {
              users.map((user, idx) => (
                <Grid key={idx} item>
                  <Avatar>{user.name[0]}</Avatar>
                </Grid>
              ))
            }
          </Grid>
        </Grid>
      </Grid>
    </StyledCard>
  )
}
