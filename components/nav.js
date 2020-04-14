import React, { Component } from 'react';
import { View,  Text,TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/styleGlobal';
import Logo from '../assets/images/icons/heart.svg';
import Location from '../assets/images/icons/location.svg';
import Call from '../assets/images/icons/call.svg';


export default class Nav extends Component {
    render() {
        return (

            <View style={globalStyles.container_nav}>
              <TouchableOpacity style={globalStyles.heart_nav}>
                  <Text style={globalStyles.heartcontents_nav}><Logo  /> </Text>
              </TouchableOpacity>
              <TouchableOpacity style={globalStyles.booking_nav}>
                  <Text style={globalStyles.bookingcontents_nav}>Booking</Text>
              </TouchableOpacity>
              <TouchableOpacity style={globalStyles.call_nav}>
                  <Text style={globalStyles.callcontents_nav}><Call /></Text>
              </TouchableOpacity>
              <TouchableOpacity style={globalStyles.location_nav}>
              <Text style={globalStyles.locationcontents_nav}> <Location />   </Text>
              </TouchableOpacity> 
            </View>
        )
    }
} 