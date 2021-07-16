import React from 'react'
import { Route } from 'react-router-dom'

import { connect } from 'react-redux'

import Contact from './Contact'
import Register from './Register'
import SignIn from './SignIn'
import MyMonthlyCalendar from './MyMonthlyCalendar'
import Header from './Header'
import Footer from './Footer'
import Faq from './FAQ'
import Navbar from './Nav'

function App (props) {
  return (

    <div>
      {/* <Header/> */}
      <Route path = '/' component={Navbar} />
      <Route path = '/contact' component={Contact} />
      <Route path = '/calendar' component={MyMonthlyCalendar} />
      <Route path = '/register' component={Register} />
      <Route path = '/login' component={SignIn} />
      <Route path = '/faq' component={Faq} />
      {/* <Footer/> */}
    </div>
  )
}

export default connect()(App)
