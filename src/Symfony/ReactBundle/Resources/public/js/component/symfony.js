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
            //dataRoute: 'https://api.myjson.com/bins/19mcsl'
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
     
                <table class="table-dark" style={{width: "100%"}}>
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">User</th>
                    <th scope="col">Message</th>
                    </tr>
                </thead>
                <tbody>

                {this.state.tasks.map((task) =>

                    <tr>
                    <th scope="row" key={`task-${task.id}}`}>{ task.id }</th>
                    <td>{ task.user }</td>
                    <td>{ task.text }</td>
                    </tr>
   
                )}
                </tbody>
                </table>
 
        );
    }

}

export default SymfonyApp;
