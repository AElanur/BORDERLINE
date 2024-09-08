import React from 'react';
import { View, StyleSheet } from 'react-native';
import Defend from '@/components/buttons/DefendButton'
import Kick from '@/components/buttons/KickButton'
import Punch from '@/components/buttons/PunchButton'
import Move from '@/components/buttons/MoveButton'

const fightPanel = () => {
    return(
        <View style={styles.controlPanel}>
            <View style={styles.movePanel}>
                <View style={styles.button}><Defend/></View>
                <View style={styles.button}><Kick/></View>
                <View style={styles.button}><Punch/></View>
            </View>

            <View style={styles.combatPanel}>
                <View style={styles.button}><Move/></View>
            </View>
        </View>
    )
}

export default fightPanel

const styles = StyleSheet.create({
    controlPanel: {
        height: 200,
        flexDirection: "row",
        justifyContent: "space-between",
        position: "relative",
        marginBottom: "auto",
        width: "100%",
        bottom: 30
    },
    combatPanel: {
        flexDirection: "row",
        marginLeft: "auto",
        margin: 5
    },
    movePanel: {
        flexDirection: "row"
    },
    button: {
        margin: 5,
        justifyContent: "center"
    }
})
