import axios from 'axios'


export const ADDING_NOTE = 'ADDING_NOTE'
export const NOTE_ADDED = 'NOTE_ADDED';
export const REMOVING_NOTE = 'REMOVING_NOTE'
export const NOTE_REMOVED = 'NOTE_REMOVED';
export const EDIT_NOTE = 'EDIT_NOTE';
export const ERROR = 'ERROR';
export const PULLING_NOTES = "PULLING_NOTES";
export const NOTES_RECEIVED = "NOTES_RECEIVED";



export const pullnotes = () => {
    return dispatch => {
        dispatch ({type: PULLING_NOTES})
        axios.get("http://localhost:8080/notes")
        .then(({data}) => {
            dispatch ({type: NOTES_RECEIVED, payload: data})
        })
        .catch((error) => {
            dispatch ({type: ERROR, payload: error})
        })
    }
}

export const addnote = (note) => {
    return dispatch => {
        dispatch ({type: ADDING_NOTE})
        axios.post("http://localhost:8080/notes", note)
        .then(({data}) => {
            dispatch ({type:NOTE_ADDED, payload: data})
        })
        .catch((error) => {
            dispatch ({type: ERROR, payload: error})
        })
    }
}

export const edit = (note) => {
    return dispatch => {
        dispatch ({type: EDIT_NOTE})
        axios.get("http://localhost:8080/notes")
        .then(({data}) => {
            dispatch ({type: NOTES_RECEIVED, payload: data})
        })
        .catch((error) => {
            dispatch ({type: ERROR, payload: error})
        })
    }
}



export const removenote = (note) => {
    return dispatch => {
        dispatch ({type: REMOVING_NOTE})
        axios.delete("http:localhost:8080/notes", note)
        .then(({data}) => {
            dispatch ({type:NOTE_REMOVED, payload: data})
        })
        .catch((error) => {
            dispatch ({type: ERROR, payload: error})
        })
    }
}
