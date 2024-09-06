import { Alert, Text, View, StyleSheet, Button, Pressable, ImageBackground } from 'react-native';

export default function HomeScreen() {
    function showAlert(){
        Alert.alert("Rik is geweldig!")
    }
    const image = require('../assets/images/bg.jpg');
    return (
        <ImageBackground source={image} resizeMode={"cover"}>
        <View style={styles.container}>
                <Pressable onPress={() => showAlert()}>
                    <Text style={styles.button}>Start game</Text>
                </Pressable>

        </View>
        </ImageBackground>
    );
}

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