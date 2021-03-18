import React from 'react'

const validationComponent = props => {
  const inputLength = props.text.length
  const message =  inputLength < 5 ? 'Text too short' : 'Text long enough'

  return <p>{message}</p>
}

export default validationComponent
