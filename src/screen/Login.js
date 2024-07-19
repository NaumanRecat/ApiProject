import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { widthPercentageToDP as W, heightPercentageToDP as H } from 'react-native-responsive-screen';
import { myFetchPostLoginRequest } from "./AllApiFunction";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Signup =(props)=>{
    const [username, setUsername]= useState('')
    const [password, setPassword]= useState('')

    const handleLogin = async ()=>{
        let body ={
            "username":username,
            "password":password,
        }
        const response = await myFetchPostLoginRequest(body)
        console.log(response)
        if (response.token){
            await AsyncStorage.setItem('userToken', response.token)
            props.navigation.navigate('Dashboard');
        }
    }

  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <TextInput placeholder="Type your username" onChangeText={setUsername} value={username} style={{borderWidth:H(0.1),width:W(80)}} />
        <TextInput placeholder="Type your password" onChangeText={setPassword} value={password} style={{borderWidth:H(0.1),width:W(80), marginTop:H(1), marginBottom:H(1)}} />
        <Button title="Log in" onPress={handleLogin} />
    </View>
  )
}

export default Signup