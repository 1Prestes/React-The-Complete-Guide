import React from 'react'
import { Route, Link } from 'react-router-dom'
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
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: '/new-post',
                  hash: '#submit',
                  search: '?quick-submit=true'
                }}
              >
                New Post
              </Link>
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
