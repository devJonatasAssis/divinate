import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import HomeScreen from "./pages/Home";
import TableScreen from "./pages/Table";
import MainScreen from "./pages/Main";
import RankingScreen from "./pages/Ranking";

function Routes() {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Table" component={TableScreen} />
            <Stack.Screen name="Main" component={MainScreen} />
            <Stack.Screen name="Ranking" component={RankingScreen} />
        </Stack.Navigator>
    )
}

export default Routes;
