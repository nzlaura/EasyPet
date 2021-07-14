import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Contact from './Contact'

// Example:
// import { fetchFruits } from '../actions'

function App (props) {
  // useEffect(() => {
  //   props.dispatch(fetchFruits())
  // }, [])

  return (
    <>
      {/* <div className='app'>
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <ul>
          {props.fruits.map(fruit => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
      </div> */}
      <Route exact path="/contact" component={Contact}/>

    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    // fruits: globalState.fruits
  }
}

export default connect(mapStateToProps)(App)
