import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import instance from '../../axios'

import './FullPost.css'

const FullPost = props => {
  const [loadedPost, setLoadedPost] = useState(null)
  useEffect(() => {
    if (!props.id) {
      return
    }
    instance
      .get('/posts/' + props.id)
      .then(response => setLoadedPost(response.data))
  }, [props.id])

  const deletePostHandler = () => {
    if (!props.id) {
      return
    }
    instance.delete('/posts/' + props.id).then(response => console.log(response))
  }

  let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>
  if (loadedPost) {
    post = (
      <div className='FullPost'>
        <h1>{loadedPost.title}</h1>
        <p>{loadedPost.body}</p>
        <div className='Edit'>
          <button className='Delete' onClick={deletePostHandler}>
            Delete
          </button>
        </div>
      </div>
    )
  }
  return post
}

export default FullPost
