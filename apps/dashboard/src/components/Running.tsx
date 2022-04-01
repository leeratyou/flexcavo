import React, { FC } from 'react'
import { GridRenderCellParams } from '@mui/x-data-grid'
import { TelematicRecordExtended } from 'types/models'
import Tooltip from '@mui/material/Tooltip'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CheckIcon from '@mui/icons-material/Check'

const AlertIcon = styled(ErrorOutlineIcon)(({ theme }) => ({
  color: theme.palette.error.main,
  fontSize: '1.5rem',
  marginRight: '0.5rem'
}))

const NormalIcon = styled(CheckIcon)(({ theme }) => ({
  color: theme.palette.success.main,
  fontSize: '1.5rem',
  marginRight: '0.5rem'
}))

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
