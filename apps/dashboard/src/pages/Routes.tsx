import React, { FC } from 'react'
import Dashboard from 'pages/Dashboard'
import Layout from 'core/Layout'
import Route from 'core/Route'

interface Props {}

const Routes: FC<Props> = () => {
  // router - e.g. react-router
  return (
    <>
      <Layout>
        <Route path={'some-path'} component={Dashboard} />
      </Layout>
    </>
  )
}

export default Routes
