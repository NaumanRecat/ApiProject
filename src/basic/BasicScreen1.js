import React from 'react';
import { View, Text, Button } from 'react-native';

const BasicScreen1 = ({ route, navigation }) => {
    const { firstname, lastname } = route.params;

    return (
        <View>
            <Text>First Name: {firstname}</Text>
            <Text>Last Name: {lastname}</Text>
            <Button title="Go Back" onPress={() => navigation.goBack()} />
        </View>
    );
};

export default BasicScreen1;
