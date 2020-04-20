import React from 'react';
import { View, Image, Text, TouchableOpacity, Linking,Button } from 'react-native';
import { globalStyles } from '../styles/styleGlobal';

const About = props => {
    return (
        <View >
                 
                <View style={globalStyles.container_brand}>
                    <Image style={globalStyles.logo_brand} source={require("../assets/images/logo.jpg")} />
                    <View style={globalStyles.discretion_brand}>
                        <Text style={globalStyles.contents_name_brand}>Getfresh</Text>
                        <Text style={globalStyles.contents_category}>Healthy Food</Text>
                       
                        <View style={globalStyles.container_buttom}>
                            <TouchableOpacity style={globalStyles.buttom_subscribe}><Text style={globalStyles.text_subscribe}>SUBSCRIBE</Text></TouchableOpacity>
                            <View style={{ height: 50, }}  ><Text style={globalStyles.text_members}>200 MONTHLY MEMBERS</Text></View>
                        </View>
                    </View>
                </View>
                <View style={globalStyles.discretion_detail}>
                    <Text style={globalStyles.contents_text}>Simple.Notural.Delicious</Text>
                    <Text style={globalStyles.contents_text}>At getfresh we believe that eating fresh food, knowing where it comes from and how it’s prepared directly influences your health and the environment.</Text>
                    <Text style={globalStyles.contents_text}>www.getfresh.com <Text onPress={() => Linking.openURL('www.google.com')}>See more..</Text> </Text>
                </View>
            </View>
    )
}
 
export default About;
