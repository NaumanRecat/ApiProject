import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Signup from "../screen/Signup";
import Login from '../screen/Login';
import Dashboard from '../screen/Dashboard';
import Detail from '../screen/Detail';
import BasicScreen from '../basic/BasicScreen';
import BasicScreen1 from '../basic/BasicScreen1';
import BottonTabNavigator from './BottonTabNavigator';
import BottomtopNavigator from './BottomtopNavigator';





const Stack = createNativeStackNavigator();

const ScreenNavigator =()=>{
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="BottomtopNavigator">
        <Stack.Screen name="BottomtopNavigator" component={BottomtopNavigator} options={{headerShown:false}}/> 
        <Stack.Screen name="BottonTabNavigator" component={BottonTabNavigator} options={{headerShown:false}}/> 
        <Stack.Screen name="BasicScreen1" component={BasicScreen1} options={{headerShown:false}}/> 
        <Stack.Screen name="BasicScreen" component={BasicScreen} options={{headerShown:false}}/> 
        <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/> 
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/> 
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}}/> 
        <Stack.Screen name="Detail" component={Detail} options={{headerShown:false}}/> 

        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ScreenNavigator