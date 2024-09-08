import React from 'react';
import { Text, View, StyleSheet, Pressable, Image } from 'react-native';

const opponent = () => {
    return(
        <View style={styles.opponent}>
            <View style={styles.fighterStats}>
                <Text>100/100</Text>
                <View style={styles.healthbar}/>
            </View>
            <Image style={styles.fighterImage} source={require('../../assets/images/sylus5.png')}  resizeMode={"cover"}></Image>
        </View>
    )
}

export default opponent;

const styles = StyleSheet.create({
    opponent: {
        height: 250,
        width: 100,
        backgroundColor: "#FFFFF",
        marginTop: 150,
        marginLeft: "auto",
        zIndex: 1,
    },
    fighterImage: {
        flex: 1,
        width: undefined,
        height: undefined
    },
    healthbar: {
        width: "100%",
        height: 10,
        backgroundColor: "#00000",
        color: "#00000"
    },
    fighterStats: {
        flexDirection: "column",
        width: 100
    },
})
