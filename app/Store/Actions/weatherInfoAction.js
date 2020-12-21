import moment from 'moment';
import { API_KEY, GET_WEATHER_API } from "../../Constants/ApiConstants";

export const WEATHER_INFO_LIST = "WEATHER_INFO_LIST";

export const addWeatherInfo = (data) => {
    return {
        type: WEATHER_INFO_LIST,
        data
    }
}
export const fetchWaetherInfoList = (latLong) => {
    return async (dispatch, getState) => {
        let data = [];
        let lat = latLong.latitude;
        let long = latLong.longitude;
        try {
            let response = await fetch(
                `${GET_WEATHER_API}?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
            );
            console.log("1111", response, latLong)
            if (response.status === 200) {
                let weatherData = await response.json();
                console.log("44444", weatherData)
                let previous_date = '';
                weatherData.list.forEach((value, index) => {
                    let dt_txt = value['dt_txt'];
                    let date = moment(dt_txt, "YYYY-MM-DD HH:mm:ss").format('dddd');
                    let current_date = date;
                    if (current_date != previous_date) {
                        data.push(value);
                    }
                    previous_date = current_date;
                })
                dispatch({
                    type: WEATHER_INFO_LIST,
                    data
                })
                return await response.json();
            }
            else {
                throw 'Server Problem Please Wait ..';
            }
        } catch (err) {
            let error = null;
            if (!err) {
                error = 'Server Problem Please Wait ..'
                throw error;
            }
        }

    }
}
