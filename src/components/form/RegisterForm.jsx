import React from 'react'

// Validation
import { joiResolver } from '@hookform/resolvers/joi'

// Hook Form
import { useForm } from 'react-hook-form'

// Services
import { registerUser } from '../../services/index'

// Validation Schema
import LoginValidation from '../../validations/LoginValidation'

// Input Component
import Email from '../input/Email'
import Password from '../input/Password'

// Button Component
import ButtonSubmit from '../button/ButtonSubmit'

function RegisterForm() {
  const { handleSubmit, register, errors } = useForm({
    resolver: joiResolver(LoginValidation),
  })

  return (
    <>
      <form onSubmit={handleSubmit(registerUser)}>
        <Email labelText="Email :" inputName="email" inputId="email" inputRef={register} error={errors.email && errors.email.message} />
        <Password labelText="Password :" inputName="password" inputId="password" inputRef={register} error={errors.password && errors.password.message} />
        <ButtonSubmit>Register</ButtonSubmit>
      </form>
    </>
  )
}

export default RegisterForm
