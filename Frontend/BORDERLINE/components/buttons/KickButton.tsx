import React, {useEffect} from 'react';
import { Text, View, StyleSheet, Pressable, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faShoePrints} from "@fortawesome/free-solid-svg-icons";

function kick() {
    console.log("Character is kicking")
}

const kickButton = () => { return(
    <Pressable style={styles.button} onPress={ () => kick()}>
        <View style={styles.icon}>
            <FontAwesomeIcon icon={faShoePrints} />
        </View>
    </Pressable>
)}

const styles = StyleSheet.create({
    button: {
        borderRadius: 50,
        width: 55,
        height: 55,
        borderWidth: 2,
        borderColor: "#FFFFF"
    },
    icon: {
        width: undefined,
        height: undefined,
        flex: 1,
        color: "#FFFFF",
        margin: "auto",
        justifyContent: "center",
    }
})

export default kickButton;