import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';
import SearchBar from '../shared/searchBox'


export default function ItemsPage({ navigation }) {

    return (

        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={{ flex: 0.1, flexDirection: 'row', }}>
                        <SearchBar />
                    </View>

                    <View style={{ flex: 2, flexDirection: 'row', }}>
                        <View style={styles.container_comming}>
                            <View style={styles.container_box1}>
                                <Image style={styles.image} source={require("../images/Profile/coffee.png")} />
                                <View style={{ flex: 5, marginTop: 18, }}>
                                   <Text style={sentingActivityPage.h1}>Iced Cappucino</Text> 
                                    <View style={{ flex: 0.7, flexDirection: 'row' }}>
                                        <Image style={styles.circle} source={require('../images/Profile/logo.png')} />  
                                        <Text style={sentingActivityPage.h3}>getfresh</Text>
                                    </View>
                                    <Text style={sentingActivityPage.h4}> Expires Oct 20,2020</Text> 
                                </View>
                                    
                                <View style={{ flex: 1.5, }}>
                                <View style={styles.small_box}>
                                <Text style={styles.content_box}>1</Text>
                            </View></View>
                            </View>
                        </View>
                    </View>

                    <View style={{ flex: 2, flexDirection: 'row', }}>
                        <View style={styles.container_comming}>
                            <View style={styles.container_box1}>
                                <Image style={styles.image} source={require("../images/Profile/smoothie.png")} />
                                <View style={{ flex: 5, marginTop: 18, }}>
                                   <Text style={sentingActivityPage.h1}>Iced Cappucino</Text> 
                                    <View style={{ flex: 0.7, flexDirection: 'row' }}>
                                        <Image style={styles.circle} source={require('../images/Profile/logo.png')} />  
                                        <Text style={sentingActivityPage.h3}>getfresh</Text>
                                    </View>
                                    <Text style={sentingActivityPage.h4}> Expires Oct 20,2020</Text> 
                                </View>
                                    
                                <View style={{ flex: 1.5, }}>
                                <View style={styles.small_box}>
                                <Text style={styles.content_box}>1</Text>
                            </View></View>
                            </View>
                        </View>
                    </View>

                    <View style={{ flex: 2, flexDirection: 'row', }}>
                        <View style={styles.container_comming}>
                            <View style={styles.container_box1}>
                                <Image style={styles.image} source={require("../images/Profile/coffee.png")} />
                                <View style={{ flex: 5, marginTop: 18, }}>
                                   <Text style={sentingActivityPage.h1}>Iced Cappucino</Text> 
                                    <View style={{ flex: 0.7, flexDirection: 'row' }}>
                                        <Image style={styles.circle} source={require('../images/Profile/logo.png')} />  
                                        <Text style={sentingActivityPage.h3}>getfresh</Text>
                                    </View>
                                    <Text style={sentingActivityPage.h4}> Expires Oct 20,2020</Text> 
                                </View>
                                    
                                <View style={{ flex: 1.5, }}>
                                <View style={styles.small_box}>
                                <Text style={styles.content_box}>1</Text>
                            </View></View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const sentingActivityPage = {

    h1: {
        fontSize: 16,
        color: 'white',
        fontFamily: 'gelion-bold',
        marginLeft: 10

    },

    h2: {
        fontSize: 16,
        color: '#575B65',
        fontFamily: 'gelion-bold',
    },
    h3: {
        fontSize: 16,
        color: '#18E39C',
        fontFamily: 'gelion-bold',
    
    },
    h4: {
        fontSize: 12,
        color: 'white',
        fontFamily: 'gelion-bold',
        marginLeft: 9,
  

    }


}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#252A37',
        marginHorizontal: 16,
    
    },
    container_comming: {
        flex: 5, flexDirection: 'row', padding: 4
    },

    container_box1: {
        flex: 5,
        flexDirection: 'row',
        backgroundColor: '#303540',
        height: 110,

        justifyContent: 'space-between'
    },
    image: {
        width: 110,
        height: 110,
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 100 / 1,

        marginLeft: 10

    },
    small_box: {
        height: 50, 
        backgroundColor: '#18E39C', 
        height: 30, width: 30, 
        margin: 15,  
        borderRadius:3,
    },
    content_box: {
        textAlign: 'center', marginTop: 4,fontSize: 18, color: '#fff', fontFamily: 'gelion-bold',
    },

})