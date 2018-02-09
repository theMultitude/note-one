import React, { Component } from 'react';
import { connect } from 'react-redux'

import { pullnotes, removenote } from '../Store/actions';

class NoteHolder extends Component {

    componentDidMount() {
        this.props.pullnotes();
        console.log('notes', this.props.notes)
    }
    
    removeHandler = (id) => {
        this.props.removenote(id);
    }

    editHandler = (id) => {
        this.props.editnote(id);
    }

    render () {
        return (
            <div>
                <div className='intro'>Here are some notes...</div>
                    <div className="notesList">
                        <div>
                            {this.props.notes.map((note, id) => {
                                return (
                                    <div key={id} className='noteI'>
                                        <h2>{note.title}</h2>
                                        <div>{note.body}</div>
                                        <button className='deleteButton' onClick={() => this.removeHandler(note.id)}>Exorcise</button>
                                        <button className='editButton' onClick={() => this.editHandler(note.id)}>Edit</button>
                                    </div>
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


export default connect(mapStateToProps, { pullnotes, removenote })(NoteHolder);