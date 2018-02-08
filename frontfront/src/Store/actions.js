import axios from 'axios'


export const ADD_NOTE = 'ADD_NOTE';
export const NOTE_ADDED = 'NOTE_ADDED';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const ERROR = 'ERROR';
export const PULLING_NOTES = "PULLING_NOTES";
export const NOTES_RECEIVED = "NOTES_RECEIVED";

export const pullnotes = () => {
    return dispatch => {
        dispatch ({type: PULLING_NOTES})
        axios.get("http:localhost:8080/notes")
        .then(({data}) => {
            dispatch ({NOTES_RECEIVED, payload: data})
        })
        .catch((error) => {
            dispatch ({type: ERROR, payload: error})
        })
    }
}

export const search = () => {
    return dispatch => {
        dispatch ({type: PULLING_NOTES})
        axios.get("http:localhost:8080/notes")
        .then(({data}) => {
            dispatch ({NOTES_RECEIVED, payload: data})
        })
        .catch((error) => {
            dispatch ({type: ERROR, payload: error})
        })
    }
}

export const addnote = (note) => {
    return dispatch => {
        dispatch ({type: ADD_NOTE})
        axios.post("http:localhost:8080/notes", note)
        .then(({data}) => {
            dispatch ({type:NOTE_ADDED, payload: data})
        })
        .catch((error) => {
            dispatch ({type: ERROR, payload: error})
        })
    }
}

