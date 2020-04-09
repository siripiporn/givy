import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity,Image, Text } from 'react-native';
 


export default class Story extends Component {
    render() {
        return (


            <View style={styles.container}>
                <TouchableOpacity style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: 'https://source.unsplash.com/random/800x600'+Math.floor((Math.random() * 800) + 500)   }}/>
                    <Text style={styles.contentstory}>Favorite</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: 'https://source.unsplash.com/random/800x600'+Math.floor((Math.random() * 800) + 500)   }}/>
                    <Text style={styles.contentstory}>Review</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: 'https://source.unsplash.com/random/800x600'+Math.floor((Math.random() * 800) + 500)   }}/>
                    <Text style={styles.contentstory}>Promotion</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: 'https://source.unsplash.com/random/800x600'+Math.floor((Math.random() * 800) + 500)   }}/>
                    <Text style={styles.contentstory}>Highlights</Text>
                </TouchableOpacity>
            </View>


        )
    }
}

const styles = StyleSheet.create({
    container: {

        marginTop: 16,
        flex: 1,
        flexDirection: 'row',
        marginVertical: 30,
        marginHorizontal: 5,

    },
    imageContainer: {
      height: 97,
      width: 97,
      borderRadius: 64,
      marginHorizontal: 1,
      

    },
    image:{
        height: 97,
      width: 97,
      borderRadius: 64,  
      marginHorizontal: 1,
    },
    contentstory:{
        marginHorizontal:15,
        color: 'white'
    }




});

