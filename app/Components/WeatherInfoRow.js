import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WeatherInfoRow = props => {
    return (
        <View style={{ ...styles.screen, ...props.cardWrapper }}>
            <View style={{ ...styles.dayWrapper, ...props.dayWrapper }}>
                <Text style={{ ...styles.dayText, ...props.dayText }} >
                    {props.dayName}
                </Text>
            </View>
            <View style={{ ...styles.tempWrapper, ...props.tempWrapper }}>
                <Text style={{ ...styles.tempText, ...props.tempText }}>
                    {props.temperature}°
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'row',
        elevation: 1,
        margin: 1,
        backgroundColor: '#f4f4f4'

    },
    dayWrapper: {
        flex: 1,
    },
    dayText: {
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    tempWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tempText: {
        fontSize: 17,
    }
});

export default WeatherInfoRow;
