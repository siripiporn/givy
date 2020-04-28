import React  from 'react';
import { View, TouchableOpacity, Image, Text, ScrollView } from 'react-native';
import { globalStyles } from '../styles/styleGlobal';
 import BuyProductScreen from '../rewards/buyProductScreen';
 import ChallengesScreen from '../challenges/challengesScreen';

export default function Story ({ navigation }) {
   
    return (
        <ScrollView  
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                 
                <View style={{marginLeft:16,}}>
                    <TouchableOpacity onPress ={() =>  navigation.navigate('ChallengesScreen')}  style={globalStyles.container_image_story}>
                   <Image style={globalStyles.image_story}  source={require("../images/story/promotion.png")}  /> 
                    </TouchableOpacity>
                    <View style={globalStyles.content_story}><Text style={globalStyles.content_story}>Promotion</Text></View>
                </View>
                <View >
                    <TouchableOpacity style={globalStyles.container_image_story}>
                        <Image style={globalStyles.image_story}  source={require("../images/story/storyimage1.png")}  />
                    </TouchableOpacity>
                    <View style={globalStyles.content_story}><Text style={globalStyles.content_story}>Menu</Text></View>
                </View>
                <View >
                    <TouchableOpacity style={globalStyles.container_image_story}>
                        <Image style={globalStyles.image_story} source={require("../images/story/storyimage2.png")}  />
                    </TouchableOpacity>
                    <View style={globalStyles.content_story}><Text style={globalStyles.content_story}>Testimonials</Text></View>
                </View>
            </ScrollView>
    )
}

