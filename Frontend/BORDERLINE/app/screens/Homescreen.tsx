import { Text, View, StyleSheet, Pressable, ImageBackground } from 'react-native';
import React, {useEffect} from 'react';
import * as ScreenOrientation from "expo-screen-orientation";

const bg = require('@/assets/images/bg.jpg')

useEffect(() => {
    // Lock to landscape mode
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);

    // Unlock orientation when leaving the screen
    return () => {
        ScreenOrientation.unlockAsync();
    };
}, []);

export default function Homescreen({navigation}:any) {
    return (
        <ImageBackground source={bg} resizeMode={"cover"}>
        <View style={styles.container}>
                <Pressable onPress={() =>  navigation.navigate('Character')}>
                    <Text style={styles.button}>Start game</Text>
                </Pressable>
        </View>
        </ImageBackground>
    );
};

Homescreen;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        marginTop: 50,
        marginLeft: 20,
        justifyContent: "center"
    },
    button: {
        width: '80%',
        borderRadius: 50,
        height: 40,
        textAlign: "center",
        margin: 'auto',
        color: "#FDB0C0",
        fontWeight: "bold",
        backgroundColor: "transparent",
        borderColor: "#FDB0C0",
        borderStyle: "solid",
        borderWidth: 2
    }
})

