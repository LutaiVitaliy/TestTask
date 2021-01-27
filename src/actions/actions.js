import {getWeather} from '../sevices/weather-service';
import {actions} from '../constants';


export const getWeatherAction = city => {
    const success = response => {

        return {
            type: actions.FETCH_WEATHER_SUCCESS,
            city: response
        };
    };

    const failure = error => {

        return {
            type: actions.FETCH_WEATHER_FAILURE,
            error
        };
    };

    return dispatch => {

        getWeather(city)
            .then(
                response => {
                    dispatch(success(response));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

};
