import React from "react";
import {SafeAreaView} from "react-native";
import ScreenNavigator from "./src/navigator/ScreenNavigator";

const App =()=>{
  return(
    <SafeAreaView style={{flex:1,backgroundColor:'#1E1E1E'}}>
    <ScreenNavigator/>
    </SafeAreaView>
  )
}

export default App