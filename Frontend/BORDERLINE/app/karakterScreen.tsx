import {Text, View, StyleSheet, Pressable, ImageBackground, Alert} from 'react-native';

export default function KarakterScreen() {
    const image = require('../assets/images/karakterscreen.jpg');
    return (
        <ImageBackground source={image} resizeMode={"cover"}>
            <View style={styles.container}>
                <Pressable onPress={() => Alert.alert('test')}>
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