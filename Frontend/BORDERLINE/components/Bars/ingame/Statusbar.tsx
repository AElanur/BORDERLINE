import React, {useEffect} from 'react';
import { Text, View, StyleSheet, Pressable, Image } from 'react-native';
import Healthbar from '@/app/character/stats/Healthbar'
import Settings from '@/components/buttons/SettingsButton'

const defend = () => {
    console.log("Character is defending")
}

const statusBar = () => {
    return(
        <View style={styles.bar}>
            <Healthbar/>
            <Settings/>
        </View>
    )}

const styles = StyleSheet.create({
    bar: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "95%",
        margin: "auto",
        height: 30,
        top: 15
    }
})

export default statusBar;