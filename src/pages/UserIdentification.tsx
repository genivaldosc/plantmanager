import React, { useState } from 'react';
import {
    Text,
    SafeAreaView,
    StyleSheet,
    Image,
    TouchableOpacity,
    Platform,
    Dimensions,
    View,
    TextInput,
    KeyboardAvoidingView

} from 'react-native';

import { Feather } from '@expo/vector-icons';


import { Button } from '../components/Button';

import watering from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function UserIdentification() {

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();

    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!name);
    }

    function handleInputFocus() {
        setIsFocused(true);
    }

    function handleInputChange(value: string) {
        setIsFilled(!!value);
        setName(name);

    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={styles.content}>
                    <View style={styles.form}>

                        <View style={styles.header}>
                            <Text style={styles.emoji}>
                                {isFilled ? '😄️' : '😀️'}
                            </Text>

                            <Text style={styles.title}>
                                Como podemos {'\n'}
                                chamar você?
                            </Text>
                        </View>

                        <TextInput
                            style={[
                                styles.input,
                                (isFocused || isFilled) && { borderColor: colors.green }
                            ]}
                            placeholder="Digite um nome"
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                            onChangeText={handleInputChange}
                        />

                        <View style={styles.footer}>
                            <Button title="Confirmar" />
                        </View>

                    </View>

                </View>
            </KeyboardAvoidingView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content: {
        flex: 1,
        width: '100%',
    },
    form: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 54,
        justifyContent: 'center'

    },
    header: {
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 20
    },
    emoji: {
        fontSize: 44
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },
    footer: {
        width: '100%',
        marginTop: 40,
        paddingHorizontal: 20
    }

})