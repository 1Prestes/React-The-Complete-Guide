import React from 'react'
import { Route, NavLink } from 'react-router-dom'
// import axios from 'axios'

import Posts from './Posts/Posts'
import './Blog.css'
import NewPost from './NewPost/NewPost'

const Blog = () => {
  // let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>

  return (
    <div className='Blog'>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink
                to='/'
                exact
                activeClassName='my-active'
                activeStyle={{
                  color: '#fa923f',
                  textDecoration: 'underline'
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: '/new-post',
                  hash: '#submit',
                  search: '?quick-submit=true'
                }}
              >
                New Post
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      {/* <Route path='/' render={() => <h1>Home</h1>}/> */}
      <Route path='/' exact component={Posts} />
      <Route path='/new-post' component={NewPost} />
    </div>
  )
}

export default Blog
