import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Keyboard, TouchableOpacity, Button, Image, SafeAreaView, ScrollView } from "react-native";
import { globalStyles } from '../styles/styleGlobal';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';
import Shocked from '../images/icons/shocked.svg';
import TermIcon from '../images/icons/termIcon.svg'
import Fliter from '../images/icons/fliter.svg';
import Heart from '../images/icons/favorite_heart.svg';
import DetailOrder from '../order/detailProduct';
import DetailProductScreen from '../rewards/detailProductScreen';
import SearchBox from '../shared/searchBox';

const listItems = [
    {
        id: 'Food',
        title: 'Food',
    },
    {
        id: 'Milk',
        title: 'Milk',
    },

];

const price = 300;
const price_sale = 100;
const name_product = 'Ice Cappucino';


export default class FeedRewardScreen extends Component {

    render() {
        return (
            <View>
                {/* <View><SearchBox />
            </View> */}

                {/* Box Tems */}
                <View style={styles.box_terms}>
                    <View style={{ height: 50, flex: 1 }}>
                        <View style={styles.circle}>
                            <Shocked />
                        </View>
                    </View>
                    <View style={{ height: 50, flex: 4 }}>
                        <Text style={styles.contents_terms}
                        >Earn a point every 10 THB you spend</Text>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 16, marginTop: 15 }}>
                    <View style={{ height: 50, flex: 3.5 }}>
                        <View>
                            <Text style={styles.content_small}>Member Type</Text>
                            <Text style={styles.content_big}>Standard</Text>
                        </View>
                    </View>
                    <View style={{ height: 50, flex: 3 }}>
                        <View>
                            <Text style={styles.content_small}>Points</Text>
                            <Text style={styles.content_big}>300</Text>
                        </View>
                    </View>

                    <View style={{ height: 50, flex: 3 }}>
                        <View>
                            <Text style={styles.content_small}>Discount</Text>
                            <Text style={styles.content_big}>5%</Text>
                        </View>
                    </View>
                    <View style={{ height: 50, flex: 1.3, }}>
                        <View style={{ marginTop: 5, borderColor: '#50596D', borderRadius: 5, borderWidth: 1.5, height: 40, width: 45 }}>
                            <View style={{ marginTop: 10, alignItems: 'center' }}><TermIcon /></View>
                        </View>
                    </View>
                </View>

                {/* Box Challanges */}
                <View style={{ flexDirection: 'row', flex: 1, marginHorizontal: 16, marginTop: 30, }}>
                    <View style={{ backgroundColor: '#1C202A', }}>
                        <Text style={{ fontSize: 12, color: '#18E39C', alignSelf: 'flex-end' }}>49/200</Text>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ width: 188, height: 60, backgroundColor: '#50596D', borderBottomLeftRadius: 5, borderBottomRightRadius: 5, marginRight: 3, }}>
                                <View style={{ width: (SettingPageCSS.container / 5), height: 60, backgroundColor: '#fff' }}></View>
                            </View>
                            <View style={{ width: 188, height: 60, backgroundColor: '#50596D', borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }} >
                                <View style={{ width: (SettingPageCSS.container / 10000), height: 60, backgroundColor: '#fff' }}></View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'column', flex: 1, marginRight: 16, marginTop: 5 }}>
                    <Text style={{ fontSize: 12, color: '#18E39C', alignSelf: 'flex-end' }}>Your conins expires October 31,2021</Text>
                </View>

                <TouchableOpacity>
                    <View style={{ marginTop: 5, marginHorizontal: 16, borderColor: '#50596D', borderRadius: 5, borderWidth: 1.5, height: 40, width: 375 }}>
                        <Text style={{ marginTop: 10, textAlign: "center", color: 'white' }}>View Challenges</Text>
                    </View>
                </TouchableOpacity>
                <View style={globalStyles.container_content_store}>
                    <Text style={globalStyles.container_content_store}>Rewards Shop</Text>
                    <Text style={globalStyles.barslide_store}></Text>
                </View>

                <SafeAreaView >
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        <View style={globalStyles.container_store}>
                            <View style={globalStyles.imageContainer_store}>

                                <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailProductScreen')}>
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

                {/* Recommended */}
                <View style={globalStyles.container_content_store}>
                    <Text style={globalStyles.container_content_store}>Products</Text>
                    <Text style={globalStyles.barslide_store}></Text>
                </View>
                {/* container Box */}
                <View style={globalStyles.container_box_store} />
                <View style={globalStyles.container_image_store}>
                    <TouchableOpacity >
                        <View style={globalStyles.image_store}>
                            <Image source={require('../images/products/Rectangle.png')} />
                        </View>
                    </TouchableOpacity>
                    <View style={globalStyles.content_detail_store}>
                        <Text style={globalStyles.texts_header_store}>Ice Cappucino</Text>
                        <Text style={globalStyles.texts_des_store}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                        <View style={globalStyles.container_detail_store}>
                            <Text style={globalStyles.content_price_store}>$100</Text>
                            <Text style={globalStyles.content_sale_store}>$50</Text>
                            <Text style={globalStyles.content_heart_store}><Heart /></Text>
                        </View>

                    </View>
                </View>
                <View style={globalStyles.container_box_store} />
                <View style={globalStyles.container_image_store}>
                    <TouchableOpacity >
                        <View style={globalStyles.image_store}>
                            <Image source={require('../images/products/Rectangle.png')} />
                        </View>
                    </TouchableOpacity>
                    <View style={globalStyles.content_detail_store}>
                        <Text style={globalStyles.texts_header_store}>Ice Cappucino</Text>
                        <Text style={globalStyles.texts_des_store}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                        <View style={globalStyles.container_detail_store}>
                            <Text style={globalStyles.content_price_store}>$100</Text>
                            <Text style={globalStyles.content_sale_store}>$50</Text>
                            <Text style={globalStyles.content_heart_store}><Heart /></Text>
                        </View>

                    </View>
                </View>
                <View style={globalStyles.container_box_store} />
                <View style={globalStyles.container_image_store}>
                    <TouchableOpacity >
                        <View style={globalStyles.image_store}>
                            <Image source={require('../images/products/Rectangle.png')} />
                        </View>
                    </TouchableOpacity>
                    <View style={globalStyles.content_detail_store}>
                        <Text style={globalStyles.texts_header_store}>Ice Cappucino</Text>
                        <Text style={globalStyles.texts_des_store}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                        <View style={globalStyles.container_detail_store}>
                            <Text style={globalStyles.content_price_store}>$100</Text>
                            <Text style={globalStyles.content_sale_store}>$50</Text>
                            <Text style={globalStyles.content_heart_store}><Heart /></Text>
                        </View>

                    </View>
                </View>

                {/* Drinks */}
                <View style={globalStyles.container_content_store}>
                    <Text style={globalStyles.container_content_store}>Drinks</Text>
                    <Text style={globalStyles.barslide_store}></Text>
                </View>
                {/* container Box */}
                <View style={globalStyles.container_box_store} />
                <View style={globalStyles.container_image_store}>
                    <TouchableOpacity >
                        <View style={globalStyles.image_store}>
                            <Image source={require('../images/products/Rectangle.png')} />
                        </View>
                    </TouchableOpacity>
                    <View style={globalStyles.content_detail_store}>
                        <Text style={globalStyles.texts_header_store}>Ice Cappucino</Text>
                        <Text style={globalStyles.texts_des_store}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                        <View style={globalStyles.container_detail_store}>
                            <Text style={globalStyles.content_price_store}>$100</Text>
                            <Text style={globalStyles.content_sale_store}>$50</Text>
                            <Text style={globalStyles.content_heart_store}><Heart /></Text>
                        </View>

                    </View>
                </View>
                <View style={globalStyles.container_box_store} />
                <View style={globalStyles.container_image_store}>
                    <TouchableOpacity >
                        <View style={globalStyles.image_store}>
                            <Image source={require('../images/products/Rectangle.png')} />
                        </View>
                    </TouchableOpacity>
                    <View style={globalStyles.content_detail_store}>
                        <Text style={globalStyles.texts_header_store}>Ice Cappucino</Text>
                        <Text style={globalStyles.texts_des_store}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                        <View style={globalStyles.container_detail_store}>
                            <Text style={globalStyles.content_price_store}>$100</Text>
                            <Text style={globalStyles.content_sale_store}>$50</Text>
                            <Text style={globalStyles.content_heart_store}><Heart /></Text>
                        </View>

                    </View>
                </View>
                <View style={globalStyles.container_box_store} />
                <View style={globalStyles.container_image_store}>
                    <TouchableOpacity >
                        <View style={globalStyles.image_store}>
                            <Image source={require('../images/products/Rectangle.png')} />

                        </View>
                    </TouchableOpacity>
                    <View style={globalStyles.content_detail_store}>
                        <Text style={globalStyles.texts_header_store}>Ice Cappucino</Text>
                        <Text style={globalStyles.texts_des_store}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                        <View style={globalStyles.container_detail_store}>
                            <Text style={globalStyles.content_price_store}>$100</Text>
                            <Text style={globalStyles.content_sale_store}>$50</Text>
                            <Text style={globalStyles.content_heart_store}><Heart /></Text>
                        </View>

                    </View>
                </View>
            </View>
        );
    }
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
        flexDirection: 'column',
        paddingTop: 5,
        flex: 1,
    },
    textGreen: {

    },

    circle: {
        alignItems: 'center',
        marginHorizontal: 30,
        marginTop: 15,

    },
    box_terms: {
        flexDirection: 'row', flex: 1, backgroundColor: '#50596D', height: 50
    },
    contents_terms: {
        color: 'white', fontFamily: 'gelion-bold', fontSize: 15, textAlign: 'left', marginVertical: 15
    },
    content_small: {
        color: '#18E39C',
        fontSize: 12,
        fontFamily: 'gelion-regular',
    },
    content_big: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'gelion-bold',
    }
})

