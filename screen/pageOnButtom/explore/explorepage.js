import React  from 'react';
import { View, Text, Button} from 'react-native';
import DetailExplore from '../explore/detailExplore';

export default function ExplorePage ({ navigation }) {
   
    return (
         <View>
             <Text>ExplorePage</Text>
            <Button title="Go To ExplorePage" onPress={() => navigation.navigate('DetailExplore')}/>
        </View>
    )
}

