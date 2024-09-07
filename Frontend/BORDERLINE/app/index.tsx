import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "@/app/homescreen";
import KarakterScreen from "@/app/karakterScreen";

const Stack = createNativeStackNavigator();

const App = () => {
    return(
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Karakter" component={KarakterScreen} />
            </Stack.Navigator>
    );
}

export default App;
