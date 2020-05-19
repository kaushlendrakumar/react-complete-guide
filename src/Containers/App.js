import React, { Component } from 'react';

import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";

import classes from './App.css';

class App extends Component{
  constructor(props){
    super(props);
    console.log('[App.js] constructor');

  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return false;   
  }

  // componentWillMount(){
  //   console.log('[App.js] componentWillMount');
  // }

  // this call after render()
  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }


  state = {
    persons: [
      {id: "asdad12", name: "Kaushlendra", age: 24},
      {id: "qsqw2s", name: "Ashish", age: 25},
      {id: "casda21", name: "Umesh", age: 24}
    ],
    otherName: "Hello"
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 24},
        {name: "Ashish", age: 25},
        {name: "Umesh", age: 25}
      ],
      showPerson: false
    });
  }

  nameChangehandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => { return p.id === id });

    const person = {...this.state.persons[personIndex]}
    
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  showPersonToggle = () => {
    const dosePersonShow = this.state.showPerson;
    this.setState({showPerson: !dosePersonShow});
  }

  render(){    
    console.log('[App.js] render')
    let persons = null;

    if(this.state.showPerson){
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangehandler} />    
    }

    return (
        <div className={classes.App}>
          <Cockpit 
            appTitle={this.props.appTitle}
            showPerson={this.state.showPerson}
            persons={this.state.persons}
            clicked={this.showPersonToggle} />
            {persons}        
        </div>
    );

    // return React.createElement("div", {className: "App"}, React.createElement("h1"," ", "Hi, I'am React App"));
  }
}

export default App;









// import React, { useState } from 'react';
// import './App.css';

// import Person from "./Person/Person";

// const App = props => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       {name: "Kaushlendra", age: 24},
//       {name: "Ashish", age: 25},
//       {name: "Umesh", age: 24}
//     ],
//   });

//   const [otherState, setOtherState] = useState("I am other state");

//   console.log(personsState, otherState)
  
//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         {name: "Chirag", age: 24},
//         {name: "Ashish", age: 25},
//         {name: "Umesh", age: 25}
//       ]
//     });
//   }

//   return (
//     <div className="App">
//       <h1>Hi, I'm a React App</h1>
//       <p>This is really working!</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//     </div>
//   );

//   // return React.createElement("div", {className: "App"}, React.createElement("h1"," ", "Hi, I'am React App"));
// }

// export default App;










