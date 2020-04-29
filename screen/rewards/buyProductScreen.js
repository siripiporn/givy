import React from 'react';
import { View, Text, Button, TouchableOpacity, Image, StyleSheet, SafeAreaView, ScrollView, ToastAndroid, TextInput, TouchableHighlight } from 'react-native';
import { globalStyles } from '../styles/styleGlobal';
import Coins from '../images/icons/coins.svg';


export default function BuyProductScreen({ navigation }) {
    const [value, onChangeText] = React.useState();
    const [count, setCount] = React.useState(1);


    const increment = () => {
        setCount(count + 1);

    };
    const decrement = () => {
        setCount(count - 1);

    };

    return (

        <View style={{ flex: 1, backgroundColor: 'grey' }}>
            <View style={{ flex: 1, backgroundColor: '#303540' }}>
                <SafeAreaView>
                    <ScrollView>
                        <View style={styles.container}>
                            <View style={{ flexDirection: 'column', flex: 1, marginTop: 30, }}>
                                <View style={{ height: 100, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16 }}>
                                    <Text style={styles.contents}> Order Summary</Text>
                                    <TouchableOpacity style={styles.button}>
                                        <Text style={styles.buttomContents}>Add More</Text>
                                    </TouchableOpacity>
                                </View>
                                {/* Box detail Product */}
                                <View style={styles.container_detailProduct}>
                                    <Text style={styles.contents_detailProduct}>Mango Smoothie</Text>
                                    <View style={styles.container_size}>
                                        <View style={styles.container_sizebox}>
                                            <Text style={styles.contents_size}>Small</Text>
                                            <Text style={styles.content_number}>+ 0</Text>
                                        </View>
                                        <View style={styles.container_number_coins}>
                                            <Coins />
                                            <Text style={styles.number_coins}>80</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', }}>
                                            <TextInput
                                                style={styles.box_inputs}
                                                onChangeText={text => onChangeText(text)}
                                                placeholder={'Add note for customization'}
                                                value={value}
                                            />
                                        </View>
                                        {/* Box add On */}
                                        <View style={{ flexDirection: 'row', }}>
                                            <View style={styles.container_select}>
                                                <View><Text style={styles.content_delete}>Delete</Text></View>
                                                <View style={styles.box_select}>
                                                    <View style={{ flex: 1, flexDirection: 'row', }}>
                                                        <TouchableOpacity style={{ height: 50, }} onPress={decrement}>
                                                            <Text style={styles.box_decrement}> - </Text>
                                                        </TouchableOpacity>
                                                        <Text style={{ color: 'white', marginTop: 15, width: 50 }}>  {count !== 0 ? count : null}</Text>
                                                        <TouchableOpacity onPress={increment}>
                                                            <Text style={styles.box_increment}> + </Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>

            {/* Box Check Out */}
            <TouchableOpacity>
                <View style={styles.container_buttom}>
                    <View style={styles.container_boxsmall}>
                        <View style={styles.green_box}>
                            <View style={styles.small_box}>
                                <Text style={styles.content_box}>1</Text>
                            </View>
                            <Text style={styles.content_checkOut} > Check out</Text>
                            <View style={styles.box_coins}>
                                <Coins />
                                <Text style={styles.content_coins}>80</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#252A37',
        flexDirection: 'row',
    },
    container_select: {
        flexDirection: 'row', flex: 1, justifyContent: 'space-between', marginHorizontal: 16, marginTop: 16,
    },
    box_decrement: {
        color: 'white', fontSize: 20, marginLeft: 15, marginTop: 10, width: 50
    },
    box_increment: {
        color: 'white', fontSize: 16, marginTop: 15, marginRight: 50, width: 50
    },
    box_select: {
        backgroundColor: '#50596D', width: 150, height: 50, borderRadius: 3
    },
    content_delete: {
        color: '#E77369', fontSize: 18, fontFamily: 'gelion-bold', marginTop: 15
    },
    container_detailProduct: {
        backgroundColor: '#21242E', height: 230,
    },
    contents_detailProduct: {
        color: 'white', fontSize: 20, paddingTop: 20, fontFamily: 'gelion-bold', marginHorizontal: 16,
    },
    container_size: {
        flexDirection: 'column', flex: 1
    },
    content_number: {
        color: 'white', fontSize: 16, fontFamily: 'gelion-bold', marginRight: 16,
    },
    contents_size: {
        color: 'white', fontSize: 16, fontFamily: 'gelion-bold', marginHorizontal: 16,
    },
    container_sizebox: {
        flexDirection: 'row', justifyContent: 'space-between'
    },
    container_number_coins: {
        flexDirection: 'row', justifyContent: 'flex-end', marginRight: 16,
    },
    container_buttom: {
        backgroundColor: '#21242E', height: 90,
    },
    container_boxsmall: {
        flexDirection: 'row', flex: 1, alignItems: 'center',
    },
    number_coins: {
        color: 'white', marginLeft: 5 ,
    },
    green_box: {
        marginHorizontal: 16, marginTop: 5, flex: 1, flexDirection: 'row', backgroundColor: '#18E39C', borderRadius: 3, justifyContent: 'space-between'
    },
    small_box: {
        height: 50, backgroundColor: '#fff', height: 30, width: 30, margin: 15, marginTop: 20,  
    },
    content_box: {
        textAlign: 'center', marginTop: 4,fontSize: 18, color: '#18E39C', fontFamily: 'gelion-bold',
    },
    content_checkOut: {
        height: 50, marginTop: 22, fontSize: 20, color: 'white', fontFamily: 'gelion-bold'
    },
    box_coins: {
        flexDirection: 'row', justifyContent: 'flex-end', marginTop: 28
    },
    content_coins: {
        color: 'white', marginLeft: 5, marginRight: 10, fontSize: 18, fontFamily: 'gelion-bold', 
    },
    box_inputs: {
        height: 50, marginHorizontal: 16, width: 380, backgroundColor: '#303540', color: 'white', textAlign: 'center', marginTop: 5,
    },
    textInput: {
        backgroundColor: '#303540',
        fontSize: 18,
        flex: 1, color: 'white',
        height: 30,
    },
    button: {
        paddingVertical: 10,
        borderColor: '#50596D',
        borderRadius: 5,
        borderWidth: 1.5,
        width: 120,
        height: 40
    },
    buttomContents: {
        fontSize: 15,
        fontFamily: 'gelion-bold',
        color: 'white',
        textAlign: 'center',
        alignItems: 'center'
    },
    contents: {
        height: 50, fontSize: 20,
        fontFamily: 'gelion-bold', color: 'white'
    }

}) 