import React, { Component } from 'react';
import { StyleSheet, View,  Text,TouchableOpacity,Image } from 'react-native';
import Logo from '../assets/images/icons/heart.svg';
import SelectIcon from '../assets/images/icons/select.svg';
import Location from '../assets/images/icons/location.svg';
import Call from '../assets/images/icons/call.svg';


export default class Nav extends Component {
    render() {
        return (

            <View style={styles.container}>
              <TouchableOpacity style={styles.heart}>
                  <Text style={styles.heartcontents}><Logo  /> </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.booking}>
                  <Text style={styles.bookingcontents}>Booking</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.call}>
                  <Text style={styles.callcontents}><Call /></Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.location}>
              <Text style={styles.locationcontents}> <Location />   </Text>
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
        marginHorizontal: 1,
    },
    heart:{
        marginTop: 10,
        marginHorizontal: 10,
        paddingVertical: 10,
        borderColor:'#50596D',
        borderRadius: 5,
        borderWidth:1.5,
        width: 80,   
    },
    heartcontents:{
        color: 'white',
        marginHorizontal: 20,
    
        
    },
    booking:{
        marginTop: 10,
        marginHorizontal: 10,
        paddingVertical: 10,
        borderColor:'#50596D',
        borderRadius: 5,
        borderWidth:1.5,
        width: 100,   
        justifyContent: 'center'
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
        width: 75,    
    },
    callcontents:{
        color: 'white',
        marginHorizontal: 29,
        paddingVertical: 5,
    },
    location:{
        marginTop: 10,
        marginHorizontal: 15,
        paddingVertical: 10,
        borderColor:'#50596D',
        borderRadius: 5,
        borderWidth:1.5,
        width: 70,   
         
    },
    locationcontents:{
        color: 'white',
        marginHorizontal: 25,
         paddingVertical: 2,
     
    },
    imagestar: {
        width: 20,
        height: 20,
    },
    contents: {
        color: 'white',
        marginHorizontal: 16,
        paddingVertical: 5,
    },
    logo: {
        marginLeft: 10,
        width: 100,
        height: 100,
        borderRadius: 50
    },



});

