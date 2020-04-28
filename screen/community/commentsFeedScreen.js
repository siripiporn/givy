import React  from 'react';
import { View, Text, Button} from 'react-native';
 

export default function CommentsFeedScreen ({ navigation }) {
   
    return (
         <View>
             <Text>CommentsFeedScreen</Text>
             <Button title="Go to Home" onPress={() => navigation.navigate('RewardsScreen')}/>
             
        </View>
    )
}

 