import React, { Component } from 'react';
import Task from "./Task";
import Done from "./Done"

class TaskList extends Component {

    render() {
        return (
            <div>
                <ul>
                    {this.props.tasks.map(task => <Task key={task.id} task={task} onDelete={this.props.onDelete} onDone={this.props.onDone}/>)}
                </ul>

                <ul>
                    {this.props.done.map(task => <Done key={task.id} task={task} onDelete={this.props.onDelete} onDone={this.props.onDone}/>)}
                </ul>
            </div>

        );
    }
}

export default TaskList;
