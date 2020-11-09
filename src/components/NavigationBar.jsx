/* eslint-disable no-unneeded-ternary */
import clsx from 'clsx'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

import ButtonLogout from './button/ButtonLogout'

const nav = [
  ['/', 'Dashboard'],
  ['/post-create', 'Create Post'],
  ['/posts', 'Post List'],
]

function NavigationBar(props) {
  const location = useLocation()
  const { navTitle } = props
  const isLogin = useSelector(state => state.login.isLogIn)
  const [show, setShow] = useState(true)

  function navbarToggler() {
    setShow(!show)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand">{navTitle}</a>
      <button className={clsx('navbar-toggler', show && 'collapsed')} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!show ? true : false} onClick={navbarToggler} aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div className={clsx('navbar-collapse', 'collapse', show && 'show')} id="navbarNav">
        <ul className="navbar-nav mr-auto">
          {
            nav.map(([to, path]) => (
              <li key={to} className={clsx('nav-item', location.pathname === to ? 'active' : ' ')}>
                <Link className="nav-link" to={to}>{path}</Link>
              </li>
            ))
          }
        </ul>
        <ul className="navbar-nav">
          {
            isLogin ? <ButtonLogout /> : ' '
          }
        </ul>
      </div>
    </nav>
  )
}

export default NavigationBar
