import React from 'react'

import Helmet from 'react-helmet'

// Layout and Component
import Card from '../components/Card'
import LayoutAuth from '../layouts/LayoutAuth'

// Form
import LoginForm from '../components/form/LoginForm'

function Login() {
  return (
    <LayoutAuth>
      <Helmet>
        <title>Login | Project Post Test</title>
      </Helmet>
      <Card cardTitle="Login">
        <LoginForm />
      </Card>
    </LayoutAuth>
  )
}

export default Login
