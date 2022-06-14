import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'

import GlobalStyles from 'core/GlobalStyles'
import Routes from 'pages/Routes'
import CombinedContext from 'context/CombinedContext'

function App() {
  return (
    <CombinedContext>
      <CssBaseline />
      <GlobalStyles />
      <Routes />
    </CombinedContext>
  )
}

export default App
