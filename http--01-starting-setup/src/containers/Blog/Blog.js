import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Post from '../../components/Post/Post'
import FullPost from '../../components/FullPost/FullPost'
import NewPost from '../../components/NewPost/NewPost'
import './Blog.css'
import post from '../../components/Post/Post'

const Blog = () => {
  const [posts, setPosts] = useState([])

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

  return (
    <div>
      <section className='Posts'>
        {posts &&
          posts.map(post => (
            <Post key={post.id} title={post.title} author={post.author} />
          ))}
      </section>
      <section>
        <FullPost />
      </section>
      <section>
        <NewPost />
      </section>
    </div>
  )
}

export default Blog
