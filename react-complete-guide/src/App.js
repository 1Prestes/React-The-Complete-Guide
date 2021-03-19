import React, { Component } from 'react'
// import styled from 'styled-components'

import classes from './App.css'
import Person from './Person/Person'

// const StyledButton = styled.button`
//   background-color: ${props => (props.alt ? 'red' : 'green')};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;

//   &:hover {
//     background-color: ${props => (props.alt ? 'salmon' : 'lightgreen')};
//     color: black;
//   }
// `

class App extends Component {
  state = {
    persons: [
      { id: 'adg1', name: 'Goku', age: 30 },
      { id: 'adg2', name: 'Bulma', age: 22 },
      { id: 'adg3', name: 'Kuririm', age: 34 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: 'Bulma', age: 22 },
        { name: 'Titi', age: 18 }
      ]
    })
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id)

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({ persons })
  }

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  render () {
    let persons = null
    let btnClass = ''

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={event => this.nameChangeHandler(event, person.id)}
              />
            )
          })}
        </div>
      )
      btnClass = classes.Red
    }

    const assignedClasses = []

    if (this.state.persons.length <= 2) {
      assignedClasses.push('red')
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push('bold')
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>

        <button
          className={btnClass}
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </button>
        {persons}
      </div>
    )
  }
}

export default App
