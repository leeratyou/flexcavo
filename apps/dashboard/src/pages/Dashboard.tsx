import React, { FC } from 'react'

import { DataGrid, GridColDef, GridValueGetterParams, GridRenderCellParams } from '@mui/x-data-grid'
import Typography from '@mui/material/Typography'

import { getDataFilters, useGetTelematicData } from 'services/api'
import { TelematicRecord, TelematicRecordExtended } from 'types/models'

import Page from 'core/Page'
import Paper from 'ui/Paper'
import Progress from 'components/Progress'
import IdleRatio from 'components/IdleRatio'
import Space from 'ui/Space'
import Running from 'components/Running'
import { FormControlLabel, FormGroup, Switch } from '@mui/material'
import { useReactiveVar } from '@apollo/client'

interface Props {}

const renderName = ({ value, id }: GridRenderCellParams<TelematicRecord>) => (
  <div>
    <Typography>{value}</Typography>
    <Typography variant='caption'>{id}</Typography>
  </div>
)

const columns: GridColDef[] = [
  {
    field: 'EngineStatus',
    headerName: 'Running',
    renderCell: (row: GridRenderCellParams<TelematicRecordExtended>) => <Running {...row} />,
    width: 150
  },
  {
    field: 'EquipmentHeader',
    headerName: 'Name',
    flex: 1,
    renderCell: (row: GridRenderCellParams<TelematicRecord>) => renderName(row),
    valueGetter: (row: GridValueGetterParams<TelematicRecord['EquipmentHeader']>) => `${row.value.OEMName} ${row.value.Model}`
  },
  {
    field: 'Distance',
    headerName: 'Distance Overall',
    flex: 0.25,
    valueGetter: (row: GridValueGetterParams<TelematicRecord['Distance']>) => `${row.value.Odometer} ${row.value.OdometerUnits}`
  },
  {
    field: 'FuelUsed',
    headerName: 'Fuel Used',
    flex: 0.25,
    valueGetter: (row: GridValueGetterParams<TelematicRecord['FuelUsed']>) => `${row.value.FuelConsumed} ${row.value.FuelUnits}`
  },
  {
    field: 'CumulativeIdleHours',
    headerName: 'Idle Ratio',
    flex: 0.25,
    align: 'center',
    renderCell: (row: GridRenderCellParams<TelematicRecord>) => <IdleRatio {...row} />
  },
  {
    field: 'FuelRemaining',
    headerName: 'Fuel Remaining',
    flex: 0.25,
    renderCell: (row: GridRenderCellParams<TelematicRecord['FuelRemaining']>) => <Progress value={row.value.Percent} />,
  }
]

const Dashboard: FC<Props> = () => {
  const filters = useReactiveVar(getDataFilters)
  const rows = useGetTelematicData({ filters } )
  
  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    getDataFilters({
      showOnlyAlerts: event.target.checked
    })
  }
  
  return (
    <Page>
      <Paper>
        <Typography variant='h3'>Dashboard</Typography>
        <FormGroup>
          <FormControlLabel control={<Switch onChange={handleFilter} />} label="Show only alerts" />
        </FormGroup>
        <Space />
        <DataGrid
          density='comfortable'
          autoHeight
          rows={rows}
          columns={columns}
          getRowId={(row: any) => row.EquipmentHeader.SerialNumber}
        />
      </Paper>
    </Page>
  )
}

export default Dashboard
