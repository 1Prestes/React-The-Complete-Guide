import React, { Component } from 'react'

import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Goku', age: 30 },
      { name: 'Bulma', age: 22 },
      { name: 'Kuririm', age: 34 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = newName => {
    // console.log('Was clicked!')
    console.log(this.state)
    // Don'T DO THIS: this.state.persons[0].name = 'Gohan'
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: 'Bulma', age: 22 },
        { name: 'Titi', age: 18 }
      ]
    })
  }

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: 'Bulma', age: 30 },
        { name: event.target.value, age: 22 },
        { name: 'Titi', age: 18 }
      ]
    })
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
        <button style={style} onClick={() => this.switchNameHandler('Titi')}>
          Switch name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Videl')}
          changed={this.nameChangeHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    )
  }
}

export default App
