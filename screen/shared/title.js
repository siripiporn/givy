import React  from 'react';
import { View,  Image} from 'react-native';
import { globalStyles } from '../styles/styleGlobal';
 

export default function Title ({ navigation }) {
   
    return (
           <View style={globalStyles.container_title}>
            <Image style={globalStyles.imageTitle}  source={require("../images/title/header.png")} />
        </View>
        
    )
}

