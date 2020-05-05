import React from 'react';
import { View,StyleSheet, SafeAreaView, ScrollView,} from 'react-native';
import Title from '../shared/title';
import AboutBrand from '../shared/aboutBrand';
import NavButtom from '../shared/navButtom';
import Story from '../shared/story'
import NavMenuPage from '../navMenu/navMenuPage';

export default function ExplorePage ({ navigation }) {

    return (
     
        <SafeAreaView style={{backgroundColor: '#252A37' }} >
        <ScrollView style={{backgroundColor: '#252A37'}}  >
            <View style={styles.container}>
           
                <View style={styles.title}><Title /></View>
                {/* <View style={styles.point} style={{marginHorizontal: 16,}}><PointComponent  navigation={navigation}/></View>  */}
                <View style={styles.aboutbrand} style={{marginHorizontal: 16, }}><AboutBrand navigation={navigation}/></View>
                <View style={styles.navmenu} ><NavButtom navigation={navigation}/></View>
                <View style={styles.story} style={{ marginVertical:20}}><Story navigation={navigation}/></View>
                <View style={styles.menu}  ><NavMenuPage navigation={navigation}/></View>
                 
            </View>
        </ScrollView>
    </SafeAreaView>

    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor:'#252A37',
        marginTop:2,
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
        height:140
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
        marginHorizontal:16,
        marginRight:10,
      
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

 


