import React from 'react'

// Layout and Component
import Card from '../components/Card'
import LayoutAuth from '../layouts/LayoutAuth'

// Form
import RegisterForm from '../components/form/RegisterForm'

function Register() {
  return (
    <LayoutAuth>
      <Card cardTitle="Register">
        <RegisterForm />
      </Card>
    </LayoutAuth>
  )
}

export default Register
