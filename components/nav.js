import React, { Component } from 'react';
import { View,  Text,TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/styleGlobal';
import Seemore from '../assets/images/icons/icon_seemore.svg';
import Location from '../assets/images/icons/location.svg';
import Call from '../assets/images/icons/call.svg';


export default class Nav extends Component {
    render() {
        return (

            <View style={globalStyles.container_nav}>
              <TouchableOpacity style={globalStyles.order_buttom_nav}>
              <Text style={globalStyles.buttom_content}>Order</Text>
              </TouchableOpacity>
              <TouchableOpacity style={globalStyles.call_nav}>
                  <Text style={globalStyles.callcontents_nav}><Call /></Text>
              </TouchableOpacity>
              <TouchableOpacity style={globalStyles.location_nav}>
              <Text style={globalStyles.locationcontents_nav}> <Location />   </Text>
              </TouchableOpacity> 
              <TouchableOpacity style={globalStyles.iconsee_nav}>
                  <Text style={globalStyles.iconseetext_nav}><Seemore /></Text>
              </TouchableOpacity>
            </View>
        )
    }
} 