// @flow

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import './App.css'

import TripView from './components/trip'

import { store, hashHistory } from './store'

class App extends Component<{}> {
  render () {
    return (
      <Provider store={store}>
        <ConnectedRouter history={hashHistory}>
          <Switch>
            <Route path='/' component={() => (
              <div className='container'>
                <Route
                  path='/'
                  render={() => <Redirect to='/trip' />}
                  exact
                />
                <Route path='/trip' component={TripView} />
              </div>
            )} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default App
