import * as actionTypes from './actions'

const initialState = 
    {
        notes: [],
        pullingNotes: false,
        addingNote: false,
        editingNote: false,
        deletingNote: false,
        error: true
    };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PULLING_NOTES:
            return {
                ...state,
                pullingNotes: true
            }
        case actionTypes.NOTES_RECEIVED:
            return {
                ...state,
                notes: action.payload,
                pullingNotes: false
            }
        case actionTypes.ADDING_NOTE:
            return {
                ...state,
                notes: action.payload,
                addingNote: true,
            }
        case actionTypes.NOTE_ADDED:
            return {
                ...state,
                notes: action.payload,
                addingNote: false,
            }
        case actionTypes.REMOVING_NOTE:
            return {
                ...state,
                //remove note from state
            }
        case actionTypes.EDIT_NOTE:
            return{
                ...state,
                //edit note in state
            }
        default:
            return state;
    }
}

export default reducer;