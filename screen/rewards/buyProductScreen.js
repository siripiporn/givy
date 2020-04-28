import React  from 'react';
import { View, Text, Button} from 'react-native';
import  CartProductScreen from '../rewards/cartProductScreen';

export default function BuyProductScreen ({ navigation }) {
   
    return (
         <View>
             <Text>BuyProductScreen</Text>
           
             <Button title="Go to Buy Cart" onPress={() => navigation.navigate('CartProductScreen')}/>
        </View>
    )
}

 