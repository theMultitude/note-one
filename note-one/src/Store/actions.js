//Build action functionality here
// Add a note, Delete a note, 
import axios from 'axios'


export const ADD_NOTE = 'ADD_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const ERROR = 'ERROR';
export const FETCHING_NOTES = "FETCHING_NOTES"

export const addnote = () => {
    return dispatch => {
        dispatch ({type: ADD_NOTE})
        axios.get()
    }
}

