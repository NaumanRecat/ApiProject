import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BasicScreen1 from '../basic/BasicScreen1';
import BasicScreen from '../basic/BasicScreen';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const BottonTabNavigator =()=>{
    return (
       
          <Tab.Navigator>
            <Tab.Screen name="BasicScreen" component={BasicScreen} />
            <Tab.Screen name="BasicScreen1" component={BasicScreen1 } />
          </Tab.Navigator>
    
      );
}
  
export default BottonTabNavigator