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
                removingNote: true,
            }
        case actionTypes.NOTE_REMOVED:
            return {
                ...state,
                notes: action.payload,
                removingNote: false,
            }
        case actionTypes.EDIT_NOTE:
            return{
                ...state,
                notes: action.payload,
            }
        default:
            return state;
    }
}

export default reducer;