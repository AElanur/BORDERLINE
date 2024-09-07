import React, {useEffect} from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import Panel from '@/components/controls/FightPanel'
import Fighter from '@/app/character/Character'
import Opponent from '@/app/character/Opponent'

export default function ArenaScreen() {
    useEffect(() => {
        // Lock to landscape mode
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

        // Unlock orientation when leaving the screen
        return () => {
            ScreenOrientation.unlockAsync();
        };
    }, []);

    return(
        <View style={styles.field}>
            <View style={styles.fighterStats}>
                <Text>100/100</Text>
                <View style={styles.healthbar}/>
            </View>
            <View style={styles.sky}>
                <ImageBackground source={require('../assets/images/background.jpg')}>
                <View style={styles.arena}>
                    <Fighter/>
                    <Opponent/>
                </View>
                </ImageBackground>
            </View>
            <View style={styles.grass}>
                <ImageBackground source={require('../assets/images/grass.jpg')}>
                <Panel/>
                </ImageBackground>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    field: {
        width: "100%",
        height: "100%",
        flexDirection: "column",
        backgroundColor: "transparent"
    },
    sky: {
        flex: 3,
        marginTop: -200,
        zIndex: -1
    },
    grass: {
        flex: 1,
        borderTopEndRadius: 5,
        borderTopStartRadius: 5,
        borderCurve: "circular",
        backgroundColor: "#7CFC00",
        position: 'relative',
        zIndex: -2
    },
    arena: {
        flexDirection: "row",
        width: "60%",
        height: "100%",
        margin: "auto"
    },
    text: {
        fontSize: 30,
        margin: 15
    },
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
