import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import colors from '../styles/colors';
import userImg from '../assets/user.png';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export function Header() {
    return (
        <View style={styles.container}>
            <View>
                <Text>Olá,</Text>
                <Text>Genivaldo</Text>
            </View>

            <Image source={userImg} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: colors.red,
        marginTop: getStatusBarHeight(),
    }
})