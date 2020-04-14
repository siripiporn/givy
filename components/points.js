import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/styleGlobal';
import BasketIcon from '../assets/images/icons/basket.svg';
import CoinIcon from '../assets/images/icons/coin.svg';
import Rectangle from '../assets/images/icons/rectangle.svg';



export default class Point extends Component {
    render() {
        return (

            <View style={globalStyles.container_point}>
                <TouchableOpacity>
                    <Text style={globalStyles.rectangle_point}> <Rectangle /> </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={globalStyles.coinIcon_point}> <CoinIcon /></Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={globalStyles.basketIcon_point}>  <BasketIcon /></Text>
                </TouchableOpacity>
            </View>


        )
    }
}
