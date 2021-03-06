import React, { Component } from 'react'

import classes from './App.css'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  constructor (props) {
    super(props)
    console.log('[App.js] constructor')
  }

  state = {
    persons: [
      { id: 'adg1', name: 'Goku', age: 30 },
      { id: 'adg2', name: 'Bulma', age: 22 },
      { id: 'adg3', name: 'Kuririm', age: 34 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps (props, state) {
    console.log('[App.js] getDerivedStateFromProps', props)
    return state
  }

  // componentWillMount () {
  //   console.log('[App.js] componentWillMount')
  // }

  componentDidMount () {
    console.log('[App.js] componentDidMount')
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate')
    return true
  }

  componentDidUpdate () {
    console.log('[App.js] componentDidUpdate')
  }

  componentWillUnmount () {
    console.log('[App.js] componentWillUnmount')
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
    console.log('[App.js] render')
    let persons = null

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      )
    }

    return (
      <div className={classes.App}>
        <button onClick={() => this.setState({ showCockpit: false })}>
          Remove Cockpit
        </button>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    )
  }
}

export default App
