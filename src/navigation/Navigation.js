import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import Add from '../screens/Add';
import Login from '../screens/Login';
import Registro from '../screens/Registro';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Registro" component={Registro}/>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Add" component={Add} 
                options={{presentation:'modal', title:'Agregar productos'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;