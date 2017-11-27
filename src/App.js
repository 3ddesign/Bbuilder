import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {id: '1', name: 'Dmitry', age: 30},
            {id: '2', name: 'Dmitry1', age: 31},
            {id: '3', name: 'Dmitry2', age: 33},
        ],
        otherState: 'some other state',
        showPersons: false
    }

    deletePersonHandler = (personIndex) => {
        console.log('test');
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
    };
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({ persons: persons});
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    render() {
        const myStyle = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangedHandler(event, person.id)}/>
                    })}

                    {/*<Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>*/}
                    {/*<Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>*/}
                    {/*<Person name={this.state.persons[1].name} age={this.state.persons[1].age}*/}
                    {/*click={this.switchNameHandler.bind(this, 'Dmitry')}*/}
                    {/*changed={this.nameChangedHandler}>test</Person>*/}
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Hi from react App!</h1>
                <button style={myStyle} onClick={this.togglePersonsHandler}>Toggle Name</button>
                {persons}
            </div>
        );
    }
}

export default App;
