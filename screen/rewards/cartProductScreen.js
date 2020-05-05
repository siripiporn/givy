import React from 'react';
import { View, Text, Button, TouchableOpacity, Image, StyleSheet, SafeAreaView, ScrollView, ToastAndroid, TextInput, TouchableHighlight } from 'react-native';
import { globalStyles } from '../styles/styleGlobal';
import Coins from '../images/icons/coins.svg';
import BuyProductScreen from '../rewards/buyProductScreen';
import HomeScreen from '../homeScreen';


export default function CartProductScreen({ navigation }) {

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={{ marginHorizontal: 16 }}>
                        <Text style={styles.contentHeader}>Purchase Confirmation</Text>
                        <Text style={styles.content}>Are you sure you want to purchase this product?</Text>
                    </View>
                    <View>
                        <Image style={styles.Image} source={require('../images/products/bigProduct.png')} />
                    </View>
                    <View style={{ marginHorizontal: 16 }}>
                        <Text style={styles.contentDetail}>Mango Smoothie</Text>
                        <Text style={styles.content}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                    </View>
                    <View style={{ marginHorizontal: 16, borderWidth: 0.5, borderColor: '#3A4152', height: 60, marginTop: 20 }}>
                        <Text style={styles.contentSize}>Small</Text>

                    </View>

                    <View style={{ marginHorizontal: 16, marginTop: 30, height: 100 }}>

                        <View style={{ flex: 1, flexDirection: 'row', }} >

                            <View style={{ flex: 1, flexDirection: 'column', }}>
                                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={{ backgroundColor: '#E77369', borderRadius: 3, height: 50, marginRight: 3 }}>
                                    <Text style={{ color: 'white', fontSize: 18, fontFamily: 'gelion-bold', textAlign: 'center', marginTop: 13 }} >Cancel</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ flex: 1, flexDirection: 'column', }}>

                                <TouchableOpacity onPress={() => navigation.navigate('BuyProductScreen')} style={{ backgroundColor: '#18E39C', borderRadius: 3, height: 50, }}>

                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
                                        <Text style={{ color: 'white', fontSize: 18, fontFamily: 'gelion-bold', marginLeft: 15 }}>Buy
                                        </Text>

                                        <View style={{ color: 'white', fontSize: 18, fontFamily: 'gelion-bold', marginRight: 15, }}>
                                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                                <Text style={{ color: 'white', fontSize: 18, fontFamily: 'gelion-bold', paddingLeft: 2 }} >- </Text>
                                                <Text style={{ marginTop: 3 }}  ><Coins /></Text>
                                                <Text style={{ color: 'white', fontSize: 18, fontFamily: 'gelion-bold', paddingLeft: 5 }}  >80</Text>
                                            </View>
                                        </View>

                                    </View>

                                </TouchableOpacity>

                            </View>
                        </View>

                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>

    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#252A37',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',

    },
    container_box: {
        flex: 1, flexDirection: 'row'
    },
    Image: {
        width: 410,
        marginTop: 30,
    },
    contentHeader: {
        color: '#18E39C', fontSize: 20, marginTop: 20, fontFamily: 'gelion-bold',
    },
    content: {
        color: '#fff', fontSize: 15,
    },
    contentDetail: {
        color: '#fff', fontSize: 20, fontFamily: 'gelion-bold',
    },
    contentSize: {
        color: '#fff', fontSize: 20, fontFamily: 'gelion-bold',
        marginHorizontal: 10, marginTop: 15,
    }

}) 