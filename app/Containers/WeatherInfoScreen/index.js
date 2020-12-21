import React from 'react';
import { View, StyleSheet, Dimensions, ScrollView, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import WeatherOverView from './WeatherOverview';
import WeatherList from './WeatherList';


const { height, width } = Dimensions.get('window');

const WeatherInfoScreen = props => {
    const weatherInfo = useSelector(state => state.weatherInfo.weatherInfoList);


    return (
        <View style={styles.screen}>
            <View style={styles.overViewWrapper}>
                <WeatherOverView
                    weatherInfo={weatherInfo}
                />
            </View>
            <View style={styles.weatherInfoListWrapper}>
                <WeatherList
                    weatherInfo={weatherInfo}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        height: height,
        width: width,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",
        marginBottom: 20
    },
    overViewWrapper: {
        flex: 1,
        width: width
    },

    weatherInfoListWrapper: {
        flex: 1,
        width: width
    }
});

export default WeatherInfoScreen;
