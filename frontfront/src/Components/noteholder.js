import React, { Component } from 'react';
import { connect } from 'react-redux'

import { pullnotes } from '../Store/actions';

class NoteHolder extends Component {

    componentDidMount() {
        this.props.pullnotes();
        console.log('notes', this.props.notes)
    }
    
    removeHandler = (event) => {
        
    }

    render () {
        return (
            <div>
                <h3>Here are some notes...</h3>
                    <div className="notesList">
                        <div>
                            {this.props.notes.map((note, id) => {
                                return (
                                    <form key={id} className='noteI'>
                                        <h2>{note.title}</h2>
                                        <div>{note.body}</div>
                                        {/* <button onSubmit={}>Exorcise</button>  */}
                                    </form>
                                )
                            })}
                        </div>
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


export default connect(mapStateToProps, { pullnotes })(NoteHolder);