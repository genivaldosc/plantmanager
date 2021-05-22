import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export default function TestModal() {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={false}
                visible={modalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>

                        <View style={styles.photo}>

                            <SvgFromUri
                                uri="https://storage.googleapis.com/golden-wind/nextlevelweek/05-plantmanager/1.svg"
                                height={150}
                                width={150}
                            />
                        </View>


                        <View style={styles.messageContainer}>
                            <Text style={styles.message}>
                                Deseja mesmo excluir sua {'\n'}
                                <Text style={{ fontWeight: 'bold' }}>Zemelcuca</Text>?
                            </Text>

                        </View>

                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity
                                style={styles.button}
                                activeOpacity={0.8}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}>
                                <Text style={{ ...styles.buttonText, color: colors.heading }}>Não</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.button}
                                activeOpacity={0.8}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}>
                                <Text style={{ ...styles.buttonText, color: colors.red }}>Sim</Text>
                            </TouchableOpacity>


                        </View>



                    </View>
                </View>
            </Modal>

            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    setModalVisible(!modalVisible);
                }}>
                <Text>Show Modal</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.body_light
    },
    modalView: {
        width: '70%',
        margin: 20,
        backgroundColor: colors.background,
        borderRadius: 10,
        padding: 35,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    photo: {
        alignItems: 'center',
        paddingBottom: 20
    },
    messageContainer: {
        alignItems: 'center',
        fontSize: 15
    },
    message: {
        fontSize: 17,
        fontFamily: fonts.text,
        color: colors.heading,
        textAlign: 'center'
    },
    button: {
        backgroundColor: colors.background,
        borderRadius: 10,
        padding: 10,
        paddingHorizontal: 30,
        elevation: 1,
    },
    buttonText: {
        fontFamily: fonts.text,
        color: colors.heading,
        fontSize: 15
    },

    buttonsContainer: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
});