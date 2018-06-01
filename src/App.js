import React, { Component } from 'react';
import Input from "./components/Input";
import TaskList from "./components/TaskList";

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            tasks: [],
            done: []
        }
    }

    onSave = (data) => {
        this.setState({
            tasks: [...this.state.tasks, {id: this.createNewId(this.state.tasks), text: data}]
        })
    };

    onDelete = (data, from) => {
        if(from === 'tasks') {
            this.setState({
                tasks: [...this.state.tasks.filter((task) => task.id !== data.id)]
            })
        }
        else if(from === 'done') {
            this.setState({
                done: [...this.state.done.filter((task) => task.id !== data.id)]
            })
        }
    };

    createNewId = (array) => {
        return array.length? array[array.length -1].id + 1 : 0
    };

    onDone = (data, checked) => {
        if(checked) {
            this.setState({
                done: [...this.state.done, {id: this.createNewId(this.state.done), text: data.text}],
                tasks: [...this.state.tasks.filter((task) => data.id !== task.id)]
            })
        }
        else {
            this.setState({
                tasks: [...this.state.tasks, {id: this.createNewId(this.state.tasks), text: data.text}],
                done: [...this.state.done.filter((task) => data.id !== task.id)]
            })
        }
    };


    render() {
    return (
      <div>
            <Input onSave={this.onSave}/>
            <TaskList tasks={this.state.tasks} done={this.state.done} onDone={this.onDone} onDelete={this.onDelete}/>
      </div>
    );
  }
}

export default App;
