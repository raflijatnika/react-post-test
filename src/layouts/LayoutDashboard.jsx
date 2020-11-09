import React from 'react'

import NavigationBar from '../components/NavigationBar'

function LayoutDashboard(props) {
  const { navTitle, children } = props
  return (
    <>
      <NavigationBar navTitle={navTitle} />
      <div className="container vh-100">
        {children}
      </div>
    </>
  )
}

export default LayoutDashboard
