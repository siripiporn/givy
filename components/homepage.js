import React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView,Text,Button } from 'react-native';
import AboutBrand from './aboutBrand';
 
import Nav from './nav';
import Story from './story';
import Menu from './menu';
import Point from './points';
import Title from './title'



const Homepage = ( ) => {
    
        return (
            <SafeAreaView style={{backgroundColor: '#252A37' }} >
                <ScrollView style={{backgroundColor: '#252A37'}}  >
                    <View style={styles.container}>
                        <View style={styles.title}><Title /></View>
                        <View style={styles.point} style={{marginHorizontal: 16,}}><Point /></View> 
                        <View style={styles.aboutbrand} style={{marginHorizontal: 16,}}><AboutBrand /></View>
                        <View style={styles.navmenu} style={{marginHorizontal: 16,}}><Nav /></View>
                        <View style={styles.story}><Story /></View>
                        <View style={styles.menu}><Menu /></View>
                         
                    </View>
                </ScrollView>
            </SafeAreaView>

        )
    }



const styles = StyleSheet.create({
    container: {
        backgroundColor:'#252A37',
  
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    point: {
        flex: 1,
        flexDirection: 'column',
       backgroundColor: '#252A37'
        
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

export default Homepage;