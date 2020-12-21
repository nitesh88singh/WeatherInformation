import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import WeatherInfoRow from '../../Components/WeatherInfoRow';
import moment from 'moment';



const WeatherList = props => {
    return (
        <ScrollView>
            {props.weatherInfo && props.weatherInfo.map((info, index) => {

                console.log("-----------------------------",)
                return <WeatherInfoRow
                    dayName={moment(info.dt_txt, "YYYY-MM-DD HH:mm:ss").format('dddd')}
                    temperature={info.main.temp}
                    key={info.dt}
                    cardWrapper={styles.cardWrapper}
                />
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    cardWrapper: {
        height: 70,
        alignItems: 'center',
    }
});

export default WeatherList;
