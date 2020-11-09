import React from 'react'

import Helmet from 'react-helmet'

// Layout and Component
import Card from '../components/Card'
import LayoutAuth from '../layouts/LayoutAuth'

// Form
import RegisterForm from '../components/form/RegisterForm'

function Register() {
  return (
    <LayoutAuth>
      <Helmet>
        <title>Register | Project Post Test</title>
      </Helmet>
      <Card cardTitle="Register">
        <RegisterForm />
      </Card>
    </LayoutAuth>
  )
}

export default Register
