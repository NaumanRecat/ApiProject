import React, { useEffect, useState } from "react";
import { Button, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { myFetchDeleteRequest, myFetchGetRequest } from "./AllApiFunction";

const Dashboard =()=>{

    const [data, setData]=useState([])

    const GetData = async () =>{
        const response = await myFetchGetRequest();
        console.log(response)
        setData(response)
    }

    const DeleteData = async (id)=>{
         await myFetchDeleteRequest(id);
         setData((prevData) => prevData.filter((item) => item.id !== id));
    }

    useEffect(()=>{
        GetData();
    },[])

  return(
    <ScrollView>
        {data.map((item)=>(
            <View key={item.id} style={{marginBottom:5, marginTop:1}}>
                <TouchableOpacity style={{
                     padding: 10,
                     borderWidth: 1,
                     borderColor: '#ccc',
                     borderRadius: 5,
                     backgroundColor: 'pink',
                }}>
                       <Text style={{ fontSize: 16 }}>Id: {item.id}</Text>
                        <Text style={{ fontSize: 16 }}>Title: {item.title}</Text>
                        <Text style={{ fontSize: 16 }}>Content: {item.content}</Text>
                        <Text style={{ fontSize: 16 }}>Published Date: {item.published_date}</Text>
                        <Button title="Delete" onPress={()=>DeleteData(item.id)}/>
                </TouchableOpacity>
            </View>
        ))}
    </ScrollView>
  )
}

export default Dashboard