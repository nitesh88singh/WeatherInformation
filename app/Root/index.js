import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EmptyStateScreen from '../Components/EmptyStateScreen';
import WeatherInfoScreen from '../Containers/WeatherInfoScreen';

const Root = props => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
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
