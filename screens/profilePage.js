import React from 'react';
import { StyleSheet, View, Image, Text, Button } from 'react-native';

const ProfilePage = props => {
    return (

        <View>
           <Text>Profile</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        flex: 1,
        flexDirection: 'row',
        marginVertical: 30,
        marginHorizontal: 5,
        justifyContent: 'center',

    },
    imagestar: {
        width: 20,
        height: 20,
    },
    contents: {
        color: 'white',
        marginHorizontal: 5,
    },




});

export default ProfilePage;
