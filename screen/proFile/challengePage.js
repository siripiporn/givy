import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';
import DetailExplore from '../explore/detailExplore';

export default function ChallengePage ({ navigation }) {
   
    return (
        <View style={styles.container}>
        <SafeAreaView>
            <ScrollView>
                <View style={{flex: 1, flexDirection: 'column', width: 343, marginVertical: 16}}>
                <View style={{ height: 50, height:123,borderRadius: 3, backgroundColor: '#303540'}} >
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between',marginHorizontal: 16, marginTop: 16}}>
                        <Image style={{width: 32, height: 32, marginTop: 0}} source={require("../images/Profile/logo.png")} />
                        <View style={{marginRight: 5}}>
                            <Text style={{color: '#18E39C'}}>REWARD</Text>
                            <Text style={{color: '#fff'}}>
                                <Text>+</Text>
                                <Text style={{fontSize: 18, fontWeight: 'bold'}}>100</Text>
                                <Text style={{color: '#EFEFEF'}}> Point</Text>
                            </Text>
                        </View>
                    </View>
                    <View  style={{flex: 1, flexDirection: 'row', marginHorizontal: 16}}>
                        <View style={{flex: 1, flexDirection: 'column'}}>
                            <Text style={{fontSize: 18, color: '#fff', fontWeight: 'bold'}}>GET STARTED <Text style={{color: '#18E39C'}}>3/3</Text></Text>
                            <View style={{flexDirection:'row', justifyContent: "space-between"}}>
                                <Text style={{color: '#18E39C'}}>Expires November 23, 2020</Text>
                                <Image style={{marginTop: 5}} source={require("../images/Profile/pulldown.png")} />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ height: 50, borderRadius: 3, backgroundColor: '#303540', marginTop: 5, flex: 1,flexDirection: 'column', justifyContent: 'space-between'}}>
                    <View style={{marginLeft: 10, marginTop: 7, fontWeight: 'bold', flexDirection: 'row'}}>
                        <Text style={{color: '#18E39C'}}>0/1</Text>
                        <Text> Rewards used</Text>
                    </View>
                    <View style={{ height: 5, backgroundColor: '#50596D'}}></View>
                </View>

                <View style={{ height: 50, borderRadius: 3, backgroundColor: '#303540', marginTop: 5, flex: 1,flexDirection: 'column', justifyContent: 'space-between'}}>
                    <View style={{marginLeft: 10, marginTop: 7, fontWeight: 'bold', flexDirection: 'row'}}>
                        <Text style={{color: '#18E39C'}}>0/1</Text>
                        <Text> Rewards used</Text>
                    </View>
                    <View style={{ height: 5, backgroundColor: '#50596D'}}></View>
                </View>

                <View style={{ height: 50, borderRadius: 3, backgroundColor: '#303540', marginTop: 5, flex: 1,flexDirection: 'column', justifyContent: 'space-between'}}>
                    <View style={{marginLeft: 10, marginTop: 7, fontWeight: 'bold', flexDirection: 'row'}}>
                        <Text style={{color: '#18E39C'}}>0/1</Text>
                        <Text> Rewards used</Text>
                    </View>
                    <View style={{ height: 5, backgroundColor: '#50596D'}}></View>
                </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    </View>
    )
}

const SettingPageCSS = { 
    container: 343,
    color: "rgba(24, 227, 156, 1)",
    h1: 36,
    h2: 15,
    bg: '#252A37'
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginHorizontal: 16,
      backgroundColor: SettingPageCSS.bg
    },
    Block:{
        marginTop: 30,
        backgroundColor: '#252A37',
        maxWidth: SettingPageCSS.container,
        height: 140,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    SecoundContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        fontSize: 15,
        paddingLeft: 10
    },
    HeaderText:{
        color: '#fff',
        fontFamily: 'Arialic',
        fontSize: SettingPageCSS.h1,
        textAlign: 'left',
        paddingLeft: 10,
        color: SettingPageCSS.color,
        marginBottom: 30,
    },
    SecoundText:{
        color: '#fff',
        fontSize: SettingPageCSS.h2,
        marginBottom: 15,
    },
    HightLightText: {
        color: SettingPageCSS.color,
        fontSize: SettingPageCSS.h2
    }
});
  
