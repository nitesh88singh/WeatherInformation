import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EmptyStateScreen from '../Components/EmptyStateScreen';
import WeatherInfoScreen from '../Containers/WeatherInfoScreen';
import * as actions from '../Store/Actions/weatherInfoAction';
import Geolocation from '@react-native-community/geolocation';
import { useDispatch } from 'react-redux';

const Root = props => {
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        Geolocation.getCurrentPosition(position => {
            console.log(position);
            dispatch(actions.storeCurrentPosition(position.coords));
            setIsLoading(false);
        }
        );

    });

    if (isLoading) {
        return <EmptyStateScreen />
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
