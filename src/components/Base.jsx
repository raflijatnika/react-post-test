import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

// Helper
import NavigationHelper from './helper/NavigationHelper'

// Secure
import RedirectLogin from './secure/RedirectLogin'
import RedirectDashboard from './secure/RedirectDashboard'

// Screen
import Login from '../screens/Login'
import Register from '../screens/Register'
import PostList from '../screens/PostList'
import Dashboard from '../screens/Dashboard'
import CreatePost from '../screens/CreatePost'
import PostDetail from '../screens/PostDetail'

function Base() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <RedirectLogin>
            <Dashboard />
          </RedirectLogin>
        </Route>
        <Route exact path="/login">
          <RedirectDashboard>
            <Login />
          </RedirectDashboard>
        </Route>
        <Route exact path="/register">
          <RedirectDashboard>
            <Register />
          </RedirectDashboard>
        </Route>
        <Route exact path="/posts">
          <RedirectLogin>
            <PostList />
          </RedirectLogin>
        </Route>
        <Route exact path="/posts/:postId">
          <RedirectLogin>
            <PostDetail />
          </RedirectLogin>
        </Route>
        <Route exact path="/post-create">
          <RedirectLogin>
            <CreatePost />
          </RedirectLogin>
        </Route>
      </Switch>
      <NavigationHelper />
    </Router>
  )
}

export default Base
