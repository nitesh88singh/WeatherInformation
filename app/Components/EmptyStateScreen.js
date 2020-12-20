import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Button } from 'react-native';

const EmptyStateScreen = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.textWrapper}>
                <Text style={styles.text}>
                    Something Went Wrong
               </Text>
            </View>
            <View style={styles.buttonWrapper}>
                <Button
                    title={'Retry'}
                    onPress={props.onPress}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonWrapper: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    text: {
        fontSize: 20
    }
});

export default EmptyStateScreen;
