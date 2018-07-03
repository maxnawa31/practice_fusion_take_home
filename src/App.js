import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import DoctorList from './DoctorList'
import IndividualDoctor from './IndividualDoctor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: [{
        name:"Mark Doe",
        specialty:"Pediatrics",
        location: "San Francisco",
        phone:"415-222-2222",
        id: 1
      },
      {
        name:"Jeff Doe",
        specialty:"Pediatrics",
        location: "San Mateo",
        phone:"650-333-2222",
        id: 2
      },
      {
        name:"Roger Doe",
        specialty:"Pediatrics",
        location: "San Francisco",
        phone:"415-222-2222",
        id: 3
      },
      {
        name:"Elaine Doe",
        specialty:"Pediatrics",
        location: "San Francisco",
        phone:"415-222-1212",
        id: 4
      },{
        name:"Elizabeth Doe",
        specialty:"Trauma",
        location: "San Francisco",
        phone:"415-656-9292",
        id: 5
      },
      {
        name:"Frank Doe",
        specialty:"Trauma",
        location: "San Francisco",
        phone:"415-939-2222",
        id: 6
      },
      {
        name:"Albert Doe",
        specialty:"Trauma",
        location: "San Francisco",
        phone:"415-939-2222",
        id: 7
      },
      {
        name:"Frank Doe",
        specialty:"Orthopedic Surgery",
        location: "San Jose",
        phone:"408-939-2222",
        id: 8
      },
      {
        name:"Bill Doe",
        specialty:"Orthopedic Surgery",
        location: "San Francisco",
        phone:"415-939-2222",
        id: 9
      },
      {
        name:"Joseph Doe",
        specialty:"Orthopedic Surgery",
        location: "San Francisco",
        phone:"415-939-2222",
        id: 10
      },
      {
        name:"Julia Doe",
        specialty:"Orthopedic Surgery",
        location: "San Francisco",
        phone:"415-939-2222",
        id: 11
      },
      {
        name:"Ashely Doe",
        specialty:"Orthopedic Surgery",
        location: "Redwood City",
        phone:"650-939-2222",
        id: 12
      },
      {
        name:"Briana Doe",
        specialty:"Neurology",
        location: "Redwood City",
        phone:"650-939-2222",
        id: 13
      },
      {
        name:"Kevin Doe",
        specialty:"Neurology",
        location: "San Francisco",
        phone:"415-939-2222",
        id: 14
      },
      {
        name:"Francis Doe",
        specialty:"Neurology",
        location: "San Francisco",
        phone:"415-939-2222",
        id: 15
      },
      {
        name:"Marcina Doe",
        specialty:"Neurology",
        location: "San Francisco",
        phone:"415-939-2222",
        id: 16
      },
      {
        name:"Henry Doe",
        specialty:"Neurology",
        location: "San Jose",
        phone:"408-939-2222",
        id: 17
      }
      ]
    }
  }
  render() {
    return (
      <div>
        <Switch>
          <Route
          path = '/doctors/:id'
          component = {props => (
            <IndividualDoctor
            foundDoctor = {this.state.doctors.filter(doctor => {
              return(doctor.id === parseInt(props.match.params.id))
            })}
            allDoctors = {this.state.doctors}/>
          )}/>
          <Route
          path = '/'
          component = {props => (
            <DoctorList
            allDoctors = {this.state.doctors}/>
          )}/>
        </Switch>
      </div>
    );
  }
}

export default App;
