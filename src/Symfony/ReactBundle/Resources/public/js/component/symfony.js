/*
 import React from 'react';

 export default class App extends React.Component {
 render () {
 return (
 <div style={{textAlign: 'center'}}>
 <h1>Hello World33</h1>
 </div>
 );
 }
 }
 */
/*
 import React, { Component } from 'react';

 class App extends Component {


 render() {
 return (
 <h1>
 Hello world25!
 </h1>
 );
 }

 }

 export default App;
 */
import React, {Component} from 'react';


class SymfonyApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            dataRoute: 'http://localhost:8000/api/tasks'
        }
    }

    componentDidMount() {
//{ mode: 'no-cors'}
        fetch(this.state.dataRoute)
            .then(res => res.json())
            .then(tasks => this.setState((prevState, props) => {
                    console.log('parsed json', tasks);
                    return {tasks: tasks.map(this.mapTasks)};
                }
                )
            );

    }

    mapTasks(task) {
        return {
            id: task.id,
            text: task.text,
            user: task.user
        }
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>React based REST web application with Symfony2 </h2>
                </div>

                <div className="tasks">

                    {this.state.tasks.map((task) =>
                        <div className="task" key={`task-${task.id}}`}>


                    <p>{ task.id }:{ task.user }:{ task.text }</p>


                </div>
                )}

            </div>
            < / div >
        );
    }


}

export default SymfonyApp;
