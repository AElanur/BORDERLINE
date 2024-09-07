import {Text, View, StyleSheet, Pressable, TextInput, ImageBackground, Alert, Image, Button} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faChevronRight, faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect, useRef, useState} from "react";
import * as ScreenOrientation from "expo-screen-orientation";

useEffect(() => {
    // Lock to landscape mode
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);

    // Unlock orientation when leaving the screen
    return () => {
        ScreenOrientation.unlockAsync();
    };
}, []);


export default function CharacterScreen({navigation}:any) {
    const image = [
        require('../assets/images/sylus1.jpg'),
        require('../assets/images/sylus2.jpg'),
        require('../assets/images/sylus3.jpg')];
    const [currentImage, setCurrentImage] = useState(0);

    const fighterName = [
        "Sylus 1",
        "Sylus 2",
        "Sylus 3"
    ]

    function alertMessage() {
        Alert.alert("In the making")
    }

    function switchCharacter(direction: number) {
        let newIndex = currentImage + direction;

        // Handle wrapping around the array
        if (newIndex < 0) {
            newIndex = image.length - 1; // Go to the last image if we're at the first one
        } else if (newIndex >= image.length) {
            newIndex = 0; // Go back to the first image if we're at the last one
        }
        setCurrentImage(newIndex);
    }

    return (
        <View style={styles.screen}>
        {/*<ImageBackground style={styles.wallpaper} source={image} resizeMode={"cover"}>*/}

            <View style={styles.characterScreen}>
                <Text style={styles.fighterName}>
                    Select a fighter!
                </Text>
                <View style={styles.fighter}>
                    <Pressable onPress={() => switchCharacter(-1)}>
                        <FontAwesomeIcon style={styles.character} icon={faChevronLeft} size={20}/>
                    </Pressable>
                    <View style={styles.character}>
                        <Image style={styles.characterImage} source={image[currentImage]} resizeMode={"cover"}/>
                    </View>
                    <Pressable onPress={() => switchCharacter(1)}>
                        <FontAwesomeIcon style={styles.character} icon={faChevronRight} size={20}/>
                    </Pressable>
                </View>

                <View style={styles.container}>
                    <Text style={styles.fighterName}> {fighterName[currentImage]} </Text>
                    <View>
                        <Pressable  onPress={() =>  navigation.navigate('Arena')} style={styles.button}>
                            <Text style={styles.text}> Select </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        {/*</ImageBackground>*/}
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
        justifyContent: "center",
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
        textAlign: "center",
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
    },
    button: {
        marginTop: 10,
        width: '80%',
        borderRadius: 10,
        height: 40,
        textAlign: "center",
        margin: 'auto',
        color: "#FDB0C0",
        fontWeight: "bold",
        backgroundColor: "transparent",
        borderColor: "#000000",
        borderStyle: "solid",
        borderWidth: 2
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "#000000"
    }
})