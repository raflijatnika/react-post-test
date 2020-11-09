import React from 'react'

import { Link } from 'react-router-dom'

// Layout and Component
import Card from '../components/Card'
import LayoutDashboard from '../layouts/LayoutDashboard'

// Form
import CreatePostForm from '../components/form/CreatePostForm'

function CreatePost() {
  return (
    <LayoutDashboard navTitle="Create Post">
      <nav className="m-3">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/posts">
              <i className="fa fa-arrow-left" />
              {' '}
              Posts List
            </Link>
          </li>
          <li className="breadcrumb-item active">Create Post</li>
        </ol>
      </nav>
      <Card cardTitle="Create Post">
        <CreatePostForm />
      </Card>
    </LayoutDashboard>
  )
}

export default CreatePost
