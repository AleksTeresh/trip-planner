// @flow

import React from 'react'

import format from 'date-fns/format'

import styled from 'react-emotion'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import type { Activity } from '../../types'

const StyledCard = styled(Card)`
  display: 'flex'
`

type ActivityPreviewProps = {
  activity: Activity
}
export default function ActivityPreview ({
  activity
}: ActivityPreviewProps) {
  return (
    <StyledCard>
      <div>
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
      </div>
      <CardMedia
        image='/static/images/cards/live-from-space.jpg'
        title='Live from space album cover'
      />
    </StyledCard>
  )
}
