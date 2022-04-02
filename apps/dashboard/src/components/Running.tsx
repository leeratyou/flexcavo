import React, { FC } from 'react'
import { GridRenderCellParams } from '@mui/x-data-grid'
import Tooltip from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

import { TelematicRecordExtended } from 'types/models'

import AlertIcon from 'ui/icons/Alert'
import NormalIcon from 'ui/icons/Normal'

const RunningContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
})

const Running = ({ row }: GridRenderCellParams<TelematicRecordExtended>) => {
  const isRunning = row.EngineStatus.Running
  const alert = row.Alerts.EngineStatus?.reason
  return (
    <Tooltip title={alert ? alert : (isRunning ? 'Running' : 'Not')}>
      <RunningContainer>
        {alert
          ? <AlertIcon />
          : <NormalIcon />
        }
        <Typography>
          {isRunning
            ? 'Running'
            : 'Not'
          }
        </Typography>
      </RunningContainer>
    </Tooltip>
  )
}

export default Running
