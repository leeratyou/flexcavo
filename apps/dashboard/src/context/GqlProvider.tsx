import React, { FC } from 'react'
import client from 'services/api'
import { ApolloProvider } from '@apollo/client'

interface Props {}

const GqlProvider: FC<Props> = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}

export default GqlProvider
