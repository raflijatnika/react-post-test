import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Helmet from 'react-helmet'

import { getPost } from '../services'

// Layout and Component
// import Card from '../components/Card'
import LayoutDashboard from '../layouts/LayoutDashboard'

function CreatePost() {
  const [post, setPost] = useState([])

  useEffect(() => {
    getPost().then(
      (response) => setPost(response.data),
    )
  }, [])

  return (
    <LayoutDashboard navTitle="Post List">
      <Helmet>
        <title>Post List | Project Post Test</title>
      </Helmet>
      <div className="row">
        <div className="col-lg-2">
          <Link className="btn btn-success mt-3 ml-3" to="/post-create">
            <i className="fa fa-plus" />
            {' '}
            Add New
          </Link>
        </div>
      </div>
      {
        post.length > 0 && post.map((posts) => (
          <div key={posts.id} className="card m-3">
            <div className="card-body">
              <div className="card-title">{posts.title}</div>
              <Link type="button" className="btn btn-primary" to={`/posts/${posts.id}`}>Detail</Link>
            </div>
          </div>
        ))
      }
      {
        post.length < 1 && ('Data Kosong')
      }
    </LayoutDashboard>
  )
}

export default CreatePost
