import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
    faChevronRight,
    faChevronLeft,
    faLocationArrow,
    faChevronUp,
    faChevronDown
} from "@fortawesome/free-solid-svg-icons";

function defend() {
    console.log("Character is dashing")
}

const moveButton = () => { return(
    <Pressable style={styles.button} onPress={ () => defend()}>
        <View style={styles.icon}>
            <FontAwesomeIcon style={styles.moveButton} icon={faChevronLeft}/>
            <View>
                <FontAwesomeIcon style={styles.moveButton} icon={faChevronUp}/>
                <FontAwesomeIcon style={styles.moveButton} icon={faChevronDown}/>
            </View>
            <FontAwesomeIcon style={styles.moveButton} icon={faChevronRight}/>
        </View>
    </Pressable>
)}

const styles = StyleSheet.create({
    button: {
        borderRadius: 50,
        width: 100,
        height: 100,
        borderWidth: 2,
        borderColor: "#FFFFF",
        margin: "auto"
    },
    moveButton: {
        width: 100,
        height: 100,
        marginHorizontal: 5,
        marginVertical: 15
    },
    icon: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default moveButton;