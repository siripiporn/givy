import React, { Component } from 'react';
import {  View,  Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/styleGlobal';
import Feedicons from '../assets/images/icons/feed.svg';
import GalleryIcon from '../assets/images/icons/galleryIcon.svg'
import ShopIcon from '../assets/images/icons/shop.svg'

export default class Menu extends Component {
    render() {
        return (
            <View style={globalStyles.container_menu}>
                <TouchableOpacity>
                    <Text style={globalStyles.feedicon_menu}> <Feedicons /></Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={globalStyles.galleryIcon_menu}> <GalleryIcon /></Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={globalStyles.shopIcon_menu}> <ShopIcon /></Text>
                </TouchableOpacity>
            </View>
        )
    }
}

