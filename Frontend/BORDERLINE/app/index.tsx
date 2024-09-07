import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "@/app/homescreen";
import CharacterScreen from "@/app/CharacterScreen";
import ArenaScreen from "@/app/ArenaScreen"

const Stack = createNativeStackNavigator();

const App = () => {
    return(
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Character" component={CharacterScreen} />
                <Stack.Screen name="Arena" component={ArenaScreen} />
            </Stack.Navigator>
    );
}

export default App;
