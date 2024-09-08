import React, {useEffect} from 'react';
import { Text, View, StyleSheet, Pressable, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faShield} from "@fortawesome/free-solid-svg-icons";

const defend = () => {
    console.log("Character is defending")
}

const defendButton = () => {
    return(
    <Pressable style={styles.button} onPress={ () => defend()}>
        <View style={styles.icon}>
            <FontAwesomeIcon icon={faShield} />
        </View>
    </Pressable>
    )}

const styles = StyleSheet.create({
    button: {
        borderRadius: 50,
        width: 55,
        height: 55,
        borderWidth: 2,
        borderColor: "#FFFFF",
        margin: "auto"
    },
    icon: {
        width: undefined,
        height: undefined,
        flex: 1,
        color: "#FFFFF",
        margin: "auto",
        justifyContent: "center"
    }
})

export default defendButton;