import React from 'react';
import { Text, View, StyleSheet, Pressable, Image } from 'react-native';

const healthbar = () => {
    return(
        <View style={styles.fighterStats}>
            <Text>100/100</Text>
            <View style={styles.healthbar}/>
        </View>
    )
}

export default healthbar;

const styles = StyleSheet.create({
    healthbar: {
        width: 250,
        height: 10,
        backgroundColor: "#DC143C",
        color: "#00000",
        zIndex: 10
    },
    fighterStats: {
        flexDirection: "column",
        width: 100,
        margin: 15,
        backgroundColor: "transparent"
    }
})
