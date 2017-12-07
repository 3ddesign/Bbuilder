import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends PureComponent { //stateful component, better use functional components?
    constructor(props) {
        super(props);
        console.log('[App.js] inside construcor', props ); // constructor hook
    }

    componentWillMount() {
        console.log('[App.js] inside componentWillMount()'); // componentWillMount hook
    }

    componentDidMount() {
        console.log('[App.js] inside componentDidMount()'); // componentWillMount hook
    }
    //
    // shouldComponentUpdate(nextProps, nextState ) {
    //     console.log('[UPDATE Persons.js], inside shouldComponentUpdate', nextProps, nextState );
    //     return true;
    // }


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

        this.setState({persons: persons});
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    render() {
        console.log('[App.js] inside render()'); // render hook
        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}/>;
        }

        return (
            <div className={classes.App}>
                <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
                <Cockpit
                    appTitle={this.props.title}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler}/>
                {persons}
            </div>
        );
    }
}

export default App;
