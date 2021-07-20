import { useEffect, useState } from 'react'
import { getUser } from '../apis/apiPassport'

export function IfAuthenticated ({ children }) {
  const [user, setUser] = useState(false)

  useEffect(() => {
    getUser()
      .then(result => {
        setUser(result)
        return null
      })
      .catch(err => {
        console.log(err.message)
        return null
      })
  }, [])

  return user ? children : null
}
export function IfNotAuthenticated ({ children }) {
  const [user, setUser] = useState(false)

  useEffect(() => {
    getUser()
      .then(result => {
        setUser(result)
        return null
      })
      .catch(err => {
        console.log(err.message)
        return null
      })
  }, [])

  return !user ? children : null
}
