import React from 'react'

import { useHistory } from 'react-router-dom'

import { deletePost } from '../../services'

function ButtonSubmit(props) {
  const history = useHistory()
  const { children, id } = props

  function deleteHandler() {
    deletePost(id).then(
      () => history.push('/posts'),
    )
  }

  return (
    <button type="button" className="btn btn-danger ml-2" onClick={deleteHandler}>{children}</button>
  )
}

export default ButtonSubmit
