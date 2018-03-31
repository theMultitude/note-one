import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addnote } from '../Store/actions'

class NewNote extends Component {
    state = {
        title: '',
        body: '',
    }
    inputChangeHandler = ({target}) => {
        this.setState({
            [target.name]: target.value
        })
    }
    submitHandler = (event) => {
        event.preventDefault();
        this.props.addnote(this.state);
        this.setState({
            title: '',
            body: '',
        })
    }
    render () {
    return (
        <div className='newNote'>
            <form onSubmit={this.submitHandler}>
                <h4>
                    <input value={this.state.title} name='title' placeholder='Title' onChange={this.inputChangeHandler}></input>
                </h4>
                    <div className='newNote_bodyInput'>
                        <input value={this.state.body} name='body'  placeholder='Body' onChange={this.inputChangeHandler}></input>
                    </div>
                <button>Add it!</button>
            </form>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        notes: state.notes,
    }
}

export default connect(mapStateToProps, {addnote}) (NewNote);
