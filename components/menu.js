import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import Feedicons from '../assets/images/icons/feed.svg';
import GalleryIcon from '../assets/images/icons/galleryIcon.svg'
import ShopIcon from '../assets/images/icons/shop.svg'

export default class Menu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <Text style={styles.feedicon}> <Feedicons /></Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.galleryIcon}> <GalleryIcon /></Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.shopIcon}> <ShopIcon /></Text>
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
        marginVertical: 20,
        marginHorizontal: 45,

    },
    feedicon: {
        marginHorizontal: 40,
    },
    galleryIcon: {
        marginHorizontal: 40,
    },
    shopIcon: {
        marginHorizontal: 40,
    }

});

