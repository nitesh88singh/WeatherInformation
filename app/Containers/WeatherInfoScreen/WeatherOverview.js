import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import WeatherInfoRow from '../../Components/WeatherInfoRow';
import moment from 'moment';
const { height, width } = Dimensions.get('window');


const WeatherOverView = props => {
    let weatherInfo = props.weatherInfo;
    return (
        <WeatherInfoRow
            cardWrapper={styles.overView}
            dayName={weatherInfo[0] && moment(weatherInfo[0].dt_txt, "YYYY-MM-DD HH:mm:ss").format('dddd')}
            temperature={weatherInfo[0] && weatherInfo[0].main.temp}
            dayText={styles.dayStyle}
            tempText={styles.tempStyle}
            dayWrapper={styles.dayWrapper}
            tempWrapper={styles.tempWrapper}
        />
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    overView: {
        height: height / 3,
        backgroundColor: "#fff",
        flexDirection: 'column'
    },
    dayStyle: { fontSize: 25, fontWeight: 'normal', },
    tempStyle: { fontSize: 20 },
    dayWrapper: { justifyContent: 'flex-end', },
    tempWrapper: { justifyContent: 'flex-start' }
});

export default WeatherOverView;
