import React, { useEffect, useState } from 'react'

import instance from '../../../axios'

import Post from '../../../components/Post/Post'

import './Posts.css'

const Posts = (props) => {
  const [loadedPosts, setLoadedPosts] = useState([])
  const [selectedPostId, setSelectedPostId] = useState(null)
  const [error, setError] = useState(false)
  useEffect(() => {
    console.log(props)
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
    setSelectedPostId(id)
  }
  
  return (
    <section className='Posts'>
      {loadedPosts &&
        loadedPosts.map(post => (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => postSelectedHandler(post.id)}
          />
        ))}
    </section>
  )
}

export default Posts
