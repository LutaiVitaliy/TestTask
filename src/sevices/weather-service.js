import axios from 'axios';
import {apiKey} from '../constants';

export const getWeather = async city => {
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    const response = await axios.get(url);

    return response.data;
};
