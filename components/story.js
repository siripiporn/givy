import React, { Component } from 'react';
import {View, TouchableOpacity,Image, Text } from 'react-native';
import { globalStyles } from '../styles/styleGlobal';

export default class Story extends Component {
    render() {
        return (
            <View style={globalStyles.container_story}>
                <TouchableOpacity style={globalStyles.imageContainer_story}>
                    <Image style={globalStyles.image_story} source={{ uri: 'https://source.unsplash.com/random/800x600'+Math.floor((Math.random() * 800) + 500)   }}/>
                    <Text style={globalStyles.contentstory_story}>Favorite</Text>
                </TouchableOpacity>
                <TouchableOpacity style={globalStyles.imageContainer_story}>
                    <Image style={globalStyles.image_story} source={{ uri: 'https://source.unsplash.com/random/800x600'+Math.floor((Math.random() * 800) + 500)   }}/>
                    <Text style={globalStyles.contentstory_story}>Review</Text>
                </TouchableOpacity>
                <TouchableOpacity style={globalStyles.imageContainer_story}>
                    <Image style={globalStyles.image_story} source={{ uri: 'https://source.unsplash.com/random/800x600'+Math.floor((Math.random() * 800) + 500)   }}/>
                    <Text style={globalStyles.contentstory_story}>Promotion</Text>
                </TouchableOpacity>
                <TouchableOpacity style={globalStyles.imageContainer_story}>
                    <Image style={globalStyles.image_story} source={{ uri: 'https://source.unsplash.com/random/800x600'+Math.floor((Math.random() * 800) + 500)   }}/>
                    <Text style={globalStyles.contentstory_story}>Highlights</Text>
                </TouchableOpacity>
            </View>
        )
    }
} 