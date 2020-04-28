import React  from 'react';
import { View, Text, Button} from 'react-native';
import DetailExplore from '../explore/detailExplore';

export default function ChatPage ({ navigation }) {
   
    return (
         <View>
             <Text>ChatPage</Text>
            <Button title="Go To DetailExplore" onPress={() => navigation.navigate('DetailExplore')}/>
        </View>
    )
}

