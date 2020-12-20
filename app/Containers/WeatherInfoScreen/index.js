import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Alert } from 'react-native';
import WeatherInfoRow from '../../Components/WeatherInfoRow';
import * as action from '../../Store/Actions/weatherInfoAction';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from '../../Utilities/validation';
import EmptyStateScreen from '../../Components/EmptyStateScreen';
import Loader from '../../Components/Loader';
import * as TextConstant from '../../Constants/TextConstants';

const WeekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const { height, width } = Dimensions.get('window');

const WeatherInfoScreen = props => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState('');
    const latLang = useSelector(state => state.weatherInfo.latLang);
    const weatherInfo = useSelector(state => state.weatherInfo.weatherInfoList);

    const loadWeatherInfo = async () => {
        try {
            await dispatch(action.fetchWaetherInfoList());
            setIsError('');
            setIsLoading(false);
        } catch (err) {
            setIsError(TextConstant.error);
            setIsLoading(false);

        }
    }

    useEffect(() => {
        if (isEmpty(latLang)) {
            loadWeatherInfo()
        }


    }, [latLang]);

    if (isLoading) {
        return <Loader />
    }
    if (isError === TextConstant.error && isLoading === false) {
        return <EmptyStateScreen />
    }
    if (weatherInfo.length !== 0)
        return (
            <View style={styles.screen}>
                <View style={styles.overViewWrapper}>
                    <WeatherInfoRow
                        cardWrapper={styles.overView}
                        dayName={weatherInfo[0] && WeekDays[new Date(weatherInfo[0].dt_txt).getDay()]}
                        temperature={weatherInfo[0] && weatherInfo[0].main.temp}
                        dayText={{ fontSize: 25, fontWeight: 'normal' }}
                        tempText={{ fontSize: 20 }}
                        dayWrapper={{ justifyContent: 'flex-end' }}
                        tempWrapper={{ justifyContent: 'flex-start' }}
                    />
                </View>
                <View style={styles.weatherInfoListWrapper}>
                    <ScrollView>
                        {weatherInfo.map((info, k) => {
                            return <WeatherInfoRow
                                dayName={WeekDays[new Date(info.dt_txt).getDay()]}
                                temperature={info.main.temp}
                                key={info.dt}
                                cardWrapper={{ height: 70 }}
                            />
                        })}
                    </ScrollView>
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
    overView: {
        height: height / 3,
        backgroundColor: "#fff",
        flexDirection: 'column'
    },
    weatherInfoListWrapper: {
        flex: 1,
        width: width
    }
});

export default WeatherInfoScreen;
