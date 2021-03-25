import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'

import instance from '../../../axios'

import Post from '../../../components/Post/Post'
import FullPost from '../FullPost/FullPost'

import './Posts.css'

const Posts = props => {
  const [loadedPosts, setLoadedPosts] = useState([])
  const [selectedPostId, setSelectedPostId] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    instance
      .get('/posts')
      .then(response => {
        const posts = response.data.slice(0, 4)
        const updatedPosts = posts.map(post => ({
          ...post,
          author: 'Max'
        }))

        return setLoadedPosts(updatedPosts)
      })
      .catch(error => setError(true))
  }, [])

  const postSelectedHandler = id => {
    props.history.push({ pathname: '/posts/' + id })
  }

  return (
    <div>
      <section className='Posts'>
        {loadedPosts &&
          loadedPosts.map(post => (
            // <Link to={'/posts' + post.id} key={post.id}>
            <Post
              key={post.id}
              to={'/' + post.id}
              title={post.title}
              author={post.author}
              clicked={() => postSelectedHandler(post.id)}
            />
            // </Link>
          ))}
      </section>
      <Route path={props.match.url + '/:id'} exact component={FullPost} />
    </div>
  )
}

export default Posts
