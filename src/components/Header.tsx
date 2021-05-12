import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import colors from '../styles/colors';
import userImg from '../assets/user.png';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import AsyncStorage from '@react-native-async-storage/async-storage';


import fonts from '../styles/fonts';

export function Header() {

    const [userName, setUserName] = useState<string>();

    useEffect(() => {

        async function loadStorageUserName() {
            const user = await AsyncStorage.getItem('@plantmanager:user');

            setUserName(user || '');
        }

        loadStorageUserName();

    }, [])

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.geeting}>Olá,</Text>
                <Text style={styles.userName}>{userName}</Text>
            </View>

            <Image source={userImg} style={styles.image} />
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
        marginTop: getStatusBarHeight(),
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    geeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text
    },
    userName: {
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 40
    }

})