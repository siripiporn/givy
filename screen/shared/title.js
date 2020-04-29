import React  from 'react';
import { View, Image, Text, Button } from 'react-native';
import { globalStyles } from '../styles/styleGlobal';
import BuyProductScreen from '../rewards/buyProductScreen';

export default function Title ({ navigation }) {
   
    return (
           <View style={globalStyles.container_title}>
            <Text style={globalStyles.contents_title}>
            get.fresh</Text>
                {/* <Button title="BuyProductScreen" onPress={() => navigation.navigate('BuyProductScreen')}/> */}
        </View>
        
    )
}

