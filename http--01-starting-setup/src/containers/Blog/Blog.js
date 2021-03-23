import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Post from '../../components/Post/Post'
import FullPost from '../../components/FullPost/FullPost'
import NewPost from '../../components/NewPost/NewPost'
import './Blog.css'
import post from '../../components/Post/Post'

const Blog = () => {
  const [posts, setPosts] = useState([])
  const [selectedPostId, setSelectedPostId] = useState(null)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
      const posts = response.data.slice(0, 4)
      const updatedPosts = posts.map(post => ({
        ...post,
        author: 'Max'
      }))

      return setPosts(updatedPosts)
    })
  }, [])

  const postSelectedHandler = id => {
    setSelectedPostId(id)
  }

  return (
    <div>
      <section className='Posts'>
        {posts &&
          posts.map(post => (
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

export default Blog
