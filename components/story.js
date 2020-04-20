import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text, ScrollView } from 'react-native';
import { globalStyles } from '../styles/styleGlobal';

export default class Story extends Component {
    render() {
        return (
            <ScrollView  
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                 
                <View style={{marginLeft:16,}}>
                    <TouchableOpacity style={globalStyles.container_image_story}>
                   <Image style={globalStyles.image_story} source={{ uri: 'https://source.unsplash.com/random/800x600' + Math.floor((Math.random() * 800) + 500) }} /> 
                    </TouchableOpacity>
                    <View style={globalStyles.content_story}><Text style={globalStyles.content_story}>Promotion</Text></View>
                </View>
                <View >
                    <TouchableOpacity style={globalStyles.container_image_story}>
                        <Image style={globalStyles.image_story} source={{ uri: 'https://source.unsplash.com/random/800x600' + Math.floor((Math.random() * 800) + 500) }} />
                    </TouchableOpacity>
                    <View style={globalStyles.content_story}><Text style={globalStyles.content_story}>Menu</Text></View>
                </View>
                <View >
                    <TouchableOpacity style={globalStyles.container_image_story}>
                        <Image style={globalStyles.image_story} source={{ uri: 'https://source.unsplash.com/random/800x600' + Math.floor((Math.random() * 800) + 500) }} />
                    </TouchableOpacity>
                    <View style={globalStyles.content_story}><Text style={globalStyles.content_story}>Testimonials</Text></View>
                </View>

              
            </ScrollView>
        )
    }
} 