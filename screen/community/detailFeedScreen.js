import React  from 'react';
import { View, Text, Button} from 'react-native';
import CommentsFeedScreen from '../community/commentsFeedScreen';

export default function DetailFeedScreen ({ navigation }) {
   
    return (
         <View>
             <Text>DetailFeedScreen</Text>
             <Button title="Go to CommentFeed" onPress={() => navigation.navigate('CommentsFeedScreen')}/>
             
        </View>
    )
}

 