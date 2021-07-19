import React from 'react'
import checkAuthentication from '../../server/lib/lib'

export function IfAuthenticated ({ children }) {
  return checkAuthentication()
    ? <>{ children }</>
    : null
}

export function IfNotAuthenticated ({ children }) {
  return !checkAuthentication()
    ? <>{ children }</>
    : null
}