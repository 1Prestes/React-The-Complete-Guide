import React, { useEffect } from 'react'

import classes from './Cockpit.css'

const Cockpit = props => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect')
    setTimeout(() => {
      alert('save data on cloud')
    }, 1000)
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect!')
    }
  }, [])

  const assignedClasses = []
  let btnClass = ''

  if (props.showPersons) {
    btnClass = classes.Red
  }

  if (props.persons.length <= 2) {
    assignedClasses.push('red')
  }
  if (props.persons.length <= 1) {
    assignedClasses.push('bold')
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>

      <button
        className={btnClass}
        // alt={props.showPersons && props.showPersons}
        onClick={props.clicked}
      >
        Toggle Persons
      </button>
    </div>
  )
}

export default Cockpit
