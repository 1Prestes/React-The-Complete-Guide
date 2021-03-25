import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import instance from '../../../axios'

import './FullPost.css'

const FullPost = props => {
  const [loadedPost, setLoadedPost] = useState(null)
  useEffect(() => {
    console.log(props.match.params.id)
    if (!props.match.params.id) {
      return
    }
    instance
      .get('/posts/' + props.match.params.id)
      .then(response => setLoadedPost(response.data))
  }, [props.match.params.id])

  const deletePostHandler = () => {
    if (!props.match.params.id) {
      return
    }
    instance
      .delete('/posts/' + props.match.params.id)
      .then(response => console.log(response))
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
