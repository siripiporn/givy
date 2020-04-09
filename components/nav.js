import React, { Component } from 'react';
import { StyleSheet, View,  Text,TouchableOpacity,Image } from 'react-native';
 


export default class Nav extends Component {
    render() {
        return (

            <View style={styles.container}>
              <TouchableOpacity style={styles.heart}>
                  <Text style={styles.contents}>Heart</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.booking}>
                  <Text style={styles.bookingcontents}>Booking</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.call}>
                  <Text style={styles.callcontents}>Call</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.location}>
                  <Image source={require('../assets/images/location.svg')} />
              </TouchableOpacity>
              
            </View>


        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 5,
    },
    heart:{
        marginTop: 10,
        marginHorizontal: 10,
        paddingVertical: 10,
        borderColor:'#50596D',
        borderRadius: 5,
        borderWidth:1.5,
        width: 75,   
    },
    booking:{
        marginTop: 10,
        marginHorizontal: 10,
        paddingVertical: 10,
        borderColor:'#50596D',
        borderRadius: 5,
        borderWidth:1.5,
        width: 100,   
    },
    bookingcontents:{
        color: 'white',
        marginHorizontal: 22,
    },
    call:{
        marginTop: 10,
        marginHorizontal: 10,
        paddingVertical: 10,
        borderColor:'#50596D',
        borderRadius: 5,
        borderWidth:1.5,
        width: 50,   
    },
    callcontents:{
        color: 'white',
        marginHorizontal: 10,
    },
    location:{
        marginTop: 10,
        marginHorizontal: 10,
        paddingVertical: 10,
        borderColor:'#50596D',
        borderRadius: 5,
        borderWidth:1.5,
        width: 100,   
    },
    locationcontents:{
        color: 'white',
        marginHorizontal: 20,
    },
    imagestar: {
        width: 20,
        height: 20,
    },
    contents: {
        color: 'white',
        marginHorizontal: 16,
    },
    logo: {
        marginLeft: 10,
        width: 100,
        height: 100,
        borderRadius: 50
    },



});

