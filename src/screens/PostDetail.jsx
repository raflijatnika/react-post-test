/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import Helmet from 'react-helmet'

// layout
import LayoutDashboard from '../layouts/LayoutDashboard'
import Card from '../components/Card'

// Services
import { getPostById } from '../services'

// Form
import UpdatePostDetail from '../components/form/UpdatePostDetail'

function PostDetail() {
  const { postId } = useParams()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPostById(postId).then(
      (response) => setPosts(response.data),
    )
  }, [])

  return (
    <LayoutDashboard navTitle="Post Detail">
      <Helmet>
        <title>Post Detail | Project Post Test</title>
      </Helmet>

      <nav className="m-3">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/posts">
              <i className="fa fa-arrow-left" />
              {' '}
              Posts List
            </Link>
          </li>
          <li className="breadcrumb-item active">Post Detail</li>
        </ol>
      </nav>
      <Card cardTitle="Post Detail">
        {posts && <UpdatePostDetail post={posts} />}
      </Card>
    </LayoutDashboard>
  )
}

export default PostDetail
