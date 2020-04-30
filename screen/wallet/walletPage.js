import React  from 'react';
import { View, Text, Button} from 'react-native';
import DetailExplore from '../explore/detailExplore';

export default function WalletPage ({ navigation }) {
   
    return (
         <View>
             <Text>Wallet</Text>
            <Button title="Go To DetailExplore" onPress={() => navigation.navigate('DetailExplore')}/>
        </View>
    )
}

