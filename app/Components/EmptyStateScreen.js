import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const EmptyStateScreen = props => {
    return (
        <View style={styles.screen}>
            <ActivityIndicator
                animating={true} color={'#01f'}
                size={'large'} />
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

export default EmptyStateScreen;
