import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';


export default class AboutBrand extends Component {
    render() {
        return (


            <View >
               
               <View style={styles.container}>
                    <Image style={styles.logo} source={require("../assets/images/logo.jpg")} />

                    <View style={styles.point}>
                        <Text style={styles.contents}>500</Text>
                        <Text style={styles.contents}>Post</Text>
                    </View>
                    <View style={styles.point}>
                        <Text style={styles.contents}>300</Text>
                        <Text style={styles.contents}>Followers</Text>
                    </View>
                    <View style={styles.point}>
                        <Text style={styles.contents}>700</Text>
                        <Text style={styles.contents}>Followers</Text>
                    </View>
                </View>
                
                <View style={styles.discretion}>
                    <Text style={styles.contents}>getfresh</Text>
                    <Text style={styles.contents}>Restaurant</Text>
                    <Text style={styles.contents}>Simple.Notural.Delicious</Text>
                </View>
                <View style={styles.discretion}>
                    <Text style={styles.contents}>At getfresh we believe that eating fresh food, knowing where it comes from and how it’s prepared directly influences your health and the environment.</Text>
                    <Text style={styles.contents}>www.getfresh.com</Text>
                    <Text style={styles.contents}>Loved by michel_lopez, mcube and 60 others</Text>
                </View>
            </View>


        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 5,

    },
    point:{
        marginHorizontal: 10, 
        flex: 1, 
        marginVertical: 20, 
    },
    imagestar: {
        width: 20,
        height: 20,
    },
    contents: {
        color: 'white',
        marginHorizontal: 5,
    },
    logo: {
        marginLeft: 2,
        width: 100,
        height: 100,
        borderRadius: 50
    },
discretion:{
    marginHorizontal: 10, flex: 1, marginVertical: 5,
}


});

