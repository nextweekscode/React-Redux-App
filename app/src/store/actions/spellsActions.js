import axios from "axios"

export const FETCH_SPELLS = "FETCH_SPELLS"
export const FETCH_SPELLS_SUCCESS = "FETCH_SPELLS_SUCCESS"
export const FETCH_SPELLS_ERROR = "FETCH_SPELLS_ERROR"

export const fetchSpells = () => {
    return (dispatch) => {
        dispatch({type:FETCH_SPELLS})
        axios
            .get("https://www.dnd5eapi.co/api/spells/")
            .then(res => {
                
                dispatch({ type: FETCH_SPELLS_SUCCESS, payload: res.data.results})
            })
            .catch(err => {
                dispatch({
                    type: FETCH_SPELLS_ERROR, 
                    payload: { message: "Hold on, looking them up for you"}
                })
            })

    }
}