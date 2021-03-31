import React, { Component } from 'react'
import { connect } from 'react-redux'

import Person from '../components/Person/Person'
import AddPerson from '../components/AddPerson/AddPerson'
import * as actionTypes from '../store/actions'

class Persons extends Component {
  render () {
    return (
      <div>
        <AddPerson personAdded={this.props.personAdd} />
        {this.props.persons &&
          this.props.persons.map(person => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                clicked={() => this.props.personDelete(person.id)}
              />
            )
          })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    persons: state.persons
  }
}

const mapDispatchToProps = dispatch => {
  return {
    personAdd: () => dispatch({ type: actionTypes.ADD }),
    personDelete: id => dispatch({ type: actionTypes.DELETE, id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons)
