import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'

const ProtectedRoute = ({ children }) => {

  const {user} = useSelector(store => store.user)
  if(!user) return <Navigate to='/register' />

  return children
}

export default ProtectedRoute