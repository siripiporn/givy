import React from 'react';
import { View, Image, Text } from 'react-native';
import { globalStyles } from '../styles/styleGlobal';

const Title = () => {
    return (
        <View style={globalStyles.container_title}>
            <Text style={globalStyles.contents_title}>
                <Image style={globalStyles.imagestar_title} source={require("../assets/images/star.jpg")} /> getfresh</Text>
        </View>
    )
}
 
export default Title;
