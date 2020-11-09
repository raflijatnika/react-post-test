import React from 'react'

// Validation
import { joiResolver } from '@hookform/resolvers/joi'

// Hook Form
import { useForm } from 'react-hook-form'

// History
import { useHistory } from 'react-router-dom'

// Validation Schema
import PostValidation from '../../validations/PostValidation'

// Services
import { createPost } from '../../services/index'

// Input Component
import Text from '../input/Text'

// Button Component
import ButtonSubmit from '../button/ButtonSubmit'

function LoginForm() {
  const history = useHistory()
  const { handleSubmit, register, errors } = useForm({
    resolver: joiResolver(PostValidation),
  })

  function callCreatePost(data) {
    createPost(data).then(
      (response) => history.push(`/posts/${response.data.id}`),
    )
  }

  return (
    <form onSubmit={handleSubmit(callCreatePost)}>
      <Text labelText="Title :" inputName="title" inputId="title" inputRef={register} error={errors.title && errors.title.message} />
      <Text labelText="Author :" inputName="author" inputId="author" inputRef={register} error={errors.author && errors.author.message} />
      <ButtonSubmit>Save</ButtonSubmit>
    </form>
  )
}

export default LoginForm
