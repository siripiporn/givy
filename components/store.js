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
                <View style={{ height: 80, backgroundColor: '#252A37', justifyContent: 'center', paddingHorizontal: 5 }}>
                    <Animatable.View style={{
                        height: 50, backgroundColor: '#252A37', borderColor: '#50596D',
                        borderRadius: 5,
                        borderWidth: 1.5, flexDirection: 'row', padding: 5, alignItems: 'center'
                    }}>
                        <Animatable.View animation={this.state.searchBarFocused ? "fadeInLeft" : "fadeInRight"} duration={400}>
                            <Icon name={this.state.searchBarFocused ? "md-arrow-back" : "ios-search"} style={{ fontSize: 24, color: 'white' }} />
                        </Animatable.View>
                        <TextInput placeholder="Search menu, category" style={{ fontSize: 18, marginLeft: 15, flex: 1, color: 'white' }} />
                        {/* <Button title="Press me" color="#252A37" style={{height: 50, backgroundColor: '#252A37', borderColor: '#50596D',}} /> */}
                        <TouchableOpacity style={styles.search}>
                            <Text style={styles.search_icon}>
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
                <View style={styles.container.content}>
                    <Text style={styles.container_content}>What's popular here</Text>
                    <Text style={styles.barslide}></Text>
                </View>

                <SafeAreaView >
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        <View style={globalStyles.container_store}>
                            <View style={globalStyles.imageContainer_store}>
                                <Image style={globalStyles.image_store} source={{ uri: 'https://source.unsplash.com/random/800x600' + Math.floor((Math.random() * 800) + 500) }} />

                                <Text style={styles.boxpopular}>{name_product}</Text>
                                <Text style={styles.boxpopular_Price}>${price}</Text>
                                <Text style={styles.boxpopular_sale}>${price_sale}</Text>

                            </View>
                            <View style={globalStyles.imageContainer_store}>
                                <Image style={globalStyles.image_store} source={{ uri: 'https://source.unsplash.com/random/800x600' + Math.floor((Math.random() * 800) + 500) }} />

                                <Text style={styles.boxpopular}>{name_product}</Text>
                                <Text style={styles.boxpopular_Price}>${price}</Text>
                                <Text style={styles.boxpopular_sale}>${price_sale}</Text>

                            </View>
                            <View style={globalStyles.imageContainer_store}>
                                <Image style={globalStyles.image_store} source={{ uri: 'https://source.unsplash.com/random/800x600' + Math.floor((Math.random() * 800) + 500) }} />

                                <Text style={styles.boxpopular}>{name_product}</Text>
                                <Text style={styles.boxpopular_Price}>${price}</Text>
                                <Text style={styles.boxpopular_sale}>${price_sale}</Text>

                            </View>
                            <View style={globalStyles.imageContainer_store}>
                                <Image style={globalStyles.image_store} source={{ uri: 'https://source.unsplash.com/random/800x600' + Math.floor((Math.random() * 800) + 500) }} />

                                <Text style={styles.boxpopular}>{name_product}</Text>
                                <Text style={styles.boxpopular_Price}>${price}</Text>
                                <Text style={styles.boxpopular_sale}>${price_sale}</Text>

                            </View>
                            <View style={globalStyles.imageContainer_store}>
                                <Image style={globalStyles.image_store} source={{ uri: 'https://source.unsplash.com/random/800x600' + Math.floor((Math.random() * 800) + 500) }} />

                                <Text style={styles.boxpopular}>{name_product}</Text>
                                <Text style={styles.boxpopular_Price}>${price}</Text>
                                <Text style={styles.boxpopular_sale}>${price_sale}</Text>

                            </View>
                            <View style={globalStyles.imageContainer_store}>
                                <Image style={globalStyles.image_store} source={{ uri: 'https://source.unsplash.com/random/800x600' + Math.floor((Math.random() * 800) + 500) }} />

                                <Text style={styles.boxpopular}>{name_product}</Text>
                                <Text style={styles.boxpopular_Price}>${price}</Text>
                                <Text style={styles.boxpopular_sale}>${price_sale}</Text>

                            </View>

                        </View>
                    </ScrollView>
                </SafeAreaView>


                <View style={styles.container.content}>
                    <Text style={styles.container_content}>Recommended</Text>
                    <Text style={styles.barslide}></Text>

                </View>

                {/* container Box */}
                <View style={styles.container_box}>
                    <View style={styles.container_image}>
                        <TouchableOpacity >
                            <View style={styles.image}>
                                <Image source={require('../assets/images/products/Rectangle.png')} />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.content_detail}>
                            <Text style={styles.texts_header}>Ice Cappucino</Text>
                            <Text style={styles.texts_des}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                            <View style={styles.container_detail}>
                                <Text style={styles.content_price}>$100</Text>
                                <Text style={styles.content_sale}>$50</Text>
                                <Text style={styles.content_heart}><Heart /></Text>
                            </View>

                        </View>
                    </View>
                    <View style={styles.container_image}>
                        <TouchableOpacity >
                            <View style={styles.image}>
                                <Image source={require('../assets/images/products/Rectangle.png')} />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.content_detail}>
                            <Text style={styles.texts_header}>Ice Cappucino</Text>
                            <Text style={styles.texts_des}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                            <View style={styles.container_detail}>
                                <Text style={styles.content_price}>$100</Text>
                                <Text style={styles.content_sale}>$50</Text>
                                <Text style={styles.content_heart}><Heart /></Text>
                            </View>

                        </View>
                    </View>
                    <View style={styles.container_image}>
                        <TouchableOpacity >
                            <View style={styles.image}>
                                <Image source={require('../assets/images/products/Rectangle.png')} />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.content_detail}>
                            <Text style={styles.texts_header}>Ice Cappucino</Text>
                            <Text style={styles.texts_des}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                            <View style={styles.container_detail}>
                                <Text style={styles.content_price}>$100</Text>
                                <Text style={styles.content_sale}>$50</Text>
                                <Text style={styles.content_heart}><Heart /></Text>
                            </View>

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
    },

    boxpopular: {
        marginHorizontal: 7,
        color: 'white',
        fontSize: 15,
        fontFamily: 'gelion-bold',
    },
    boxpopular_sale: {
        marginHorizontal: 7,
        color: '#E77369',
        fontSize: 15,
        fontFamily: 'gelion-bold',
    },
    boxpopular_Price: {
        marginHorizontal: 7,
        color: 'white',
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        fontSize: 15,
        fontFamily: 'gelion-bold',
    },
    container_detail: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10
    },
    content_price: {
        flex: 1,
        flexDirection: 'row',
        color: 'white',
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        fontSize: 15,
        fontFamily: 'gelion-bold',
    },
    content_sale: {
        flex: 1,
        flexDirection: 'row',
        color: '#E77369',
        fontSize: 15,
        marginRight: 60,
        fontFamily: 'gelion-bold',
    },
    content_heart: {

        flex: 1,
        flexDirection: 'row',
        color: 'white',
        marginLeft: 90,
    },
    box: {
        borderColor: 'red'
    },
    texts_header: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'gelion-bold',
    },
    texts_des: {
        color: 'white',
        fontSize: 15,
        width: 200,
        fontFamily: 'gelion-regular',
    },
    barslide: {
        marginHorizontal: 10,
        marginBottom: 10,
        backgroundColor: '#E77369',
        borderRadius: 3,
        width: 60,
        height: 5,
    },
    container_content: {
        marginHorizontal: 10,
        marginVertical: 10,
        color: 'white',
        fontFamily: 'gelion-bold',
        fontSize: 18,
    },
    content_detail: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: 10,
        marginVertical: 10,
        fontFamily: 'gelion-bold',
        fontSize: 15,
    },
    search: {
        marginHorizontal: 10,
        paddingVertical: 10,
        left: 15,
        borderColor: '#50596D',
        borderWidth: 1,
        borderEndWidth: 2,
        height: 50,
        width: 80

    },
    search_icon: {
        color: 'white',
        marginHorizontal: 28,
        marginVertical: 5,
    },
    container_image: {
        flex: 1,
        flexDirection: 'row'
    },

    image: {
        marginHorizontal: 10,
        marginVertical: 10,
    },
    container_box: {
        borderTopColor: '#2F3543',
        borderWidth: 1,

    }
})

