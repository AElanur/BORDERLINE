import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from "@/app/screens/Homescreen";
import CharacterScreen from "@/app/screens/CharacterScreen";
import ArenaScreen from "@/app/screens/ArenaScreen"

const Stack = createNativeStackNavigator();

const App = () => {
    return(
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Homescreen} />
                <Stack.Screen name="Character" component={CharacterScreen} />
                <Stack.Screen name="Arena" component={ArenaScreen} />
            </Stack.Navigator>
    );
}

export default App;
