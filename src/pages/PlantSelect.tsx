import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { Header } from '../components/Header';

import colors from '../styles/colors';

export function PlantSelect() {
    return (
        <View style={styles.container}>
            <Header />
            <Text style={styles.title}>Em qual ambiente</Text>
            <Text style={styles.subtitle}>você quer colocar sua planta</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    title: {
        fontSize: 17,
        color: colors.heading
    },
    subtitle: {

    }
})