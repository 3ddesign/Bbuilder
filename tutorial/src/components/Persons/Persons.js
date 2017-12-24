import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    constructor(props) {
        super(props);

    }

    componentWillMount() {
        console.log('[Persons.js] inside componentWillMount()'); // componentWillMount hook
    }

    componentDidMount() {
        console.log('[Persons.js] inside componentDidMount()'); // componentWillMount hook
    }

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js]', nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState ) {
    //     console.log('[UPDATE Persons.js], inside shouldComponentUpdate', nextProps, nextState );
    //     return nextProps.persons !== this.props.persons;
    //     // return true;
    // }

    componentWillUpdate(nextProps, nextState ) {
        console.log('[UPDATE Persons.js], inside componentWillUpdate', nextProps, nextState );
    }
    componentDidUpdate() {
        console.log('[UPDATE Persons.js], inside componentDidUpdate');
    }

    render() {
        return this.props.persons.map((person, index) => {

            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}/>
        });
    }
}

export default Persons;