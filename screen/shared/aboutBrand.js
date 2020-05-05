import React  from 'react';
import { View, Image, Text, TouchableOpacity, Linking,  } from 'react-native';
import { globalStyles } from '../styles/styleGlobal';
 

export default function AboutBrand ({ navigation }) {
   
    return (
        <View >
                 
                <View style={globalStyles.container_brand}>
                     <View style={{flex: 1,flexDirection:'row', justifyContent:'space-between'}}>
                     <View style={globalStyles.circle} >
                            <Image style={globalStyles.circle_small} source={require("../images/logo/getfresh.png")} />
                        </View>
                     {/* <Image style={globalStyles.logo_brand} source={require("../images/logo/logo.png")} /> */}
                     <View>
                            <TouchableOpacity style={globalStyles.buttom_subscribe}><Text style={globalStyles.text_subscribe}>FOLLOW</Text></TouchableOpacity>
                        </View>
                     </View>
                </View>
                <View>
                        <Text style={globalStyles.contents_name_brand}>Getfresh</Text>
                        <Text style={globalStyles.contents_category}>Healthy Food</Text>
                       
 
                    </View>
                <View style={globalStyles.discretion_detail}>
                    <Text style={globalStyles.contents_text}>Simple.Notural.Delicious</Text>
                    <Text style={globalStyles.contents_text}>At getfresh we believe that eating fresh food, knowing where it comes from and how it’s prepared directly influences your health and the environment.</Text>
                    <Text style={globalStyles.contents_text}>www.getfresh.com <Text onPress={() => Linking.openURL('www.google.com')}>See more..</Text> </Text>
                </View>
            </View>
    )
}

