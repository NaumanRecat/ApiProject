import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Signup from "../screen/Signup";

const Stack = createNativeStackNavigator();

const ScreenNavigator =()=>{
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/> 
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ScreenNavigator