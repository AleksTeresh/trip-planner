// @flow

import React from 'react'

import format from 'date-fns/format'

import styled from 'react-emotion'

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'

import type { Activity, User } from '../../types'

const StyledCard = styled(Card)`
  display: 'flex'
`

type ActivityPreviewProps = {
  activity: Activity,
  users: User[]
}
export default function ActivityPreview ({
  activity,
  users
}: ActivityPreviewProps) {
  return (
    <StyledCard>
      <Grid>
        <Grid>
          <CardContent >
            <Typography component='h5' variant='h5'>
              {activity.name}
            </Typography>
            <Typography variant='subtitle1' color='textSecondary'>
              {
                format(activity.startTime, 'DD.MM.YY hh:mm') + ' - ' +
                format(activity.endTime, 'DD.MM.YY hh:mm')
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
