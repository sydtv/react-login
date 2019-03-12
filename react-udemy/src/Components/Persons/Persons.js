import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside Constructor', props)
    }

    componentWillMount() {
        console.log('[Persons.js] Inside componentWillMount')
    }

    componentDidMount() {
        console.log('[Persons.js] Inside componentDidMount')
    }

    componentWillReceiveProps(nextProps) {
        console.log('[Update Persons.js] Inside componentWillReceiveProps', nextProps)
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('[Update Persons.js] Inside componentWillUpdate', nextProps, nextState)
    }

    componentDidUpdate(nextProps, nextState) {
        console.log('[Update Persons.js] Inside componentDidUpdate', nextProps, nextState)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] ShouldComponentUpdate');
        if (
            nextProps.persons !== this.props.persons ||
            nextProps.changed !== this.props.changed ||
            nextProps.delme !== this.props.delme
        ) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        console.log('[Persons.js] Inside Render');
        return this.props.persons.map((person, index) => {
            return <Person
                name={person.name}
                age={person.age}
                changed={(event) => this.props.changed(event, person.id)}
                delme={() => this.props.clicked(index)}
                key={person.id}/>
        })
    }
}

export default Persons;