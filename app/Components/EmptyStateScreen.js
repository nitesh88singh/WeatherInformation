import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const EmptyStateScreen = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.textWrapper}>
                <Text style={styles.text}>
                    {props.heading}
                </Text>
            </View>
            <View style={styles.buttonWrapper}>
                <TouchableOpacity
                    onPress={props.onPress}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>
                        RETRY
                    </Text>
                </TouchableOpacity>
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
    },
    button: {
        width: 250,
        height: 50,
        backgroundColor: '#0072bc',
        justifyContent: 'center',
        borderRadius: 25
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default EmptyStateScreen;
