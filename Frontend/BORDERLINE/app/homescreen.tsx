import { Text, View, StyleSheet, Pressable, ImageBackground } from 'react-native';
import React from 'react';

export default function HomeScreen({navigation}:any) {
    return (
        <ImageBackground source={require('../assets/images/bg.jpg')} resizeMode={"cover"}>
        <View style={styles.container}>
                <Pressable onPress={() =>  navigation.navigate('Karakter')}>
                    <Text style={styles.button}>Start game</Text>
                </Pressable>
        </View>
        </ImageBackground>
    );
};

 HomeScreen;

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

