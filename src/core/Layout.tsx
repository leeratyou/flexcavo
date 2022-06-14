import React, { FC } from 'react'
import Appbar from 'core/Appbar'
import NotificationDrawer from 'core/NotificationDrawer'

interface Props {}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Appbar />
      <NotificationDrawer />
      {children}
    </>
  )
}

export default Layout
