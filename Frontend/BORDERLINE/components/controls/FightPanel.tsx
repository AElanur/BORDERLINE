import React from 'react';
import { View, StyleSheet } from 'react-native';
import Defend from '@/components/buttons/DefendButton'
import Kick from '@/components/buttons/KickButton'
import Punch from '@/components/buttons/PunchButton'
import Move from '@/components/buttons/MoveButton'

const fightPanel = () => {
    return(
        <View style={styles.controlPanel}>
            <View style={styles.combatPanel}>
                <View style={styles.leftSide}>
                    <View style={styles.button}><Kick/></View>
                    <View style={styles.button}><Punch/></View>
                </View>

                <View style={styles.rightSide}>
                    <View style={styles.button}><Defend/></View>
                    <View style={styles.button}><Move/></View>
                </View>
            </View>
        </View>
    )
}

export default fightPanel

const styles = StyleSheet.create({
    controlPanel: {
        height: 200,
        marginTop: "auto",
        backgroundColor: "transparent",
        flexDirection: "row"
    },
    combatPanel: {
        flexDirection: "row",
        marginLeft: "auto",
        margin: 10
    },
    leftSide: {
        flexDirection: "column",
        justifyContent: "center"
    },
    rightSide: {
        flexDirection: "column",
        justifyContent: "center"
    },
    button: {
        margin: 5,
        justifyContent: "center"
    }
})
