import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import ButtonLogout from '../button/ButtonLogout'

const style = {
  position: 'fixed',
  right: '10px',
  bottom: '10px',
}

const nav = [
  ['/', 'Dashboard'],
  ['/login', 'Login'],
  ['/register', 'Register'],
  ['/post-create', 'Create Post'],
  ['/posts', 'Post List'],
]

function NavigationHelper() {
  const isLogin = useSelector(state => state.login.isLogIn)
  const [show, setShow] = useState(false)

  return (
    <nav style={style}>
      <div className="list-group">
        {
          isLogin ? show && <ButtonLogout /> : show && nav.map(([to, path]) => (
            <Link key={to} className="list-group-item" to={to}>{path}</Link>
          ))
        }
        <button type="button" className="btn btn-primary" onClick={() => (setShow(!show))}>{ show ? 'Hide' : 'Show' }</button>
      </div>
    </nav>
  )
}

export default NavigationHelper
