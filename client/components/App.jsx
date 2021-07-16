import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import Register from './Register'
import SignIn from './SignIn'

function App (props) {
  return (
  <div>
    <Route path = '/register' component={Register} />
    <Route path = '/login' component={SignIn} />
  </div>
  )
}


export default connect()(App)