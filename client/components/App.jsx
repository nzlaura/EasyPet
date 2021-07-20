import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import Contact from './Contact'
import Register from './Register'
import SignIn from './SignIn'
import UserProfile from './UserProfile'
import PetProfile from './PetProfile'
import AddPet from './AddPet'
import MyMonthlyCalendar from './MyMonthlyCalendar'
import Header from './Header'
import Footer from './Footer'
import FaqList from './FaqList'
import Navbar from './Nav'
import SearchFAQ from './SearchFAQ'
import Home from './Home'
import About from './About'
// import AddToCalendar from './AddToCalendar'
import PrivacyPolicy from './PrivacyPolicy'
import TermsOfService from './TermsOfService'

function App (props) {
  return (
    <>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Header/>
      <Navbar />
      <Route exact path = '/home' component={Home} />
      <Route exact path = '/contact' component={Contact} />
      <Route exact path = '/calendar' component={MyMonthlyCalendar} />
      {/* <Route exact path = '/calendar' component={AddToCalendar} /> */}
      <Route exact path = '/register' component={Register} />
      <Route exact path = '/login' component={SignIn} />
      <Route exact path = '/user' component={UserProfile} />
      <Route exact path = '/user/pets' component={PetProfile} />
      <Route exact path = '/user/pets/addpet' component={AddPet} />
      <Route exact path = '/faq' component={FaqList} />
      <Route exact path="/search/:searchString" component={SearchFAQ} />
      <Route path = '/about' component={About} />
      <Route path = '/privacypolicy' component={PrivacyPolicy} />
      <Route path = '/termsofservice' component={TermsOfService} />
      <Footer/>
    </>
  )
}

export default connect()(App)
