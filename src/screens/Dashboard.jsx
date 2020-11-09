import React from 'react'

import Helmet from 'react-helmet'

import LayoutDashboard from '../layouts/LayoutDashboard'

function Dashboard() {
  return (
    <LayoutDashboard navTitle="Dashboard">
      <Helmet>
        <title>Dashboard | Project Post Test</title>
      </Helmet>
      <div>
        Welcome, User
      </div>
    </LayoutDashboard>
  )
}

export default Dashboard
