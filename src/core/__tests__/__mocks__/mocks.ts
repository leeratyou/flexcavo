import { GET_DATA } from 'services/api/telematic/gql'

export const getDataMock = [
  {
    request: {
      query: GET_DATA,
    },
    result: {
      data: [
        {
          "EquipmentHeader": {
            "OEMName": "CAT",
            "Model": "M315F",
            "SerialNumber": "ABC1234561",
            "SnapshotTime": "2021-06-26T10:00:00Z"
          },
          "Location": {
            "Latitude": 52.5200,
            "Longitude": 13.4050,
            "Altitude": 70,
            "AltitudeUnits": "metre"
          },
          "CumulativeIdleHours": {
            "Hour": 1060
          },
          "CumulativeOperatingHours": {
            "Hour": 450.4,
          },
          "Distance": {
            "OdometerUnits": "kilometre",
            "Odometer": 2702.4
          },
          "EngineStatus": {
            "Running": false
          },
          "FuelUsed": {
            "FuelUnits": "litre",
            "FuelConsumed": 24096
          },
          "FuelRemaining": {
            "Percent": 39
          }
        },
      ]
    },
  },
]
