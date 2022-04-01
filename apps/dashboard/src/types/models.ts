type PaddedNumber = `${'0' | ''}${number}`
type ISODate = `${number}-${PaddedNumber}-${PaddedNumber}`
type ISOTime = `${PaddedNumber}:${PaddedNumber}:${PaddedNumber}`
export type ISOString = `${ISODate}T${ISOTime}Z`

export interface TelematicRecord {
  "EquipmentHeader": {
    "OEMName": string,
    "Model": string,
    "SerialNumber": string,
    "SnapshotTime": ISOString
  },
  "Location": {
    "Latitude": number,
    "Longitude": number,
    "Altitude": number,
    "AltitudeUnits": "metre" | "feet"
  },
  "CumulativeIdleHours": {
    "Hour": number
  },
  "CumulativeOperatingHours": {
    "Hour": number,
  },
  "Distance": {
    "OdometerUnits": "kilometre" | "mile",
    "Odometer": number
  },
  "EngineStatus": {
    "Running": boolean
  },
  "FuelUsed": {
    "FuelUnits": "litre" | "gallon",
    "FuelConsumed": number
  },
  "FuelRemaining": {
    "Percent": number
  }
}

interface Alert {
  status: boolean
  reason: string
}

export interface TelematicRecordExtended extends TelematicRecord {
  Alerts: {
    [key: string]: Alert
  }
}
