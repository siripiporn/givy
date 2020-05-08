import React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/styleGlobal';
import QRCode from 'react-native-qrcode-svg';
import SelectFriendPage from './selectFriend'


export default function GiftDetailPage({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={{ flex: 0.5, flexDirection: 'row', marginHorizontal: 16, marginLeft: 16, marginTop: 30 }}>
                <Text style={globalStyles.h1}>Share with a friend or use the QR code to redeem at the store.</Text>
            </View>

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
                            <Text style={{ alignSelf: 'stretch', textAlign: 'left', fontSize: 14, color: 'white', fontFamily: 'gelion-bold' }}>+ 30 pts</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{ flex: 3, flexDirection: 'column', marginHorizontal: 16, marginLeft: 16, marginTop: 30 }}>
                <Text style={globalStyles.h5}>Share with a friend or use the QR code to redeem at the store.</Text>

                <View style={{ flexDirection: 'column', flex: 3, alignItems: 'center', marginTop: 30,}}>
                    <QRCode
                        value='https://www.facebook.com/groups/react.th/'
                        color={'#18E39C'}
                        backgroundColor={'#252A37'}
                        size={180}
                    />
                    <Text style={globalStyles.h4}>B102394</Text>
                </View>

            </View>
               <TouchableOpacity onPress ={() => navigation.navigate('SelectFriendPage')} style={{ borderRadius: 5, backgroundColor: '#18E39C', flex: 0.5, flexDirection: 'row', marginHorizontal: 16, marginRight: 16, marginBottom: 16 }}>
                <Text style={{ flexDirection: 'column', flex: 1, alignSelf: 'center', textAlign: 'left', marginHorizontal: 15, fontSize: 14, color: 'white', fontFamily: 'gelion-bold', }}>Send to Friend</Text>
                <Text style={{ flexDirection: 'column', flex: 1, alignSelf: 'center', textAlign: 'right', fontSize: 14, color: 'white', fontFamily: 'gelion-bold', marginRight: 15 }}>+ 30 pts</Text>
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
})

