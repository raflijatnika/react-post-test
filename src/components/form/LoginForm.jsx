import React from 'react'

// Validation
import { joiResolver } from '@hookform/resolvers/joi'

// Hook Form
import { useForm } from 'react-hook-form'

// Redux
import { useDispatch } from 'react-redux'

// Validation Schema
import LoginValidation from '../../validations/LoginValidation'

// Services
import { loginUser } from '../../services/index'

// Input Component
import Email from '../input/Email'
import Password from '../input/Password'

// Button Component
import ButtonSubmit from '../button/ButtonSubmit'

function LoginForm() {
  const { handleSubmit, register, errors } = useForm({
    resolver: joiResolver(LoginValidation),
  })

  const dispatch = useDispatch()

  function callLoginUser(data) {
    loginUser(data).then(
      (isLogin) => {
        if (isLogin) {
          dispatch({ type: 'loggedIn' })
        }
      },
    )
  }

  return (
    <>
      <form onSubmit={handleSubmit(callLoginUser)}>
        <Email labelText="Email :" inputName="email" inputId="email" inputRef={register} error={errors.email && errors.email.message} />
        <Password labelText="Password :" inputName="password" inputId="password" inputRef={register} error={errors.password && errors.password.message} />
        <ButtonSubmit>Login</ButtonSubmit>
      </form>
    </>
  )
}

export default LoginForm
