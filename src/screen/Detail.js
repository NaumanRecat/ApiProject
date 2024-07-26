import React, {useState, useEffect} from "react";
import { Button, Modal, Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { launchImageLibrary } from 'react-native-image-picker';
import { myFetchUpdateData } from "./AllApiFunction";

const Detail = ({ route }) => {
    const { item } = route.params;

    const [modalVisible, setModalVisible] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);

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

    const UpdateData = async ()=>{

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
            const response = await myFetchUpdateData(item?.id, formData)
            console.log('Api Response', response)

            if(response.id){
                setTitle(response.title),
                setContent(response.content)
                setModalVisible(false);
            }
        }
        catch(error){
            console.error('Failed to update the item:');
        }
    }



    return (
        <View>
            <Text> {item.id} </Text>
            <Text>Title: {item.title}</Text>
            <Text>Content: {item.content}</Text>
            <Text>Published Date: {item.published_date}</Text>
            <Button title="Update the Data" onPress={()=>setModalVisible(true)}/>

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
                            UpdateData()
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
        </View>
    )
}

export default Detail