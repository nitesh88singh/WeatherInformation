import {
    WEATHER_INFO_LIST
} from "../Actions/weatherInfoAction";


const initialState = {
    weatherInfoList: [],
}

function weatherInfoReducer(state = initialState, action) {
    switch (action.type) {
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