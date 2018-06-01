import React, { Component } from 'react';

class Input extends Component {

    constructor(props){
        super(props);

        this.state = {
            input: ''
        }
    }

    onSave = (e) => {
        if(e.key === 'Enter' && this.state.input.length) {
            this.props.onSave(this.state.input);
            this.setState({
                input:''
            })
        }
    };

    onInputChange = (e) => {
        this.setState({
            input: e.target.value
        })
    };


    render() {
        return (
            <div>
                <input type="text" name="task" value={this.state.input} placeholder="Add a new task "
                       onChange={(e) => this.onInputChange(e)}
                       onKeyPress={(e) => this.onSave(e)}/>
            </div>
        );
    }
}

export default Input;
