import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet } from 'react-native';
import EmptyStateScreen from '../Components/EmptyStateScreen';
import WeatherInfoScreen from '../Containers/WeatherInfoScreen';
import * as actions from '../Store/Actions/weatherInfoAction';
import Geolocation from '@react-native-community/geolocation';
import { useDispatch } from 'react-redux';
import Loader from '../Components/Loader';
import { isEmpty } from '../Utilities/validation';
import { ERROR } from '../Constants/TextConstants';

const Root = props => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState('');
    const [position, setPosition] = useState({});
    const dispatch = useDispatch();
    const { fetchWaetherInfoList } = actions;

    const fetchLatLong = () => {
        Geolocation.getCurrentPosition(position => {
            console.log("jyfyfg666", position);
            setPosition(position.coords);
        },
            error => Alert.alert('Error', JSON.stringify(error), [
                { text: "OK", onPress: () => loadWeatherInfo() }
            ],
                { cancelable: false }
            ),
        );
    }

    useEffect(() => {
        fetchLatLong()

    }, [setPosition]);

    const loadWeatherInfo = async () => {
        setIsLoading(true);
        try {
            await dispatch(fetchWaetherInfoList(position));
            setIsError('');
            setIsLoading(false);
        } catch (err) {
            console.log('errrrr22', err)
            setIsError(ERROR);
            setIsLoading(false);

        }
    }

    useEffect(() => {
        if (!isEmpty(position)) {
            loadWeatherInfo()
        }
    }, [position, setPosition]);

    if (isLoading) {
        return <Loader />
    }
    if (isError === ERROR && isLoading === false) {
        return <EmptyStateScreen
            heading={ERROR}
            onPress={() => loadWeatherInfo()} />
    }
    return (
        <WeatherInfoScreen />
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Root;
