import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

import LottieView from 'lottie-react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import loadAnimation from '../assets/load.json';


export function Load() {
    return (
        <View style={styles.container}>

            <LottieView
                source={loadAnimation}
                autoPlay
                loop
                style={styles.animation}

            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    animation: {
        backgroundColor: 'transparent',
        width: 200,
        height: 200
    }

})