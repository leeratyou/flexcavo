import { useQuery, makeVar } from '@apollo/client'

import { TelematicRecord, TelematicRecordExtended } from 'types/models'
import { telematicData } from 'fixtures/telematicDate'
import { useConfigContext } from 'context/ConfigProvider'
import isWeekend from 'date-fns/isWeekend'
import { GET_DATA } from 'services/api/telematic/gql'
import { TelematicThresholds } from 'services/api/telematic/types'

// TODO: we can calculate alerts on BE and enrich data with it
// OR
// TODO: we can compute alerts on @client local-only fields
function addAlerts(record: TelematicRecord, thresholds: TelematicThresholds) {
  (record as TelematicRecordExtended).Alerts = {}
  if ((record.CumulativeOperatingHours.Hour / record.CumulativeIdleHours.Hour) < thresholds.IdleRatio) {
    (record as TelematicRecordExtended).Alerts['IdleRatio'] = {
      status: true,
      reason: 'Idle ratio is too low'
    }
  }
  if (!thresholds.ShouldRunOnWeekends && record.EngineStatus.Running && isWeekend(new Date('2022-04-03'))) {
    (record as TelematicRecordExtended).Alerts['EngineStatus'] = {
      status: true,
      reason: 'Engine shouldn\'t run on weekends'
    }
  }
  if (record.FuelRemaining.Percent <= thresholds.FuelRemaining.red) {
    (record as TelematicRecordExtended).Alerts['FuelRemaining'] = {
      status: true,
      reason: 'Fuel remaining is too low'
    }
  }
  return record as TelematicRecordExtended
}

function applyGetDataFilters(record: TelematicRecordExtended, filters: IGetDataFilters) {
  if (filters.showOnlyAlerts) {
    return Object.keys(record.Alerts).length > 0
  }
  return true
}

export interface IGetDataFilters {
  showOnlyAlerts: boolean
}

export const getDataFilters = makeVar<IGetDataFilters>({
  showOnlyAlerts: false
})

// TODO we can enrich data with TS itself
// Not performing variant
function enrichData(data: TelematicRecord[], filters: IGetDataFilters, thresholds: TelematicThresholds) {
  return data
    .map(record => addAlerts(record, thresholds))
    .filter(record => filters ? applyGetDataFilters(record, filters) : true)
}

// TODO we can use reactive vars to track global states
export function useGetTelematicData({ filters }: { filters: IGetDataFilters }) {
  const config = useConfigContext()
  const { data = [], loading, error } = useQuery<TelematicRecord[], { idleRatioThreshold: number }>(GET_DATA, {
    variables: {
      idleRatioThreshold: config.telematicData.thresholds.IdleRatio
    },
  })
  
  const enrichedData = enrichData(telematicData, filters, config.telematicData.thresholds)
  return enrichedData
}
