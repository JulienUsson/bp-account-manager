import React from 'react'
import { MuiThemeProvider, Reboot } from 'material-ui'
import { BrowserRouter } from 'react-router-dom'

import theme from './theme'
import Routes from './Routes'
import './index.css'

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Reboot />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </MuiThemeProvider>
)

export default App
