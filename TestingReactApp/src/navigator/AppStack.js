import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MainScreen from '../screens/MainScreen';
import SecondaryScreen from '../screens/SecondaryScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const AppStack = () => (
    <NavigationContainer>
        <Stack.Navigator headerMode="none">
            <Stack.Screen name = 'HomeScreen' component = {HomeScreen} />
            <Stack.Screen name = 'MainScreen' component = {MainScreen}/>
            <Stack.Screen name = 'SecondaryScreen' component = {SecondaryScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
);

export default AppStack;