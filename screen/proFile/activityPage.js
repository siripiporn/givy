import React from 'react';
import { View, Text, StyleSheet, Image,SafeAreaView,ScrollView } from 'react-native';

export default function ActivityPage({ navigation }) {

    return (
       
    <SafeAreaView>
        <ScrollView> 
        <View style={styles.container}>

            {/* Box Coming */}
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={sentingActivityPage.h1}>Coming Up</Text>
                    <Text style={sentingActivityPage.h2}> Mon,Apr 20</Text>
                </View>

                <View style={styles.container_comming}>
                    <View style={styles.container_box1}>
                        <View style={styles.circle} >
                            <Image style={styles.circle_small} source={require("../images/Profile/logo.png")} />
                        </View>
                        <View style={{ flex: 5, marginTop: 18}}>
                            <Text style={sentingActivityPage.h1}>Get Fresh-Samyan Mitrto..</Text>
                            <Text style={sentingActivityPage.h3}>Delivery Via Grab</Text>
                            <Text style={sentingActivityPage.h3}>15 Mar</Text></View>
                            <View style={{ flex: 1 , marginTop: 18}}>
                            <Text style={sentingActivityPage.h3}>- ‎฿30</Text></View>
                    </View>
                </View>

                <View style={styles.container_comming}>
                    <View style={styles.container_box1}>
                        <View style={styles.circle} >
                            <Image style={styles.circle_small} source={require("../images/Profile/logo.png")} />
                        </View>
                        <View style={{ flex: 5, marginTop: 18}}>
                            <Text style={sentingActivityPage.h1}>Get Fresh-Samyan Mitrto..</Text>
                            <Text style={sentingActivityPage.h3}>Delivery Via Grab</Text>
                            <Text style={sentingActivityPage.h3}>15 Mar</Text></View>
                            <View style={{ flex: 1 , marginTop: 18}}>
                            <Text style={sentingActivityPage.h3}>- ‎฿30</Text></View>
                    </View>
                </View>
                <View style={styles.container_comming}>
                    <View style={styles.container_box1}>
                        <View style={styles.circle} >
                            <Image style={styles.circle_small} source={require("../images/Profile/logo.png")} />
                        </View>
                        <View style={{ flex: 5, marginTop: 18}}>
                            <Text style={sentingActivityPage.h1}>Get Fresh-Samyan Mitrto..</Text>
                            <Text style={sentingActivityPage.h3}>Delivery Via Grab</Text>
                            <Text style={sentingActivityPage.h3}>15 Mar</Text></View>
                            <View style={{ flex: 1 , marginTop: 18}}>
                            <Text style={sentingActivityPage.h3}>- ‎฿30</Text></View>
                    </View>
                </View>
            </View>

            {/* Box Today */}
            <View style={{ flex: 1, flexDirection: 'column', padding:5 }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={sentingActivityPage.h1}>Today</Text>
                    <Text style={sentingActivityPage.h2}> Mon,Apr 20</Text>
                </View>

                <View style={styles.container_comming}>
                    <View style={styles.container_box1}>
                        <View style={styles.circle} >
                            <Image style={styles.circle_small} source={require("../images/Profile/logo.png")} />
                        </View>
                        <View style={{ flex: 5, marginTop: 18}}>
                            <Text style={sentingActivityPage.h1}>Get Fresh-Samyan Mitrto..</Text>
                            <Text style={sentingActivityPage.h3}>Delivery Via Grab</Text>
                            <Text style={sentingActivityPage.h3}>15 Mar</Text></View>
                            <View style={{ flex: 1 , marginTop: 18}}>
                            <Text style={sentingActivityPage.h3}>- ‎฿30</Text></View>
                    </View>
                </View>

                <View style={styles.container_comming}>
                    <View style={styles.container_box1}>
                        <View style={styles.circle} >
                            <Image style={styles.circle_small} source={require("../images/Profile/logo.png")} />
                        </View>
                        <View style={{ flex: 5, marginTop: 18}}>
                            <Text style={sentingActivityPage.h1}>Get Fresh-Samyan Mitrto..</Text>
                            <Text style={sentingActivityPage.h3}>Delivery Via Grab</Text>
                            <Text style={sentingActivityPage.h3}>15 Mar</Text></View>
                            <View style={{ flex: 1 , marginTop: 18}}>
                            <Text style={sentingActivityPage.h3}>- ‎฿30</Text></View>
                    </View>
                </View>
                <View style={styles.container_comming}>
                    <View style={styles.container_box1}>
                        <View style={styles.circle} >
                            <Image style={styles.circle_small} source={require("../images/Profile/logo.png")} />
                        </View>
                        <View style={{ flex: 5, marginTop: 18}}>
                            <Text style={sentingActivityPage.h1}>Get Fresh-Samyan Mitrto..</Text>
                            <Text style={sentingActivityPage.h3}>Delivery Via Grab</Text>
                            <Text style={sentingActivityPage.h3}>15 Mar</Text></View>
                            <View style={{ flex: 1 , marginTop: 18}}>
                            <Text style={sentingActivityPage.h3}>- ‎฿30</Text></View>
                    </View>
                </View>
            </View>

        </View>
        </ScrollView>
    </SafeAreaView>
    )
}

const sentingActivityPage = {

    h1: {
        fontSize: 16,
        color: '#18E39C',
        fontFamily: 'gelion-bold',
       
    },

    h2: {
        fontSize: 16,
        color: '#575B65',
        fontFamily: 'gelion-bold',
    },
    h3:{
        fontSize: 12,
        color: '#fff',
        fontFamily: 'gelion-bold',
        
    }
    
   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#252A37',
        marginHorizontal: 16,
        marginTop: 20

    },
    container_comming:{
        flex: 5, flexDirection: 'row', padding:4 
    },
   
    container_box1: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#303540',
        height: 110,
        
        justifyContent: 'space-between'
    },
    circle: {
        width: 130,
        height: 130,
        borderRadius: 100 / 1,
        marginTop:10,

    },
    circle_small: {
        width: 80,
        height: 80,
        // borderRadius: 100 / 1,

        alignSelf: 'center',
        marginTop: 5,
        // borderColor: '#1C202A',
        // borderWidth: 1.5


    },

})