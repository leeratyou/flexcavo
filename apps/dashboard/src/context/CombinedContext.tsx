import React, { FC } from 'react'
import { ConfigProvider } from 'context/ConfigProvider'
import GqlProvider from 'context/GqlProvider'

interface Props {
  contexts?: any[]
}

// 1. order of context is important
// 2. earlest context is topmost in nesting
// 3. early context is accessible from next but not vice versa
const initContexts: any[] = [
  ConfigProvider,
  GqlProvider
]

const CombinedContext: FC<Props> = ({ contexts = initContexts, children }) => {
  return (
    <>
      {contexts.reduceRight((rest, Current) => <Current>{rest}</Current>, children)}
    </>
  )
}

export default CombinedContext
