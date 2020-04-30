import React from 'react';
import { View,StyleSheet, SafeAreaView, ScrollView,} from 'react-native';
import Title from '../screen/shared/title';
import AboutBrand from '../screen/shared/aboutBrand';
import NavButtom from '../screen/shared/navButtom';
import Story from '../screen/shared/story'
import NavMenuPage from '../screen/navMenu/navMenuPage';

export default function HomeScreen ({ navigation }) {

    return (
     
        <SafeAreaView style={{backgroundColor: '#252A37' }} >
        <ScrollView style={{backgroundColor: '#252A37'}}  >
            <View style={styles.container}>
           
                <View style={styles.title}><Title /></View>
                {/* <View style={styles.point} style={{marginHorizontal: 16,}}><PointComponent  navigation={navigation}/></View>  */}
                <View style={styles.aboutbrand} style={{marginHorizontal: 16}}><AboutBrand navigation={navigation}/></View>
                <View style={styles.navmenu} style={{marginHorizontal: 16, marginRight:16,}}><NavButtom navigation={navigation}/></View>
                <View style={styles.story}><Story navigation={navigation}/></View>
                <View style={styles.menu}><NavMenuPage navigation={navigation}/></View>
                 
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
        height:180
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

 