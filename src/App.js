import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'Dmitry', age: 30 },
            { name: 'Dmitry1', age: 31 },
        ],
        otherState: 'some other state'
    }

    switchNameHandler = (newName) => {
        // console.log('test');
        this.setState({persons: [
            { name: newName, age: 32 },
            { name: 'Scherbakov', age: 33 }
        ]
        })
    }

    nameChangedHandler = (event) => {
        this.setState({persons: [
            { name: event.target.value, age: 32 },
            { name: 'Scherbakov', age: 33 }
        ]
        })
    }

    render() {
        return (
            <div className="App">
                <h1>Hi from react App!</h1>
                <button onClick={() => this.switchNameHandler('Dmitry2')}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'Dmitry')} changed={this.nameChangedHandler}
                >test</Person>
            </div>
        );
    }
}

export default App;
