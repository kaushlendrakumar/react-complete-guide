import React, { Component } from 'react';

import classes from './Person.css';

class Person extends Component {
    render(){
        console.log('[Person.js] rendering...');
        return(
            <div className={classes.Person}>
                <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        )
    }
    
}

export default Person;

// start radium
// const Person = (props) => {
//     const style = {
//         '@media (min-width: 500px)': {
//             witdh: '450px'
//         }
//     }
//     return(
//         <div className="Person" style={style}>
//             <p onClick={props.click}>I am {props.name} and I am {props.age} years old!</p>
//             <p>{props.children}</p>
//             <input type="text" onChange={props.changed} value={props.name} />
//         </div>
//     )
// }

// export default Radium(Person);
// end radium