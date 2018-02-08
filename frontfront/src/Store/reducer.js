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
        case actionTypes.ADD_NOTE:
            return {
                ...state,
                notes: action.payload,
                pullingNotes: false
            }
        case actionTypes.REMOVE_NOTE:
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