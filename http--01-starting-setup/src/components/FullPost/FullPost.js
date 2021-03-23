import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './FullPost.css'

const FullPost = props => {
  const [loadedPost, setLoadedPost] = useState(null)
  useEffect(() => {
    if (!props.id) {
      return
    }
    axios
      .get('https://jsonplaceholder.typicode.com/posts/' + props.id)
      .then(response => setLoadedPost(response.data))
  }, [props.id])

  let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>
  if (loadedPost) {
    post = (
      <div className='FullPost'>
        <h1>{loadedPost.title}</h1>
        <p>{loadedPost.body}</p>
        <div className='Edit'>
          <button className='Delete'>Delete</button>
        </div>
      </div>
    )
  }
  return post
}

export default FullPost
