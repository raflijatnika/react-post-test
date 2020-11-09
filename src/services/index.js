/* eslint-disable import/prefer-default-export */
import Axios from 'axios'
import User from './user'

const port = 3000
const domain = '127.0.0.1'

const config = {
  baseURL: `http://${domain}:${port}/v1`,
}

const api = Axios.create(config)

function registerUser(params) {
  return api.post('/register', params)
}

function loginUser(params) {
  return api.post('/login', params).then(
    (response) => {
      const { data } = response
      User.logIn(data.accessToken)
      return true
    },
    () => (false),
  )
}

function createPost(params) {
  return api.post('/posts', params, {
    headers: {
      Authorization: `Bearer ${User.getToken()}`,
    },
  })
}

function getPost() {
  return api.get('/posts', {
    headers: {
      Authorization: `Bearer ${User.getToken()}`,
    },
  })
}

function getPostById(postId) {
  return api.get(`/posts/${postId}`, {
    headers: {
      Authorization: `Bearer ${User.getToken()}`,
    },
  })
}

function updatePost(postId, params) {
  return api.put(`/posts/${postId}`, params, {
    headers: {
      Authorization: `Bearer ${User.getToken()}`,
    },
  })
}

function deletePost(postId) {
  return api.delete(`/posts/${postId}`, {
    headers: {
      Authorization: `Bearer ${User.getToken()}`,
    },
  })
}

export {
  registerUser,
  loginUser,
  createPost,
  getPost,
  getPostById,
  updatePost,
  deletePost,
}
