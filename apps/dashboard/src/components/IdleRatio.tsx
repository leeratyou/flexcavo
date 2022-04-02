import React from 'react'
import { GridRenderCellParams } from '@mui/x-data-grid'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'

import NormalIcon from 'ui/icons/Normal'
import AlertIcon from 'ui/icons/Alert'

import { TelematicRecordExtended } from 'types/models'
import { useConfigContext } from 'context/ConfigProvider'

const IdleContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
})

const IdleRatio = ({ row }: GridRenderCellParams<TelematicRecordExtended>) => {
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
