import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'Dmitry', age: 28 },
            { name: 'Dmitry2', age: 31 },
        ],
        otherState: 'some other state'
    }

    switchNameHandler = () => {
        // console.log('test');
        this.setState({persons: [
            { name: 'Scherbakov', age: 28 },
            { name: 'Dmitry2', age: 31 }
        ]
        })
    }

    render() {
        return (
            <div className="App">
                <h1>Hi from react App!</h1>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>test</Person>
            </div>
        );
    }
}

export default App;
