import React, { FC, createContext, useState, useContext } from 'react'

export interface IConfig {
  telematicData: {
    thresholds: {
      FuelRemaining: {
        red: number,
        orange: number,
        yellow: number,
      }
      IdleRatio: number
      ShouldRunOnWeekends: boolean
    }
  }
}

const init = {
  telematicData: {
    thresholds: {
      FuelRemaining: {
        red: 5,
        orange: 10,
        yellow: 25,
      },
      IdleRatio: 3,
      ShouldRunOnWeekends: false
    }
  }
}

const ConfigContext = createContext<IConfig>(init)
export default ConfigContext

interface Props {}

export const ConfigProvider: FC<Props> = ({ children }) => {
  const [ config, setConfig ] = useState(init)
  return (
    <ConfigContext.Provider value={config}>
      {children}
    </ConfigContext.Provider>
  )
}

export function useConfigContext() {
  return useContext(ConfigContext)
}
