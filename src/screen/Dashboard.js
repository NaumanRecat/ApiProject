import React, { useEffect, useState } from "react";
import { Button, Modal, ScrollView, Text, TouchableOpacity, View, TextInput, Image } from "react-native";
import { myFetchDeleteRequest, myFetchGetRequest, myFetchAddData } from "./AllApiFunction";
import { widthPercentageToDP as W, heightPercentageToDP as H } from 'react-native-responsive-screen';
import { launchImageLibrary } from 'react-native-image-picker';

const Dashboard = () => {

    const [data, setData] = useState([])
    const [modalVisible, setModalVisible] = useState(false)

    const [title, setTitle] = useState();
    const [content, setContent] = useState();

    const [image, setImage] = useState(null);

    const GetData = async () => {
        const response = await myFetchGetRequest();
        console.log(response)
        setData(response)
    }

    const DeleteData = async (id) => {
        await myFetchDeleteRequest(id);
        setData((prevData) => prevData.filter((item) => item.id !== id));
    }

    useEffect(() => {
        GetData();
    }, [])

    const pickImage = () => {
        launchImageLibrary({ mediaType: 'photo' }, response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                const asset = response.assets[0];
                setImage({
                    uri: asset.uri,
                    fileName: asset.fileName,
                    type: asset.type,
                });
            }
        });
    }

    const AddNewData = async ()=>{
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);

        if (image) {
            formData.append('image', {
                uri: image.uri,
                name: image.fileName,
                type: image.type,
            });
        }

        try{
            const response = await myFetchAddData(formData);
            console.log(response)

            if (response) {
                console.log('Data added successfully:', response);
                GetData();
                setModalVisible(false);
            }
        } catch(error){
            alert('An error occurred. Please try again.');
        }

    }

    return (
        <ScrollView>

            <View style={{ marginTop: H(5), marginBottom: H(5) }}><Button title="Entry New Data" onPress={() => setModalVisible(true)} /></View>

            {data.map((item) => (
                <View key={item.id} style={{ marginBottom: 5, marginTop: 1 }}>
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
                        <Button title="Delete" onPress={() => DeleteData(item.id)} />
                    </TouchableOpacity>
                </View>
            ))}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={{
                    margin: 20,
                    backgroundColor: 'white',
                    borderRadius: 20,
                    padding: 35,
                    alignItems: 'center',
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 4,
                    elevation: 5,
                }}>
                    <Text style={{
                        marginBottom: 15,
                        textAlign: 'center',
                        fontSize: 20,
                        fontWeight: 'bold',
                    }}>Add Item</Text>

                    <TextInput
                        style={{
                            width: '80%',
                            height: 40,
                            borderColor: '#ccc',
                            borderWidth: 1,
                            marginBottom: 10,
                            padding: 10,
                            borderRadius: 5,
                        }}
                        placeholder="Title"
                        value={title}
                        onChangeText={setTitle}
                    />

                    <TextInput
                        style={{
                            width: '80%',
                            height: 40,
                            borderColor: '#ccc',
                            borderWidth: 1,
                            marginBottom: 10,
                            padding: 10,
                            borderRadius: 5,
                        }}
                        placeholder="Content"
                        value={content}
                        onChangeText={setContent}
                    />

                    <Button title="Pick an image" onPress={pickImage} />


                    {image && <Image source={{ uri: image.uri }} style={{
                        width: 100,
                        height: 100,
                        marginBottom: 10,
                    }} />}

                    <TouchableOpacity style={{
                            backgroundColor: '#2196F3',
                            borderRadius: 5,
                            padding: 10,
                            elevation: 2,
                            marginTop: 10,
                            width: '80%',
                        }}
                        onPress={() => {
                            console.log("Save button pressed");
                            AddNewData()
                        }}>
                        <Text style={{color: 'white',textAlign: 'center'}}>Save</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={{
                            backgroundColor: '#2196F3',
                            borderRadius: 5,
                            padding: 10,
                            elevation: 2,
                            marginTop: 10,
                            width: '80%',
                        }}
                        onPress={() => setModalVisible(false)}
                    >
                        <Text style={{color: 'white', textAlign: 'center'}}>Cancel</Text>
                    </TouchableOpacity>


                </View>

            </Modal>
        </ScrollView>
    )
}

export default Dashboard