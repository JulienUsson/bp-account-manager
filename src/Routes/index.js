import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Import from 'scenes/Import'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/import" component={Import} />
        <Redirect to="/import" />
      </Switch>
    )
  }
}

export default Routes
