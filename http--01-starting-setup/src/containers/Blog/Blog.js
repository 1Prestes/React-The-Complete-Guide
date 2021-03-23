import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Post from '../../components/Post/Post'
import FullPost from '../../components/FullPost/FullPost'
import NewPost from '../../components/NewPost/NewPost'
import './Blog.css'

const Blog = () => {
  const [loadedPosts, setLoadedPosts] = useState([])
  const [selectedPostId, setSelectedPostId] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
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
  let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>

  if (!error) {
    posts = (
      <div>
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
        <section>
          <FullPost id={selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    )
  }
  return posts
}

export default Blog
