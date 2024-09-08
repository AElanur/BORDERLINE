import React from 'react';
import { Text, View, StyleSheet, Pressable, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faGear} from "@fortawesome/free-solid-svg-icons";

const hit = 5
function punch(damage: number) {
    console.log("Player has entered settings")
}

const settingsButton = () => { return(
    <Pressable style={styles.button} onPress={ () => punch(hit)}>
        <View style={styles.icon}>
            <FontAwesomeIcon icon={faGear} />
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

export default settingsButton;