import {Text, View, StyleSheet, Pressable, TextInput, ImageBackground, Alert, Image, Button} from 'react-native';

export default function KarakterScreen() {
    const image = require('../assets/images/karakterscreen.jpg');
    return (
        <View style={styles.screen}>
        <ImageBackground style={styles.wallpaper} source={image} resizeMode={"cover"}>

            <View style={styles.characterScreen}>
                <View style={styles.character}>
                    <Image style={styles.characterImage} source={require('../assets/images/sylus3.jpg')} resizeMode={"cover"}/>
                </View>

                <View style={styles.container}>
                    <View style={styles.fighter}>
                        <Text style={styles.fighterName}> (-- </Text>
                        <Text style={styles.fighterName}>Sylus</Text>
                        <Text style={styles.fighterName}> --) </Text>
                    </View>
                    <View>
                        <TextInput style={styles.input}/>
                        <Button title="Select"/>
                    </View>
                </View>
            </View>
        </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        justifyContent: "center",
        height: "100%"
    },
    wallpaper: {
        flex: 1,
        width: undefined,
        height: undefined
    },
    container: {
        justifyContent: "center"
    },
    fighter: {
        flexDirection: "row",
        textAlign: "center",
        margin: "auto",
    },
    character: {
        width: 200,
        height: 400,
        margin: "auto",
        borderStyle: "solid",
        borderColor: "#00000",
        borderWidth: 5
    },
    characterImage: {
        flex: 1,
        width: undefined,
        height: undefined
    },
    characterScreen: {
        flexDirection: "column",
        flex: 0.6,
        margin: "auto"
    },
    fighterName: {
      fontSize: 20,
      fontWeight: "bold",
        textAlign: "center"
    },
    input: {
        width: '100%',
        borderRadius: 10,
        height: 40,
        textAlign: "center",
        margin: 'auto',
        color: "#FDB0C0",
        fontWeight: "bold",
        backgroundColor: "#FFFF",
        borderColor: "#00000",
        borderStyle: "solid",
        borderWidth: 2
    }
})