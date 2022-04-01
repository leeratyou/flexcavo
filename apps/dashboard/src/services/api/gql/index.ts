import { gql } from '@apollo/client'

export const GET_DATA = gql`
  query {
    TelematicRecords {
      EquipmentHeader {
        OEMName
        Model
        SerialNumber
        SnapshotTime
      }
      Location {
        Latitude
        Longitude
        Altitude
        AltitudeUnits
      }
      CumulativeIdleHours {
        Hour
        
        # We can calculate it based on CumulativeIdleHours and CumulativeOperatingHours
        IdleRatio @client
        Alert @client
      }
      CumulativeOperatingHours {
        Hour
      }
      Distance {
        OdometerUnits
        Odometer
      }
      EngineStatus {
        Running
      }
      FuelUsed {
        FuelUnits
        FuelConsumed
      }
      FuelRemaining {
        Percent
      }
    }
  }
`
