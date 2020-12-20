import {
    CURRENT_POSITION,
    WEATHER_INFO_LIST
} from "../Actions/weatherInfoAction";


const initialState = {
    weatherInfoList: [],
    latLong: {},
}

function weatherInfoReducer(state = initialState, action) {
    switch (action.type) {
        case CURRENT_POSITION:
            return {
                ...state,
                latLong: action.location
            };
        case WEATHER_INFO_LIST:
            return {
                ...state,
                weatherInfoList: action.data
            };
        default:
            return state
    }
}
export default weatherInfoReducer;