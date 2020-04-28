import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Keyboard, TouchableOpacity, Button,Image, SafeAreaView, ScrollView } from "react-native";
import { globalStyles } from '../styles/styleGlobal';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';
import Fliter from '../images/icons/fliter.svg';
import Heart from '../images/icons/favorite_heart.svg';
import DetailOrder from '../order/detailProduct';
import DetailProductScreen from '../rewards/detailProductScreen';

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

                             <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailProductScreen')}> 
                             <Image  style={globalStyles.image_store}  source={require("../images/products/product1.png")}   />
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
                    <Text style={globalStyles.container_content_store}>Recommended</Text>
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
                            <Image source={require('../images/products/Rectangle.png')}  />
                             
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
    }
})

