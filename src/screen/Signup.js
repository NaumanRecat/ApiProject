import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { widthPercentageToDP as W, heightPercentageToDP as H } from 'react-native-responsive-screen';
import { myFetchPostSignupRequest } from "./AllApiFunction";

const Signup =(props)=>{
    const [username, setUsername]= useState('')
    const [password, setPassword]= useState('')

    const SignupApiFunction = async ()=>{
        let body ={
            "username":username,
            "password":password,
        }
        const response = await myFetchPostSignupRequest(body)
        console.log(response)
        if (response.id){
            props.navigation.navigate('Login')
        }
    }

  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <TextInput placeholder="Type your username" onChangeText={setUsername} value={username} style={{borderWidth:H(0.1),width:W(80)}} />
        <TextInput placeholder="Type your password" onChangeText={setPassword} value={password} style={{borderWidth:H(0.1),width:W(80), marginTop:H(1), marginBottom:H(1)}} />
        <Button title="Sign Up" onPress={SignupApiFunction} />
    </View>
  )
}

export default Signup