import React from 'react'
import { MuiThemeProvider, Reboot } from 'material-ui'

import theme from './theme'
import Import from './scenes/Import'
import Table from './scenes/Table'
import './index.css'

const App = class extends React.Component {
  state = {
    data: null,
  }

  onLoad = data => this.setState({ data })

  renderBody = () => {
    const { data } = this.state
    if (!data) {
      return <Import onLoad={this.onLoad} />
    }
    return <Table data={data} />
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Reboot />
        {this.renderBody()}
      </MuiThemeProvider>
    )
  }
}

export default App
