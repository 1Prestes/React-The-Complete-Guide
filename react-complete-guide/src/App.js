import React, { Component } from 'react'

import './App.css'
import Person from './Person/Person'

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
    // console.log('Was clicked!')
    // console.log(this.state)
    // Don'T DO THIS: this.state.persons[0].name = 'Gohan'
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: 'Bulma', age: 22 },
        { name: 'Titi', age: 18 }
      ]
    })
  }

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className='App'>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {this.state.persons.map((person, index) => {
          return (
            <Person
              key={person.id}
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
            />
          )
        })}
      </div>
    )
  }
}

export default App
