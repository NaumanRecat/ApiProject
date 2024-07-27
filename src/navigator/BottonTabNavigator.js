import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BasicScreen1 from '../basic/BasicScreen1';
import BasicScreen from '../basic/BasicScreen';

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