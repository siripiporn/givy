import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView, TextInput } from 'react-native';



export default function CommentPage({ navigation }) {
    const [text, setText] = useState('');
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'column', flex: 5 }}>
                <SafeAreaView>
                    <ScrollView>


                        <View style={styles.container_products}>
                            <View>
                                <Image style={styles.circle_small}
                                    source={require("../images/home/getfresh.png")} />
                            </View>
                            <View style={{ margin: 15 }}>
                                <Text style={font.h2}>getfresh</Text>
                                <Text style={font.h3}>Sukhumvit 16</Text>
                            </View>
                        </View>

                        <View style={{ flex: 2, flexDirection: 'column', marginHorizontal: 16, marginRight: 16, marginVertical: 15, }}>
                            <Text style={font.h2}>Small Plates - 199 Baht</Text>
                            <Text style={font.h5}>
                                Welcome lovely March with our promotion "Small Plates 119 baht". 119 baht* per dish only. (Dine-in only)
                                Select your favourite from 17 selected dishes (food and drink) from 5 PM to 9 PM... Don't miss!! See you at getfresh all branches.
                </Text>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'column', marginHorizontal: 16, marginRight: 16, }}>
                            <Text style={font.h6}>4 Comments</Text>
                            <View style={styles.container_comments}>
                                <View>
                                    <Image style={styles.circle_small}
                                        source={require("../images/comments/Getfresh.png")} />
                                </View>
                                <View style={{ margin: 15 }}>
                                    <Text style={font.h2}>getfresh</Text>
                                    <Text style={font.h3}>Sukhumvit 16</Text>
                                </View>
                            </View>
                        </View>

                        {/* Box comments */}

                        <View style={styles.borderBox}></View>
                        <View style={{ flex: 1, flexDirection: 'column', marginHorizontal: 16, marginRight: 16, }}>

                            <View style={styles.container_comments}>
                                <View>
                                    <Image style={styles.circle_small}
                                        source={require("../images/comments/Getfresh-1.png")} />
                                </View>
                                <View style={{ margin: 15 }}>
                                    <Text style={font.h2}>getfresh</Text>
                                    <Text style={font.h3}>Sukhumvit 16</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.borderBox}></View>
                        <View style={{ flex: 1, flexDirection: 'column', marginHorizontal: 16, marginRight: 16, }}>

                            <View style={styles.container_comments}>
                                <View>
                                    <Image style={styles.circle_small}
                                        source={require("../images/comments/Getfresh-2.png")} />
                                </View>
                                <View style={{ margin: 15 }}>
                                    <Text style={font.h2}>getfresh</Text>
                                    <Text style={font.h3}>Sukhumvit 16</Text>
                                </View>
                            </View>
                        </View>
                     
                         
                        <View style={styles.borderBox}></View>
                        <View style={{ flex: 1, flexDirection: 'column', marginHorizontal: 16, marginRight: 16, }}>

                            <View style={styles.container_comments}>
                                <View>
                                    <Image style={styles.circle_small}
                                        source={require("../images/comments/Getfresh-3.png")} />
                                </View>
                                <View style={{ margin: 15 }}>
                                    <Text style={font.h2}>getfresh</Text>
                                    <Text style={font.h3}>Sukhumvit 16</Text>
                                </View>
                            </View>
                        </View>

                        {/* Box create comments */}

                    </ScrollView>
                </SafeAreaView>

            </View>
            <View style={styles.borderBox}></View>
            
       

              <View style={{flexDirection:'row', flex: 1}}>
                   
                    <View style={{  marginTop: 10,flex:1, flexDirection:'column' }}>
                        <Image style={styles.circle_small}
                            source={require("../images/comments/Getfresh-4.png")} />
                    </View>

                    <View style={{flexDirection:'column', flex:2.5, marginRight:16, marginVertical:20   }}>
                        <TextInput
                            style={{   height: 50, backgroundColor: '#252A37', borderColor: '#50596D',
                            borderRadius: 30,
                            borderWidth: 1.5, flexDirection: 'row', padding: 15, alignItems: 'center'}}
                            placeholder ="Say Something"    
                            onChangeText={text => setText(text)}
                            defaultValue={text}
                        />
                        
                    </View>
                </View>
         


        </View>
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
    h6: {
        fontFamily: 'gelion-bold',
        fontSize: 14,
        color: 'white',
        textAlign: 'center',
        textDecorationLine: 'underline',


    },
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1F2431',
        flex: 1,
        flexDirection: 'column',

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
    container_products: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 16,
        marginTop: 15
    },
    container_comments: {
        flex: 1,
        flexDirection: 'row',

    },
    borderBox: {
        marginBottom: 5,
        marginTop: 15,
        borderWidth: 0.5,
        borderTopColor: '#2F3543',
    },
}) 