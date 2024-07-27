import React, { useEffect, useState } from "react";
import { ActivityIndicator, Button, FlatList, Platform, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View, Modal } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const BasicScreen = (props) => {
    const [change, setChange] = useState('Static Data')

    const [name, setName] = useState('Nauman Tariq')
    const [age, setage] = useState('26')

    const [show, setshow] = useState('Typing Text Here')

    const [email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [display, setDispaly] = useState(false)

    const [loader, setLoader] = useState(false)
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };
    


    const [flat, setFlat] = useState([
        {
            id: '1',
            title: 'Wedding Dress',
            description: 'A beautiful white gown with intricate lace details.'
        },
        {
            id: '2',
            title: 'Engagement Ring',
            description: 'A sparkling diamond ring with a platinum band.'
        },
        {
            id: '3',
            title: 'Wedding Shoes',
            description: 'Elegant high heels with pearl embellishments.'
        },
    ]);

    const renderItem = ({ item }) => (
        <View style={{
            borderWidth: 1,
            marginTop: 10
        }}>
            <Text> {item.id} </Text>
            <Text> {item.title} </Text>
            <Text> {item.description} </Text>
        </View>
    )


    const clearData = () => {
        setEmail(""),
            setPassword(""),
            setDispaly(false)
    }

    const showloader = () => {
        setLoader(true);

        setTimeout(() => {
            setLoader(false)
        }, 3000);
    }

    // useEffect(()=>{
    //     console.warn('USEeFFECT iS wOEK')
    // },[])


    const firstname = 'Nauman';
    const lastname = 'Tariq Mehmood Imran';


    return (
        <ScrollView>

            <StatusBar backgroundColor="orange" barStyle={'dark-content'} hidden={false} />

        

            <Button onPress={() => props.navigation.navigate('BasicScreen1', { firstname, lastname })} title="Passing Data Screen" />

            <TouchableOpacity><Text> Nomi Awan Working </Text></TouchableOpacity>

            <Button title="Button" onPress={() => setChange('Dynamic Data')} />

            <Text> {change} </Text>

            {/* Jo name idr likhyein gy name age bracke sy bhair sy props. agy likh kr props recieved krni hai */}

            <Application name={name} age={age} />

            <TextInput onChangeText={(txt) => setshow(txt)} placeholder="Type your message" style={{ borderWidth: 0.3, width: 300 }} />

            <Text> {show} </Text>

            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                <Text>Form</Text>
                <TextInput onChangeText={(txt) => setEmail(txt)} value={email} placeholder="Type your Email" style={{ borderWidth: 0.3, width: 300 }} />
                <TextInput onChangeText={(txt) => setPassword(txt)} value={Password} placeholder="Type your Password" style={{ borderWidth: 0.3, width: 300, marginTop: 10 }} />
                <Button onPress={() => setDispaly(true)} title="Show Data" />
                <Button onPress={() => clearData()} title="Clear Data " />

                {
                    display ?
                        <View>
                            <Text>Email:{email} </Text>
                            <Text>Password:{Password} </Text>
                        </View> : null
                }
            </View>

            <View>
                <FlatList
                    data={flat}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>

            <Text> Map  </Text>

            {flat.map(item => (
                <View style={{
                    borderWidth: 1,
                    marginTop: 10
                }} >
                    <Text> {item.id} </Text>
                    <Text> {item.title} </Text>
                    <Text> {item.description} </Text>
                </View>
            ))}

            <Button onPress={() => setDispaly(!display)} title={display ? 'Hide Toggle' : 'Show Toggle'} />

            {
                display ? <Application name={name} age={age} /> : null

            }

            <Button onPress={showloader} title="Show Loader" />
            <ActivityIndicator size={100} color={'red'} animating={loader} />


            {
                Platform.OS === 'android' ? <View style={{ height: 100, width: 100, backgroundColor: 'orange', alignSelf: 'center' }}></View> : <View style={{ height: 100, width: 100, backgroundColor: 'green', alignSelf: 'center' }}></View>
            }

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button title="Show Modal" onPress={toggleModal} />
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isModalVisible}
                    onRequestClose={toggleModal}
                >
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        <View
                            style={{
                                margin: 20,
                                backgroundColor: 'white',
                                borderRadius: 10,
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
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    marginBottom: 10,
                                }}
                            >
                                Hello!
                            </Text>
                            <Text>This is a simple modal.</Text>
                            <Button title="Close" onPress={toggleModal} />
                        </View>
                    </View>
                </Modal>
            </View>

            <Button title="Try Navigation" onPress={()=>props.navigation.navigate('BasicScreen1')}/>

      

        </ScrollView>
    )
}

const Application = (props) => {
    return (
        <View>
            <Text>{props.name}</Text>
            <Text>{props.age}</Text>
        </View>
    )
}

export default BasicScreen