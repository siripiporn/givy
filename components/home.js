import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import AboutBrand from './aboutBrand';
import Feed from './Feed';
import Nav from './nav';
import Story from './story';
import Menu from './menu';
import Point from './points';
import Title from './title'

export default class Home extends Component {
    render() {
        return (
            <SafeAreaView >
                <ScrollView >
                    <View style={styles.container}>
                        <View style={styles.title}><Title /></View>
                        <View style={styles.point}><Point /></View>
                        <View style={styles.aboutbrand}><AboutBrand /></View>
                        <View style={styles.navmenu}><Nav /></View>
                        <View style={styles.story}><Story /></View>
                        <View style={styles.menu}><Menu /></View>
                        <View style={styles.feed}><Feed /></View>

                    </View>
                </ScrollView>
            </SafeAreaView>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#252A37',
        flex: 1,
        marginTop: 30,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    point: {
        flex: 1,
        flexDirection: 'column',
       backgroundColor: '#E77369'
        
    },
    title: {
        flex: 1,
        flexDirection: 'column',
        
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
       
      
    },
    story: {
        flex: 1,
        flexDirection: 'column',
        
    },
    menu: {
        flex: 1,
        flexDirection: 'column',
          backgroundColor:'#1F2431', 
       
    },
});

