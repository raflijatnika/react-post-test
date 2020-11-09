import React from 'react'

// Layout and Component
import Card from '../components/Card'
import LayoutAuth from '../layouts/LayoutAuth'

// Form
import LoginForm from '../components/form/LoginForm'

function Login() {
  return (
    <LayoutAuth>
      <Card cardTitle="Login">
        <LoginForm />
      </Card>
    </LayoutAuth>
  )
}

export default Login
