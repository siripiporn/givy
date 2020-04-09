import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';


export default class title extends Component {
    render() {
        return (

            <View style={styles.container}>
                <Text style={styles.contents}>
                <Image style={styles.imagestar} source={require("../assets/images/star.jpg")} /> getfresh</Text>
            </View>


        )
    }
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

