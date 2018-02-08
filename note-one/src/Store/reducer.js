import * as actionTypes from './actions'

const initialState = {
    notes: {},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_NOTE:
            return {
                ...state,
                //add new note to state
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