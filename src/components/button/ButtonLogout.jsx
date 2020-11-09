import React from 'react'
import { useDispatch } from 'react-redux'

function ButtonLogout() {
  const dispatch = useDispatch()

  function logoutHandler() {
    dispatch({ type: 'loggedOut' })
  }

  return (
    <button type="button" className="btn btn-danger" onClick={logoutHandler}>
      Logout
    </button>
  )
}

export default ButtonLogout
