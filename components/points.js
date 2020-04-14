import React, { Component } from 'react';
import { StyleSheet, View, Image, Text,TouchableOpacity } from 'react-native';
import BasketIcon from '../assets/images/icons/basket.svg';
import CoinIcon from '../assets/images/icons/coin.svg';
import Rectangle from '../assets/images/icons/rectangle.svg';



export default class Point extends Component {
    render() {
        return (
        

            <View style={styles.container}>
            <TouchableOpacity>
                <Text style={styles.rectangle}> <Rectangle /> </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.coinIcon}> <CoinIcon /></Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.basketIcon}>  <BasketIcon /></Text>
            </TouchableOpacity>
        </View>
                 
             
        )
    }
}
 
const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        flex: 1,
        flexDirection: 'row',
        marginVertical: 20,
        marginHorizontal: 10,

    },
    rectangle: {
        marginHorizontal: 5,
    },
    coinIcon: {
        marginHorizontal: 20,
    },
    basketIcon: {
        marginHorizontal: 10,
    }

});
