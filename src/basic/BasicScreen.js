import React, { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";

const BasicScreen = (props) => {
    const [change, setChange] = useState('Static Data')

    const [name, setName] = useState('Nauman Tariq')
    const [age, setage] = useState('26')

    const [show, setshow] = useState('Typing Text Here')

    const [email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [display, setDispaly] = useState(false)
    
    const clearData =()=>{
        setEmail(""),
        setPassword(""),
        setDispaly(false)
    }
    


    

    return (
        <View>
            <TouchableOpacity><Text> Nomi Awan Working </Text></TouchableOpacity>

            <Button title="Button" onPress={()=>setChange('Dynamic Data')}/>

            <Text> {change} </Text>   

            {/* Jo name idr likhyein gy name age bracke sy bhair sy props. agy likh kr props recieved krni hai */}

            <Application name={name} age={age}/>

            <TextInput onChangeText={(txt)=>setshow(txt)} placeholder="Type your message" style={{borderWidth:0.3, width:300}} />

            <Text> {show} </Text>

            <View style={{alignItems:'center', justifyContent:'center', marginTop:10}}>
            <Text>Form</Text>
            <TextInput onChangeText={(txt)=>setEmail(txt)} value={email} placeholder="Type your Email" style={{borderWidth:0.3, width:300}} />
            <TextInput onChangeText={(txt)=>setPassword(txt)} value={Password} placeholder="Type your Password" style={{borderWidth:0.3, width:300, marginTop:10}} />
            <Button onPress={()=>setDispaly(true)} title="Show Data"/>
            <Button onPress={()=>clearData()} title="Clear Data "/>

            {
                display ?
                <View>
                    <Text>Email:{email} </Text>
                    <Text>Password:{Password} </Text>
                </View>:null
            }
            </View>

            
            

        </View>
    )
}

const Application =(props)=>{
   return(
    <View>
    <Text>{props.name}</Text>
    <Text>{props.age}</Text>
   </View>
   )
}

export default BasicScreen