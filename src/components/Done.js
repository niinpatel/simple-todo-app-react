import React, { Component } from 'react';

class Task extends Component {

    handleCheckbox = (event) => {
        this.props.onDone(this.props.task, event.target.checked)
    };

    onDelete = () => {
        this.props.onDelete(this.props.task, 'done')
    };

    render() {
        return (
            <li>
                <input type="checkbox" onChange={(e) => {this.handleCheckbox(e)}} checked/>
                <s>{this.props.task.text}</s>
                <button onClick={this.onDelete}>delete</button>
            </li>

        );
    }
}

export default Task;
