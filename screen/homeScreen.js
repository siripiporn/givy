import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import Title from '../screen/shared/title';
import AboutBrand from '../screen/shared/aboutBrand';
import NavButtom from '../screen/shared/navButtom';
import Story from '../screen/shared/story'
import NavMenuPage from '../screen/navMenu/navMenuPage';

import SearchHome from './shared/searchHome';
import Smile from './images/icons/smile.svg';
import Components from './images/icons/comment.svg'
import Share from './images/icons/Share.svg'
import Favorite from './images/icons/favorite.svg'

import CommentPage from '../screen/comments/commentPage'

export default function HomeScreen({ navigation }) {

    return (


        <SafeAreaView style={{ backgroundColor: '#252A37' }} >
            <ScrollView style={{ backgroundColor: '#252A37' }}  >
                <View style={styles.container}>
                    <View style={styles.container_bigBox}>
                        <Text style={styles.content}>Home</Text>
                        <View style={styles.container_box}><SearchHome /></View>
                    </View>

                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 16 }}>
                            <View style={styles.cotainer_boxRow}>
                                <View style={styles.circle} >
                                    <Image style={styles.circle_small}
                                        source={require("../screen/images/home/khongsittha.png")} />
                                </View>
                                <Text style={font.h1}>khongsittha</Text>
                            </View>

                            <View style={styles.cotainer_boxRow}>
                                <View style={styles.circle} >
                                    <Image style={styles.circle_small}
                                        source={require("../screen/images/home/getfresh.png")} />
                                </View>
                                <Text style={font.h1}>getfresh</Text>
                            </View>
                            <View style={styles.cotainer_boxRow}>
                                <View style={styles.circle} >
                                    <Image style={styles.circle_small}
                                        source={require("../screen/images/home/fiveprows.png")} />
                                </View>
                                <Text style={font.h1}>fiveprows</Text>
                            </View>

                            <View style={styles.cotainer_boxRow}>
                                <View style={styles.circle} >
                                    <Image style={styles.circle_small}
                                        source={require("../screen/images/home/gigi.jpg")} />
                                </View>
                                <Text style={font.h1} >gigi</Text>
                            </View>
                            <View style={styles.cotainer_boxRow}>
                                <View style={styles.circle} >
                                    <Image style={styles.circle_small}
                                        source={require("../screen/images/home/adidas.jpg")} />
                                </View>
                                <Text style={font.h1}>adidas</Text>
                            </View>

                            <View style={styles.cotainer_boxRow}>
                                <View style={styles.circle} >
                                    <Image style={styles.circle_small}
                                        source={require("../screen/images/home/budweiser.png")} />
                                </View>
                                <Text style={font.h1}>budweiser</Text>
                            </View>


                        </View>
                    </ScrollView>

                    <View style={styles.borderBox}></View>

                    {/* Box 1 */}
                    <View style={styles.container_products}>
                        <View>
                            <Image style={styles.circle_small}
                                source={require("../screen/images/home/getfresh.png")} />
                        </View>
                        <View style={{ margin: 15 }}>
                            <Text style={font.h2}>getfresh</Text>
                            <Text style={font.h3}>Sukhumvit 16</Text>
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', }}>
                        <Image style={styles.images} source={require('../screen/images/home/getfreshFeed.png')} />
                    </View>
                    <View style={styles.container_boxIcon}>

                        <View style={styles.boxLeft}>
                            <Smile />
                            <Text style={font.h4}>78</Text>
                            <Components style={{ marginLeft: 20 }} onPress={() => navigation.navigate('CommentPage')} />
                            <Text style={font.h4}>20</Text>
                        </View>

                        <View style={styles.boxRight}>
                            <Share />
                            <Favorite style={{ marginLeft: 20 }} />
                        </View>

                    </View>
                    <View style={styles.borderBox}></View>
                    <View style={styles.box}>
                        <Text style={font.h5}>
                            Welcome lovely March with our promotion "Small Plates 119 baht". 119 baht* per dish only. (Dine-in only)
                            Select your favourite from 17 selected dishes (food and drink) from 5 PM to 9 PM... Don't miss!! See you at getfresh all branches.</Text>
                    </View>
                    {/* Box 2 */}
                    <View style={styles.container_products}>
                        <View>
                            <Image style={styles.circle_small}
                                source={require("../screen/images/home/getfresh.png")} />
                        </View>
                        <View style={{ margin: 15 }}>
                            <Text style={font.h2}>getfresh</Text>
                            <Text style={font.h3}>Sukhumvit 16</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', }}>
                        <Image style={styles.images} source={require('../screen/images/home/getfreshFeed2.png')} />
                    </View>

                    <View style={styles.container_boxIcon}>
                        <View style={styles.boxLeft}>
                            <Smile />
                            <Text style={font.h4}>78</Text>
                            <Components style={{ marginLeft: 20 }} onPress={() => navigation.navigate('CommentPage')} /> 
                            <Text style={font.h4}>20</Text>
                        </View>
                        <View style={styles.boxRight}>
                            <Share />
                            <Favorite style={{ marginLeft: 20 }} />
                        </View>
                    </View>
                    <View style={styles.borderBox}></View>
                    <View style={styles.box}>
                        <Text style={font.h5} >
                            Welcome lovely March with our promotion "Small Plates 119 baht". 119 baht* per dish only. (Dine-in only)
                            Select your favourite from 17 selected dishes (food and drink) from 5 PM to 9 PM... Don't miss!! See you at getfresh all branches.</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>


        //     <SafeAreaView style={{backgroundColor: '#252A37' }} >
        //     <ScrollView style={{backgroundColor: '#252A37'}}  >
        //         <View style={styles.container}>

        //             <View style={styles.title}><Title /></View>
        //             {/* <View style={styles.point} style={{marginHorizontal: 16,}}><PointComponent  navigation={navigation}/></View>  */}
        //             <View style={styles.aboutbrand} style={{marginHorizontal: 16, }}><AboutBrand navigation={navigation}/></View>
        //             <View style={styles.navmenu} ><NavButtom navigation={navigation}/></View>
        //             <View style={styles.story} style={{ marginVertical:20}}><Story navigation={navigation}/></View>
        //             <View style={styles.menu}  ><NavMenuPage navigation={navigation}/></View>

        //         </View>
        //     </ScrollView>
        // </SafeAreaView>

    )
}

const font = {
    h1: {
        fontFamily: 'gelion-regular',
        fontSize: 14,
        color: 'white',
        textAlign: 'center'
    },
    h2: {
        fontFamily: 'gelion-bold',
        fontSize: 14,
        color: 'white'
    },
    h3: {
        fontFamily: 'gelion-regular',
        fontSize: 14,
        color: '#8A8D93'
    },
    h4: {
        marginLeft: 10, color: 'white',
    },
    h5: {
        fontFamily: 'gelion-regular',
        fontSize: 14,
        color: 'white',
    },
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#252A37',
        marginTop: 2,
        flex: 1,
        flexDirection: 'column',
    },
    images: {
        flex: 1, height: 300, width: 150, marginTop: 13,
    },
    boxLeft: {
        flex: 5, flexDirection: 'row', alignSelf: 'flex-start'
    },
    boxRight: {
        flex: 1, flexDirection: 'row', alignSelf: 'flex-end'
    },
    box: {
        flexDirection: 'row',
        flex: 1,
        marginHorizontal: 16,
        marginRight: 16
    },
    container_boxIcon: {
        flexDirection: 'row', flex: 1,
        marginHorizontal: 16,
        marginRight: 16,
        marginTop: 15
    },
    container_products: {
        flex: 1, flexDirection: 'row',
        marginHorizontal: 16,
        marginTop: 15
    },
    container_bigBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,
        marginRight: 16
    },
    cotainer_boxRow: {
        flex: 1,
        flexDirection: 'column',
        marginRight: 20
    },
    container_box: {
        flex: 1.5,
        flexDirection: 'row'
    },
    circle: {
        width: 70,
        height: 70,
        borderRadius: 70 / 1,
        backgroundColor: '#18E39C',
    },
    circle_small: {
        width: 65,
        height: 65,
        borderRadius: 65 / 1,
        alignSelf: 'center',
        marginTop: 2.5,
        borderColor: '#1C202A',
        borderWidth: 1.5
    },
    content: {
        color: 'white',
        fontFamily: 'gelion-bold',
        fontSize: 20,
        marginVertical: 30,
        flex: 0.5,
        flexDirection: 'row'
    },
    borderBox: {
        marginBottom: 5,
        marginTop: 15,
        borderWidth: 0.5,
        borderTopColor: '#2F3543',
    },
    point: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#252A37'
    },
    title: {
        flex: 1,
        flexDirection: 'column',
        height: 140
    },
    aboutbrand: {
        flex: 1,
        flexDirection: 'column',
    },
    feed: {
        flex: 1,
        flexDirection: 'column',

    },
    navmenu: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: 16,
        marginRight: 10,
    },
    story: {
        flex: 1,
        flexDirection: 'column',

    },
    menu: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#1F2431',

    },
});

