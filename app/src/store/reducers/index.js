import { FETCH_SPELLS,
FETCH_SPELLS_SUCCESS,
FETCH_SPELLS_ERROR} from '../actions'



const intitialState = {
    spells: [{}],
    loadingSpells: true,
    errorMessage: ""
}

export default (state = intitialState, action) => {
    switch(action.type) {
        case FETCH_SPELLS:
            return {
                ...state,
                loadingSpells: true

            }
        case FETCH_SPELLS_SUCCESS:
            return {
                ...state,
                spells: action.payload,
                loadingSpells: false
                
            }
            case FETCH_SPELLS_ERROR:
                return {
                    ...state,
                    loadingSpells: false,
                    errorMessage: action.payload.message

            }
        default:
            return state
    }
}