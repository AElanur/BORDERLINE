import React from 'react';
import { Text, View, StyleSheet, Pressable, Image } from 'react-native';

const character = () => {
    return(
        <View>
            <View style={styles.fighter}>
                <Image style={styles.fighterImage} source={require('../../assets/images/sylus4.png')}  resizeMode={"cover"}></Image>
            </View>
        </View>


    )
}

export default character;

const styles = StyleSheet.create({
    fighter: {
        height: 300,
        width: 250,
        backgroundColor: 'transparent',
        marginTop: "auto",
        marginRight: "auto",
        zIndex: 1,
        marginBottom: -100,
        position: 'relative'
    },
    fighterImage: {
        flex: 1,
        width: undefined,
        height: undefined,
        backgroundColor: 'transparent'
    }
})
