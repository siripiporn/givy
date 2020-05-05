import React from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet, Image } from 'react-native';
import Bell from '../images/Profile/Bell.svg'
import HomeIcon from '../images/Profile/home.svg'
import SegmentedControlTab from 'react-native-segmented-control-tab'
import ActivityPage from './activityPage';
import ItemsPage from './itemsPage';
import ChallengePage from './challengePage'

export default class ProfilePage extends React.Component {


    constructor() {
        super();
        this.state = {
            customStyleIndex: 0,
            //Default selected Tab Indexes for cusatom SegmentedControlTab
        };
    }
    handleCustomIndexSelect = (index: number) => {
        //handle tab selection for custom Tab Selection SegmentedControlTab
        this.setState(prevState => ({ ...prevState, customStyleIndex: index }));
    };

    render() {
        // const { navigate } = this.props.navigation;
        const { customStyleIndex } = this.state;
        return (

            <View style={styles.container}>

                <View style={{ marginHorizontal: 16, flex: 1 }}>
                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                        <Text style={styles.header}><HomeIcon /></Text>
                        <Text style={styles.header}>Jamiambambam</Text>
                        <View style={styles.header_icon} ><Bell /></View>
                    </View>

                    <View style={{ flex: 3, flexDirection: 'row', marginTop:20 }}>
                        <View style={styles.circle} >
                            <Image style={styles.circle_small} source={require("../images/Profile/man.jpg")} />
                        </View>

                        <View style={{ marginHorizontal: 16, flex: 3, flexDirection: 'row',}}>
                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                <Text style={styles.h1}>Jam Kraprayoon</Text>
                                <Text style={styles.green_text}>ID : 0293032-20</Text>
                                <View style={styles.box}>
                                    <Text style={styles.h2}>EDIT PROFILE</Text>
                                </View>
                            </View>

                        </View>
                    </View>
                </View>

                <View style={{ flex: 2 }}>
                    <SegmentedControlTab
                        values={['Activity', 'Wallet', 'Challenge']}
                        selectedIndex={customStyleIndex}
                        onTabPress={this.handleCustomIndexSelect}
                        borderRadius={0}
                        tabsContainerStyle={{ height: 50, backgroundColor: '#1F2431', }}
                        tabStyle={{
                            backgroundColor: '#1F2431',
                            borderWidth: 0,
                            borderColor: 'transparent',

                        }}
                        activeTabStyle={{ backgroundColor: '#1F2431', }}
                        tabTextStyle={{ color: '#8F9198', fontFamily: 'gelion-bold', fontSize: 18, }}
                        activeTabTextStyle={{ color: 'white' }}
                    />

                    {customStyleIndex === 0 && (
                        <View style={styles.container_feed}>

                            <ActivityPage />

                            {/* <Button title="PointComponent" onPress={() => this.props.navigation.navigate('PointComponent')}/>   */}
                        </View>
                    )}
                    {customStyleIndex === 1 && (
                        <View style={styles.container_feed}>

                            <ItemsPage />
                        </View>
                    )}
                    {customStyleIndex === 2 && (
                        <View style={styles.container_feed}>

                            <ChallengePage />
                        </View>
                    )}
                </View>
            </View>

        );
    }
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#252A37',

    },
    box: {
        marginTop: 10,
        paddingVertical: 10,
        borderColor: 'white',
        borderRadius: 7,
        borderWidth: 1.5,
        width: 120,
    },
    h1: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'gelion-bold',
    },
    h2: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'gelion-bold',
        textAlign: 'center'
    },
    header_icon: {
        marginTop: 10
    },
    header: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'gelion-bold',
        textAlign: 'center',
        marginTop: 10
    },
    green_text: {
        color: '#18E39C',
        fontSize: 15,
        fontFamily: 'gelion-bold',
    },
    circle: {
        width: 90,
        height: 90,
        borderRadius: 100 / 1,
        backgroundColor: '#18E39C',

    },
    circle_small: {
        width: 80,
        height: 80,
        borderRadius: 100 / 1,
        backgroundColor: 'pink',
        alignSelf: 'center',
        marginTop: 5,
        borderColor: '#1C202A',
        borderWidth: 1.5


    },
    container_feed: {
        backgroundColor: '#252A37',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    search: {
        flex: 1,
        flexDirection: 'row',
    },


});
