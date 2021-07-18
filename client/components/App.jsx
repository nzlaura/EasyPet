import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Contact from './Contact'
import Register from './Register'
import SignIn from './SignIn'
import UserProfile from './UserProfile'
import MyMonthlyCalendar from './MyMonthlyCalendar'
import Header from './Header'
import Footer from './Footer'
import FaqList from './FaqList'
import Navbar from './Nav'
import SearchFAQ from './SearchFAQ'
import Home from './Home'
import About from './About'

function App (props) {
  return (
    <>
      <Header/>
      <Navbar />
      <Route path = '/home' component={Home} />
      <Route path = '/contact' component={Contact} />
      <Route path = '/calendar' component={MyMonthlyCalendar} />
      <Route path = '/register' component={Register} />
      <Route path = '/login' component={SignIn} />
      <Route path = '/user' component={UserProfile} />
      <Route path = '/faq' component={FaqList} />
      <Route exact path="/search/:searchString" component={SearchFAQ} />
      <Route path = '/about' component={About} />
      <Footer/>
    </>
  )
}

export default connect()(App)
