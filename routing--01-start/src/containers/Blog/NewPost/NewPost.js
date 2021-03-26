import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

import './NewPost.css'

const NewPost = props => {
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    author: 'Max'
  })
  const [submitted, setSubmitted] = useState(false)

  const postDataHandler = () => {
    const post = {
      title: newPost.title,
      body: newPost.content,
      author: newPost.author
    }

    axios
      .post('https://jsonplaceholder.typicode.com/posts', post)
      .then(response => {
        console.log(response)
        setSubmitted(true)
      })
  }

  useEffect(() => {
    console.log(props)
  }, [])

  return (
    <div className='NewPost'>
      {submitted && <Redirect to='/posts' />}
      <h1>Add a Post</h1>
      <label>Title</label>
      <input
        type='text'
        value={newPost.title}
        onChange={event =>
          setNewPost({ ...newPost, title: event.target.value })
        }
      />
      <label>Content</label>
      <textarea
        rows='4'
        value={newPost.content}
        onChange={event =>
          setNewPost({ ...newPost, content: event.target.value })
        }
      />
      <label>Author</label>
      <select
        value={newPost.author}
        onChange={event =>
          setNewPost({ ...newPost, author: event.target.value })
        }
      >
        <option value='Max'>Max</option>
        <option value='Manu'>Manu</option>
      </select>
      <button onClick={postDataHandler}>Add Post</button>
    </div>
  )
}

export default NewPost
