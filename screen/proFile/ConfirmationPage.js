import React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/styleGlobal';

export default function ConfirmationPage({ navigation }) {

    return (
        <View style={styles.container} >
            <Text style={globalStyles.greenFont}>SHARE</Text>

            <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 16, marginLeft: 16, }}>
                <View style={globalStyles.container_comming_item}>
                    <View style={globalStyles.container_box1_item}>
                        <Image style={globalStyles.image_item} source={require("../images/Profile/coffee.png")} />
                        <View style={{ flex: 5, marginTop: 18, }}>
                            <Text style={globalStyles.h1}>Iced Cappucino</Text>
                            <View style={{ flex: 0.7, flexDirection: 'row' }}>
                                <Image style={globalStyles.circle_item} source={require('../images/Profile/logo.png')} />
                                <Text style={globalStyles.h3}>getfresh</Text>
                            </View>
                            <Text style={globalStyles.h4}> Expires Oct 20,2020</Text>

                        </View>
                        <View style={{ flex: 2, flexDirection: 'row', marginTop: 75 }}>
                            <Text style={globalStyles.contents_box}>+ 30 pts</Text>
                        </View>
                    </View>
                </View>
            </View>
 
            <Text style={globalStyles.greenFont}>TO</Text>
          
            <View onPress={() => navigation.navigate('ConfirmationPage')} style={styles.container_box}>
                <View style={globalStyles.container_comments_profile}>
                    <View>
                        <Image style={globalStyles.circle_small_profile}
                            source={require("../images/Profile/Getfresh.png")} />
                    </View>
                    <View style={{ margin: 16 }}>
                        <Text style={globalStyles.h6}>Michel Lopez</Text>
                        <Text style={globalStyles.h6}>@michel.lopez</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={{ borderRadius: 5, backgroundColor: '#18E39C', flex: 0.4, flexDirection: 'row', marginHorizontal: 16, marginRight: 16, marginBottom: 16 }}>
                <Text style={{ flexDirection: 'column', flex: 1, alignSelf: 'center', textAlign: 'center', marginHorizontal: 15, fontSize: 14, color: 'white', fontFamily: 'gelion-bold', }}>Confirm + 30 pts</Text>
               
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#252A37',

    },
  
    container_box: {
        flex: 2,
        flexDirection: 'row',
        marginHorizontal: 16,
        marginRight: 16,
    
    },
 
})