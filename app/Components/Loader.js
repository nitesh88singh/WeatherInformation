import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const Loader = props => {
    return (
        <View style={styles.screen}>
            <LottieView source={require('../Constants/splash.json')} autoPlay loop />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Loader;
