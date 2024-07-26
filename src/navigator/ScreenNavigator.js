import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Signup from "../screen/Signup";
import Login from '../screen/Login';
import Dashboard from '../screen/Dashboard';
import Detail from '../screen/Detail';
import BasicScreen from '../basic/BasicScreen';



const Stack = createNativeStackNavigator();

const ScreenNavigator =()=>{
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="BasicScreen">
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