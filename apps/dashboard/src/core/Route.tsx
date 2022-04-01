import React, { FC, ReactNode } from 'react'
// import { Route as RRRoute, RouteProps } from 'react-router-dom'
import ErrorBoundary from 'core/Error'

interface Props {
  path: string
  component: ReactNode
}

const Route: FC<Props> = ({ component }) => {
  // props.location?.pathname - in production
  const location = window.location.pathname
  const Component = component
  // @ts-ignore
  return <ErrorBoundary key={location}><Component /></ErrorBoundary>
}

export default Route
