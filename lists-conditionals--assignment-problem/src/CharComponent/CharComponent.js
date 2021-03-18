import React from 'react'

const charComponent = props => {
  const styles = {
    display: 'inline-block',
    padding: '16px',
    'text-align': 'center',
    margin: '16px',
    border: '1px solid black'
  }
  
  const chars = props.text.split('')

  return (
    <ul style={styles}>
      {chars &&
        chars.map((char, index) => (
          <li key={index} onClick={event => props.click(event, index)}>
            {char}
          </li>
        ))}
    </ul>
  )
}

export default charComponent
