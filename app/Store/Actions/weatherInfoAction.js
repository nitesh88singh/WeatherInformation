
export const WEATHER_INFO_LIST = "WEATHER_INFO_LIST";
export const CURRENT_POSITION = "CURRENT_POSITION";

export const storeCurrentPosition = (location) => {
    return {
        type: CURRENT_POSITION,
        location
    }
}

export const addWeatherInfo = (data) => {
    return {
        type: WEATHER_INFO_LIST,
        data
    }
}
export const fetchWaetherInfoList = () => {
    return async (dispatch, getState) => {
        console.log('weather', getState())
        let data = [];
        try {
            let response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${getState().weatherInfo.latLong.latitude}&lon=${getState().weatherInfo.latLong.longitude}&appid=89995ff8dea1a3b5bad95afb5c65d031&units=metric`);
            if (response.status === 200) {
                let weatherData = await response.json();
                console.log("44444", weatherData)
                let previous_date = '';
                weatherData.list.forEach((value, index) => {
                    let dt_txt = value['dt_txt'];
                    let date = new Date(dt_txt);
                    let current_date = date.getDate();
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
        } catch (err) {
            let error = null;
            if (!err) {
                error = 'Server Problem Please Wait ..'
                throw error;
            }
        }

    }
}
