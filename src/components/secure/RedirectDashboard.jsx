import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

function RedirectDashboard({ children }) {
  const isLogin = useSelector(state => state.login.isLogIn)

  return (
    <>
      {
        isLogin ? <Redirect to="/" /> : children
      }
    </>
  )
}

export default RedirectDashboard
