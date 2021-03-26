import React, { useState } from 'react'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
// import axios from 'axios'

import Posts from './Posts/Posts'
import './Blog.css'
import NewPost from './NewPost/NewPost'
// import AsyncComponent from '../../hoc/asyncComponent'
// const AsyncNewPost = AsyncComponent(() => {
//   return import('./NewPost/NewPost')
// })

const Blog = () => {
  const [isAuth, setIsAuth] = useState(true)
  // let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>

  return (
    <div className='Blog'>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink
                to='/posts'
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
      <Switch>
        <Route path='/posts' component={Posts} />
        {/* {isAuth ? <Route path='/new-post' component={AsyncNewPost} /> : null} */}
        {isAuth ? <Route path='/new-post' component={NewPost} /> : null}
        <Route render={() => <h1>Not Found</h1>} />
        <Redirect from='/' to='/posts' />
      </Switch>
    </div>
  )
}

export default Blog
