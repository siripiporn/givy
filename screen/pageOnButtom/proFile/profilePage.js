import React  from 'react';
import { View, Text, Button} from 'react-native';
import DetailExplore from '../explore/detailExplore';

export default function ProfilePage ({ navigation }) {
   
    return (
         <View>
             <Text>ProfilePage</Text>
            <Button title="Go To ProfilePage" onPress={() => navigation.navigate('DetailExplore')}/>
        </View>
    )
}

