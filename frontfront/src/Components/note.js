import React, { Component } from 'react';

class NewNote extends Component {
    state = {
        title: '',
        body: '',
    }
    inputChangeHandler = ({target}) => {
        this.setState({
            [target.title]: target.value // figure out what to set this to
        })
    }
    submitHandler = (event) => {
        event.preventDefault()
        this.props.addnote(this.state)
        this.setState({
            title: '',
            body: '',
        })
    }
    render () {
    return (
        <div>
            <h4>
                <input value={this.state.title} name='title' placeholder='Title' onChange={this.inputChangeHandler}></input>
            </h4>
                <div>
                <input value={this.state.body} name='body' placeholder='Body' onChange={this.inputChangeHandler}></input>
                </div>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        notes: state.notes,
    }
}

export default NewNote;
