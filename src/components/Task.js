import React, { Component } from 'react';

class Task extends Component {

    handleCheckbox = (event) => {
        this.props.onDone(this.props.task, event.target.checked)
    };

    onDelete = () => {
        this.props.onDelete(this.props.task, 'tasks')
    };

    render() {
        return (
            <li>
                <input type="checkbox" onChange={(e) => {this.handleCheckbox(e)}}/>
                {this.props.task.text}
                <button onClick={this.onDelete}>delete</button>
            </li>

        );
    }
}

export default Task;
