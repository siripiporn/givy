import React from 'react';
import { View, Text, Button, TouchableOpacity, Image, StyleSheet, SafeAreaView, ScrollView, ToastAndroid, TextInput, TouchableHighlight } from 'react-native';
import { globalStyles } from '../styles/styleGlobal';
import HeartBlack from '../images/icons/heartBlack.svg'
import Coins from '../images/icons/coins.svg'
import RadioForm from 'react-native-simple-radio-button';
 



var size = [
    { label: "Small", value: 'Small' },
    { label: "Medium", value: 'Medium' },
    { label: "Large", value: 'Large' },
];


const price = 300;
const price_sale = 100;
const name_product = 'Ice Cappucino';

export default function DetailOrder({ navigation }) {
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
            <View style={{ flex: 1, backgroundColor: 'red' }}>
                <SafeAreaView>
                    <ScrollView>

                        <View style={styles.container}>
                            <Image style={styles.Image} source={require('../images/products/bigProduct.png')} />
                            <TouchableOpacity style={styles.iconsHeart}>
                                <HeartBlack />
                                <Text style={styles.content_detailProduct}>Save</Text>
                            </TouchableOpacity>
                            <View style={styles.borderBox}></View>
                            <View style={styles.container_boxText}>
                                <View style={styles.boxCoin}><Coins /></View>
                                <Text style={styles.contentPrice}>80</Text>
                            </View>
                            <View style={styles.container_textDetail}>
                                <Text style={styles.textDetail_big}>Mango Smoothie</Text>
                                <Text style={styles.textDetail_small}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum </Text>
                            </View>
                            <View style={styles.borderBox}></View>
                            <View style={styles.container_boxText}>
                                <Text style={styles.textBuy_big}>Size
                               <Text style={styles.textBuy_small}> (Pick 1)
                               </Text>
                                </Text>
                            </View>

                            <View style={styles.container_radioBox}>
                                <View style={styles.radio}>
                                    <RadioForm
                                        radio_props={size}
                                        initial={0}
                                        //   onPress={(value) => {ToastAndroid.show(value.toString(), ToastAndroid.SHORT)}}
                                        onPress={(value) => { }}
                                        buttonSize={10}
                                        buttonOuterSize={20}
                                        selectedButtonColor={'white'}
                                        selectedLabelColor={'white'}
                                        labelStyle={{ fontSize: 16, color: 'white', marginBottom: 6 }}
                                        disabled={false}
                                        formHorizontal={false}
                                        buttonColor={'white'}
                                        value={setCount}
                                    />
                                </View>
                                <Text style={styles.content_coin}>+</Text>
                                <Coins />
                                <Text style={styles.content_coin}>10</Text>
                            </View>
                            <View style={styles.borderBox}></View>
                            <View>
                                <Text style={styles.text_addNote}>Add Note</Text>
                            </View>
                            <View>
                                <TextInput
                                    style={{ height: 150, marginLeft: 16, marginRight: 16, backgroundColor: '#303540', color: 'white', textAlign: 'center', marginTop: 5, }}
                                    onChangeText={text => onChangeText(text)}
                                    placeholder={'Max Character.200'}
                                    value={value}
                                />
                            </View>
                            <View style={styles.borderBox}></View>
                            <View >
                                <Text style={styles.text_moreinfo_proDetail}>More from Get Fresh</Text>

                                <SafeAreaView >
                                    <ScrollView
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}>
                                        <View style={globalStyles.container_store}>
                                            <View style={globalStyles.imageContainer_store}>

                                                <TouchableOpacity>
                                                    <Image style={globalStyles.image_store} source={require("../images/products/product1.png")} />
                                                </TouchableOpacity>

                                                <Text style={globalStyles.boxpopular_store}>{name_product}</Text>
                                                <Text style={globalStyles.boxpopular_Price_store}>${price}</Text>
                                                <Text style={globalStyles.boxpopular_sale_store}>${price_sale}</Text>


                                            </View>
                                            
                                            <View style={globalStyles.imageContainer_store}>
                                                <Image style={globalStyles.image_store} source={require("../images/products/product2.png")} />

                                                <Text style={globalStyles.boxpopular_store}>{name_product}</Text>
                                                <Text style={globalStyles.boxpopular_Price_store}>${price}</Text>
                                                <Text style={globalStyles.boxpopular_sale_store}>${price_sale}</Text>

                                            </View>
                                            <View style={globalStyles.imageContainer_store}>
                                                <Image style={globalStyles.image_store} source={require("../images/products/product3.png")} />

                                                <Text style={globalStyles.boxpopular_store}>{name_product}</Text>
                                                <Text style={globalStyles.boxpopular_Price_store}>${price}</Text>
                                                <Text style={globalStyles.boxpopular_sale_store}>${price_sale}</Text>

                                            </View>
                                            <View style={globalStyles.imageContainer_store}>
                                                <Image style={globalStyles.image_store} source={require("../images/products/product4.png")} />

                                                <Text style={globalStyles.boxpopular_store}>{name_product}</Text>
                                                <Text style={globalStyles.boxpopular_Price_store}>${price}</Text>
                                                <Text style={globalStyles.boxpopular_sale_store}>${price_sale}</Text>

                                            </View>
                                            <View style={globalStyles.imageContainer_store}>
                                                <Image style={globalStyles.image_store} source={require("../images/products/product3.png")} />
                                                <Text style={globalStyles.boxpopular_store}>{name_product}</Text>
                                                <Text style={globalStyles.boxpopular_Price_store}>${price}</Text>
                                                <Text style={globalStyles.boxpopular_sale_store}>${price_sale}</Text>
                                            </View>
                                            <View style={globalStyles.imageContainer_store}>
                                                <Image style={globalStyles.image_store} source={require("../images/products/product1.png")} />
                                                <Text style={globalStyles.boxpopular_store}>{name_product}</Text>
                                                <Text style={globalStyles.boxpopular_Price_store}>${price}</Text>
                                                <Text style={globalStyles.boxpopular_sale_store}>${price_sale}</Text>
                                            </View>
                                        </View>
                                    </ScrollView>
                                </SafeAreaView>

                            </View>
                        </View>


                    </ScrollView>
                </SafeAreaView>
            </View>
            <View style={{ backgroundColor: '#21242E', height: 60, }}>
                <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', }}>


                    <TouchableOpacity style={{ width: 50, marginHorizontal: 16, }} onPress={decrement}>
                        <Text style={{ color: 'white', fontSize: 20 }}> - </Text>
                    </TouchableOpacity>
                    <Text style={{ color: 'white', width: 70 }}>  {count !== 0 ? count : null}</Text>
                    <TouchableOpacity style={{ width: 70 }} onPress={increment}>
                        <Text style={{ color: 'white', fontSize: 16, }}> + </Text>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => navigation.navigate('ConfirmationProduct')} style={{ backgroundColor: '#18E39C', marginRight: 12, height: 50, alignItems: 'center', flexDirection: 'row', flex: 1, borderRadius: 3, }}>
                        <Text style={{ fontSize: 18, fontFamily: 'gelion-bold', color: 'white', marginLeft: 15, }}>Buy</Text>
                        
                            <View style={{ flex: 1, flexDirection: 'row', marginLeft: 68, }}>
                                <Text style={{ height: 50, marginTop: 30, color: 'white', fontSize: 18, fontFamily: 'gelion-bold', }}> 80 </Text>
                                <View style={{ height: 50, marginTop: 33, }} ><Coins /></View>
                            </View>
                       
                 </TouchableOpacity> 


                </View>

            </View>

        </View>



    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#252A37',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },

    text_moreinfo_proDetail: {
        color: 'white',
        fontFamily: 'gelion-bold',
        fontSize: 20,
        marginHorizontal: 16,
        marginTop: 5,
    },
    text_addNote: {
        color: 'white',
        marginHorizontal: 16,
        fontFamily: 'gelion-bold',
        fontSize: 18,
        marginBottom: 5,
    },
    content_coin: {
        color: 'white',
        marginRight: 5,
        marginLeft: 5,
    },
    container_radioBox: {
        flex: 1,
        flexDirection: 'row', marginHorizontal: 16,
    },
    radio: {
        width: 300,
        justifyContent: 'center',
    },
    radio_coin: {
        flexDirection: 'column',
        flex: 1,
        width: 200,
    },
    container_textDetail: {
        marginVertical: 10,
        marginHorizontal: 16,
    },
    textDetail_big: {
        color: 'white',
        fontFamily: 'gelion-bold',
        fontSize: 20,
    },
    textDetail_small: {
        color: 'white',
        fontSize: 15,
    },
    textBuy_big: {
        marginBottom: 10,
        color: 'white',
        fontFamily: 'gelion-bold',
        fontSize: 20,
        marginHorizontal: 16,
    },
    textBuy_small: {
        color: '#9399A7',

        fontSize: 14,
        fontFamily: 'gelion-bold',
    },
    Image: {
        width: 410,
    },
    iconsHeart: {
        marginVertical: 5,
        height: 50,
        alignItems: 'center',
        marginVertical: 5,
    },
    content_detailProduct: {
        color: 'white',
        justifyContent: 'center'
    },
    container_boxText: {
        flex: 1,
        flexDirection: 'row',
    },
    borderBox: {
        marginBottom: 5,
        marginTop: 15,
        borderWidth: 0.5,
        borderTopColor: '#2F3543',
    },
    contentPrice: {
        color: 'white',
        marginHorizontal: 2,
        marginVertical: 7,
        fontSize: 18,
        fontFamily: 'gelion-bold',
    },
    boxCoin: {
        marginVertical: 10,
        marginRight: 15,
        marginHorizontal: 16,
    }

}) 