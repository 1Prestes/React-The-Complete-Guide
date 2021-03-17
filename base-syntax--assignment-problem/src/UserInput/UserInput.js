import React from 'react'

const userInput = props => {
  const inputStyle = {
    display: 'flex',
    margin: '10px auto',
    padding: '10px'
  }
  return (
    <input
      style={inputStyle}
      type='text'
      onChange={props.changed}
      value={props.name}
    />
  )
}

export default userInput
