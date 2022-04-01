import React, { FC } from 'react'
import { styled } from '@mui/material/styles'
import { IConfig, useConfigContext } from 'context/ConfigProvider'

function getColor(value: number, thresholds: IConfig['telematicData']['thresholds']['FuelRemaining']) {
  if (value <= thresholds.red) {
    return '#f44336'
  }
  if (value <= thresholds.orange) {
    return '#ff9800'
  }
  if (value <= thresholds.yellow) {
    return '#ffeb3b'
  }
  return '#4caf50'
}

const ProgressContainer = styled('div')({
  width: '100%',
  backgroundColor: '#e0e0e0',
  overflow: 'hidden',
  border: '1px solid #e0e0e0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  borderRadius: '4px',
})

const ProgressBar: any = styled('div')(({ percents, color }: any) => ({
  width: percents + '%',
  backgroundColor: color,
  transition: 'width 0.5s ease-in-out',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  left: 0,
  top: 0,
  bottom: 0,
}))

interface Props {
  value: number
}

const Progress: FC<Props> = ({ value }) => {
  const { telematicData } = useConfigContext()
  return (
    <ProgressContainer>
      {value} %
      <ProgressBar percents={value} color={getColor(value, telematicData.thresholds.FuelRemaining)} />
    </ProgressContainer>
  )
}

export default Progress
