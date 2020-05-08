import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import SearchBar from '../shared/searchBox'
import GiftDetailPage from '../proFile/giftDetailPage'
import { globalStyles } from '../styles/styleGlobal';

export default function ItemsPage({ navigation }) {

    return (

        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={{ flex: 0.1, flexDirection: 'row', }}>
                        <SearchBar />
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('GiftDetailPage')}>
                        <View style={{ flex: 2, flexDirection: 'row', }}>
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

                                    <View style={{ flex: 2, }}>
                                        <View style={globalStyles.small_box_item}>
                                            <Text style={globalStyles.content_box_item}>1</Text>
                                        </View></View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('GiftDetailPage')}>
                        <View style={{ flex: 2, flexDirection: 'row', }}>
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

                                    <View style={{ flex: 2, }}>
                                        <View style={globalStyles.small_box_item}>
                                            <Text style={globalStyles.content_box_item}>1</Text>
                                        </View></View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('GiftDetailPage')}>
                        <View style={{ flex: 2, flexDirection: 'row', }}>
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

                                    <View style={{ flex: 2, }}>
                                        <View style={globalStyles.small_box_item}>
                                            <Text style={globalStyles.content_box_item}>1</Text>
                                        </View></View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
 
const styles = StyleSheet.create({
    container: {

        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#252A37',
        marginHorizontal: 16,

    },
     

})