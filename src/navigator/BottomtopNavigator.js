import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BasicScreen1 from '../basic/BasicScreen1';
import BasicScreen from '../basic/BasicScreen';
import Dashboard from '../screen/Dashboard';

const Tab = createMaterialTopTabNavigator();

const BottomtopNavigator =()=>{
    return (
          <Tab.Navigator>
            <Tab.Screen name="BasicScreen" component={BasicScreen} />
            <Tab.Screen name="Dashboard" component={Dashboard } />
          </Tab.Navigator>
      );
}
  
export default BottomtopNavigator