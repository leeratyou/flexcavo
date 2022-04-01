import React from 'react'
import { GridRenderCellParams } from '@mui/x-data-grid'
import { TelematicRecord } from 'types/models'
import { useConfigContext } from 'context/ConfigProvider'
import CheckIcon from '@mui/icons-material/Check'
import BusAlertIcon from '@mui/icons-material/BusAlert'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'

const AlertIcon = styled(BusAlertIcon)(({ theme }) => ({
  color: theme.palette.error.main,
  fontSize: '1.5rem',
}))

const NormalIcon = styled(CheckIcon)(({ theme }) => ({
  color: theme.palette.success.main,
  fontSize: '1.5rem',
}))

const IdleContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
})

const IdleRatio = ({ row }: GridRenderCellParams<TelematicRecord>) => {
  const { telematicData } = useConfigContext()
  const idleRatio = row.CumulativeOperatingHours.Hour / row.CumulativeIdleHours.Hour
  const isExceeded = telematicData.thresholds.IdleRatio > idleRatio
  
  return (
    <IdleContainer>
      <Tooltip title={`Minimum ratio: ${telematicData.thresholds.IdleRatio}`}>
        {isExceeded
          ? <AlertIcon />
          : <NormalIcon />}
      </Tooltip>
      <Typography variant='caption'>{idleRatio.toFixed(2)}</Typography>
    </IdleContainer>
  )
  
}

export default IdleRatio
