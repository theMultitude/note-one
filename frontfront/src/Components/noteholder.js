import React, { Component } from 'react';
import { connect } from 'react-redux'

import { pullnotes } from '../Store/actions';

class NoteHolder extends Component {

    componentDidMount() {
        this.props.pullnotes();
    }

    render () {
        return (
            <div>
                <h3>Here are some notes...</h3>
                    <div className="NotesList">
                        <div>
                            {this.props.notes.map((note, id) => {
                                return (
                                    <form key={id}>
                                        <h2>{this.notes.title}</h2>
                                        <div>{this.notes.body}</div>
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