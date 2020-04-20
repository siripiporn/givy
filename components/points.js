import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/styleGlobal';
import BasketIcon from '../assets/images/icons/basket.svg';
 import Basket from '../assets/images/points/basket.svg';
 import Coins from '../assets/images/points/coins.svg';
import Lavel from '../assets/images/points/lavel.svg';



export default class Point extends Component {
    render() {
        return (

            <View style={globalStyles.container_point}>
                <TouchableOpacity>
                    <Text style={globalStyles.rectangle_point}> <Lavel /> </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                <Text style={globalStyles.rectangle_point}> <Coins /> </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={globalStyles.basketIcon_point}>  <Basket /></Text>
                </TouchableOpacity>
            </View>


        )
    }
}
