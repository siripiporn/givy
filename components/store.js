import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Keyboard, TouchableOpacity, Image, SafeAreaView, ScrollView } from "react-native";
import * as Animatable from 'react-native-animatable';

import Icon from 'react-native-vector-icons/Ionicons';
import Fliter from '../assets/images/icons/fliter.svg'
import { globalStyles } from '../styles/styleGlobal';
import Heart from '../assets/images/icons/favorite_heart.svg'


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
const image = 'https://source.unsplash.com/random/800x600';

export default class Store extends Component {

    state = {
        searchBarFocused: false
    }
    componentDidMount() {
        this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
        this.keyboardWillShow = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)
        this.keyboardWillHide = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)
    }
    keyboardDidShow = () => {
        this.setState({ searchBarFocused: true })
    }
    keyboardWillShow = () => {
        this.setState({ searchBarFocused: true })
    }
    keyboardWillHide = () => {
        this.setState({ searchBarFocused: false })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={globalStyles.searchBox_store}>
                    <Animatable.View style={globalStyles.searchIcon_store}>
                        <Animatable.View animation={this.state.searchBarFocused ? "fadeInLeft" : "fadeInRight"} duration={400}>
                            <Icon name={this.state.searchBarFocused ? "md-arrow-back" : "ios-search"} style={{ fontSize: 24, color: 'white' }} />
                        </Animatable.View>
                        <TextInput placeholder="Search menu, category" style={globalStyles.contentSearch_store} />
                        {/* <Button title="Press me" color="#252A37" style={{height: 50, backgroundColor: '#252A37', borderColor: '#50596D',}} /> */}
                        <TouchableOpacity style={globalStyles.search_store}>
                            <Text style={globalStyles.search_icon_store}>
                                <Fliter />  </Text>
                        </TouchableOpacity>
                    </Animatable.View>

                </View>
                <FlatList
                    style={{ backgroundColor: this.state.searchBarFocused ? 'rgba(0,0,0,0.3)' : 'white' }}
                    data={listItems}
                    //renderItem={({ item }) => <Text style={{ padding: 20, fontSize: 18, backgroundColor: '#252A37',color: 'white' }}>{item.id}</Text>}
                    keyExtractor={(index) => index.toString()}
                />
                {/* container New Popular */}
                <View style={globalStyles.container_content_store}>
                    <Text style={globalStyles.container_content_store}>What's popular here</Text>
                    <Text style={globalStyles.barslide_store}></Text>
                </View>

                <SafeAreaView >
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        <View style={globalStyles.container_store}>
                            <View style={globalStyles.imageContainer_store}>
                                <Image style={globalStyles.image_store} source={{ uri: 'https://source.unsplash.com/random/800x600' + Math.floor((Math.random() * 800) + 500) }} />

                                <Text style={globalStyles.boxpopular_store}>{name_product}</Text>
                                <Text style={globalStyles.boxpopular_Price_store}>${price}</Text>
                                <Text style={globalStyles.boxpopular_sale_store}>${price_sale}</Text>

                            </View>
                            <View style={globalStyles.imageContainer_store}>
                                <Image style={globalStyles.image_store} source={{ uri: 'https://source.unsplash.com/random/800x600' + Math.floor((Math.random() * 800) + 500) }} />

                                <Text style={globalStyles.boxpopular_store}>{name_product}</Text>
                                <Text style={globalStyles.boxpopular_Price_store}>${price}</Text>
                                <Text style={globalStyles.boxpopular_sale_store}>${price_sale}</Text>

                            </View>
                            <View style={globalStyles.imageContainer_store}>
                                <Image style={globalStyles.image_store} source={{ uri: 'https://source.unsplash.com/random/800x600' + Math.floor((Math.random() * 800) + 500) }} />

                                <Text style={globalStyles.boxpopular_store}>{name_product}</Text>
                                <Text style={globalStyles.boxpopular_Price_store}>${price}</Text>
                                <Text style={globalStyles.boxpopular_sale_store}>${price_sale}</Text>

                            </View>
                            <View style={globalStyles.imageContainer_store}>
                                <Image style={globalStyles.image_store} source={{ uri: 'https://source.unsplash.com/random/800x600' + Math.floor((Math.random() * 800) + 500) }} />

                                <Text style={globalStyles.boxpopular_store}>{name_product}</Text>
                                <Text style={globalStyles.boxpopular_Price_store}>${price}</Text>
                                <Text style={globalStyles.boxpopular_sale_store}>${price_sale}</Text>

                            </View>
                            <View style={globalStyles.imageContainer_store}>
                                <Image style={globalStyles.image_store} source={{ uri: 'https://source.unsplash.com/random/800x600' + Math.floor((Math.random() * 800) + 500) }} />
                                <Text style={globalStyles.boxpopular_store}>{name_product}</Text>
                                <Text style={globalStyles.boxpopular_Price_store}>${price}</Text>
                                <Text style={globalStyles.boxpopular_sale_store}>${price_sale}</Text>
                            </View>
                            <View style={globalStyles.imageContainer_store}>
                                <Image style={globalStyles.image_store} source={{ uri: 'https://source.unsplash.com/random/800x600' + Math.floor((Math.random() * 800) + 500) }} />
                                <Text style={globalStyles.boxpopular_store}>{name_product}</Text>
                                <Text style={globalStyles.boxpopular_Price_store}>${price}</Text>
                                <Text style={globalStyles.boxpopular_sale_store}>${price_sale}</Text>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>

                {/* Recommended */}
                <View style={globalStyles.container_content_store}>
                    <Text style={globalStyles.container_content_store}>Recommended</Text>
                    <Text style={globalStyles.barslide_store}></Text>
                </View>
                {/* container Box */}
                <View style={globalStyles.container_box_store} />
                <View style={globalStyles.container_image_store}>
                    <TouchableOpacity >
                        <View style={globalStyles.image_store}>
                            <Image source={require('../assets/images/products/Rectangle.png')} />
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
                            <Image source={require('../assets/images/products/Rectangle.png')} />
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
                            <Image source={require('../assets/images/products/Rectangle.png')} />
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
                            <Image source={require('../assets/images/products/Rectangle.png')} />
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
                            <Image source={require('../assets/images/products/Rectangle.png')} />
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
                            <Image source={require('../assets/images/products/Rectangle.png')}  />
                             
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

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        paddingTop: 5,
        flex: 1,
        //     },
        // searchBox_store:{
        //     height: 80,
        //      backgroundColor: '#252A37', 
        //      justifyContent: 'center', 
        //      paddingHorizontal: 5 
        // },
        // searchIcon_store:{
        //     height: 50, backgroundColor: '#252A37', borderColor: '#50596D',
        //     borderRadius: 5,
        //     borderWidth: 1.5, flexDirection: 'row', padding: 5, alignItems: 'center'
        // },
        // contentSearch_store:{
        //     fontSize: 18, marginLeft: 15, flex: 1, color: 'white' 
        // },
        //     boxpopular_store: {
        //         marginHorizontal: 7,
        //         color: 'white',
        //         fontSize: 15,
        //         fontFamily: 'gelion-bold',
        //     },
        //     boxpopular_sale_store: {
        //         marginHorizontal: 7,
        //         color: '#18E39C',
        //         fontSize: 15,
        //         fontFamily: 'gelion-bold',
        //     },
        //     boxpopular_Price_store: {
        //         marginHorizontal: 7,
        //         color: 'white',
        //         textDecorationLine: 'line-through',
        //         textDecorationStyle: 'solid',
        //         fontSize: 15,
        //         fontFamily: 'gelion-bold',
        //     },
        //     container_detail_store: {
        //         flex: 1,
        //         flexDirection: 'row',
        //         marginTop: 10
        //     },
        //     content_price_store: {
        //         flex: 1,
        //         flexDirection: 'row',
        //         color: 'white',
        //         textDecorationLine: 'line-through',
        //         textDecorationStyle: 'solid',
        //         fontSize: 15,
        //         fontFamily: 'gelion-bold',
        //     },
        //     content_sale_store: {
        //         flex: 1,
        //         flexDirection: 'row',
        //         color: '#18E39C',
        //         fontSize: 15,
        //         marginRight: 60,
        //         fontFamily: 'gelion-bold',
        //     },
        //     content_heart_store: {

        //         flex: 1,
        //         flexDirection: 'row',
        //         color: 'white',
        //         marginLeft: 90,
        //     },
        //     box_store: {
        //         borderColor: 'red'
        //     },
        //     texts_header_store: {
        //         color: 'white',
        //         fontSize: 20,
        //         fontFamily: 'gelion-bold',
        //     },
        //     texts_des_store: {
        //         color: 'white',
        //         fontSize: 15,
        //         width: 200,
        //         fontFamily: 'gelion-regular',
        //     },
        //     barslide_store: {
        //         marginHorizontal: 10,
        //         marginBottom: 10,
        //         backgroundColor: '#18E39C',
        //         borderRadius: 3,
        //         width: 60,
        //         height: 5,
        //     },
        //     container_content_store: {
        //         marginHorizontal: 10,
        //         marginVertical: 10,
        //         color: 'white',
        //         fontFamily: 'gelion-bold',
        //         fontSize: 18,
        //     },
        //     content_detail_store: {
        //         flex: 1,
        //         flexDirection: 'column',
        //         marginHorizontal: 10,
        //         marginVertical: 10,
        //         fontFamily: 'gelion-bold',
        //         fontSize: 15,
        //     },
        //     search_store: {
        //         marginHorizontal: 10,
        //         paddingVertical: 10,
        //         left: 15,
        //         borderColor: '#50596D',
        //         borderWidth: 1,
        //         borderEndWidth: 2,
        //         height: 50,
        //         width: 80

        //     },
        //     search_icon_store: {
        //         color: 'white',
        //         marginHorizontal: 28,
        //         marginVertical: 5,
        //     },
        //     container_image_store: {
        //         flex: 1,
        //         flexDirection: 'row'
        //     },

        //     image_store: {
        //         marginHorizontal: 10,
        //         marginVertical: 10,
        //     },
        //     container_box_store: {
        //         borderTopColor: '#2F3543',
        //         borderWidth: 1,

    }
})

