import React from 'react'

// Form
import { useForm } from 'react-hook-form'

// Param
import { useParams } from 'react-router-dom'

// Validation
import { joiResolver } from '@hookform/resolvers/joi'

// Validation Schema
import PostValidation from '../../validations/PostValidation'

// Services
import { updatePost } from '../../services'

// Input
import Text from '../input/Text'

// Button
import ButtonSubmit from '../button/ButtonSubmit'
import ButtonDelete from '../button/ButtonDelete'

function UpdatePostDetail(props) {
  const { post } = props
  const { postId } = useParams()
  const { handleSubmit, register, errors } = useForm({
    resolver: joiResolver(PostValidation),
  })

  function callUpdatePost(data) {
    updatePost(postId, data)
  }

  return (
    <form onSubmit={handleSubmit(callUpdatePost)}>
      <Text labelText="Title :" inputName="title" inputId="title" value={post.title} inputRef={register} error={errors.title && errors.title.message} />
      <Text labelText="Author :" inputName="author" inputId="author" value={post.author} inputRef={register} error={errors.author && errors.author.message} />
      <ButtonSubmit>Edit</ButtonSubmit>
      <ButtonDelete id={postId}>Delete</ButtonDelete>
    </form>
  )
}

export default UpdatePostDetail
