import React from 'react';
import { View, Text, TouchableOpacity,Button } from 'react-native';
import { globalStyles } from '../styles/styleGlobal';
 import Basket from '../images/points/basket.svg';
 import Coins from '../images/points/coins.svg';
import Lavel from '../images/points/lavel.svg';
import BuyProductScreen from '../rewards/buyProductScreen';
import HomeCommunityFeedScreen from '../community/homeCommunityFeedScreen';

export default function PointComponent ({ navigation }) {
   
    return (
        <View style={globalStyles.container_point}>
        <TouchableOpacity>
            <Text style={globalStyles.rectangle_point}> <Lavel /> </Text>
            {/* <Button title="Go to Buy Home" onPress={() => navigation.navigate('HomeCommunityFeedScreen')}/> */}
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

 