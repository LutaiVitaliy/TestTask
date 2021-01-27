import {actions} from '../constants';


const weatherReducer = (state = {}, action) => {
    switch(action.type) {
        case actions.FETCH_WEATHER_SUCCESS: 
            return {
                ...state,
                city: action.city,
                error: null
            };
        case actions.FETCH_WEATHER_FAILURE:
            return {
                ...state,
                city: null,
                error: action.error
            }
        default:
            return state
    }
};

export default weatherReducer;