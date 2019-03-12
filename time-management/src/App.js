import React, {Component} from 'react';
import './App.scss';

import Navbar from './Components/Layout/Navbar'
import BigTask from './Components/Tasks/BigTask/BigTask'


class App extends Component {
    state = {
        bigTasks: [
            {name: 'Aufgabe', id: 0},
            {
                smallTasks: [
                    {name: 'Unteraufgabe', id: 0}
                ]
            }
        ]
    };

    render() {
        const bigChangeHandler = () => {
            console.log('bigChangeHandler');
        };
        const deleteBigTask = () => {
            console.log('deleteBigTask');
        };
        const bigPlus = () => {
            console.log('bigPlus');
        };
        const deleteSmallTask = () => {
            console.log('deleteSmallTask');
        };
        const smallChangeHandler = (event, id) => {
            // const smallTaskIndex = this.state.smallTasks.findIndex(p => {
            //     return p.id === id;
            // });
            //
            // const smallTask = {
            //     ...this.state.smallTasks[smallTaskIndex]
            // };
            //
            // smallTask.name = event.target.value;
            // const smallTasks = [...this.state.smallTasks];
            // smallTasks[smallTaskIndex] = smallTask;
            //
            // this.setState({
            //     smallTasks: smallTasks
            // });
        };
        const smallPlus = () => {
            console.log('smallPlus');
        };
        return (
            <div className="App">
                <Navbar/>
                <div className="container--big">
                    <BigTask
                        bigTaskName={}
                        deleteBigTask={deleteBigTask}
                        bigChangeHandler={bigChangeHandler}
                        bigPlus={bigPlus}
                        smallTaskName={}
                        deleteSmallTask={deleteSmallTask}
                        smallChangeHandler={smallChangeHandler}
                        smallPlus={smallPlus}
                    />
                </div>
            </div>
        );
    }
}

export default App;
