import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';


export default class Point extends Component {
    render() {
        return (
        

<View style={styles.container}>
                <Text>Point</Text>
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

    },
    imagestar: {
        width: 20,
        height: 20,
    },
    contents: {
        color: 'white',
        marginHorizontal: 5,
    },
    logo: {
        marginLeft: 10,
        width: 100,
        height: 100,
        borderRadius: 50
    },

 

});

