import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/styleGlobal';
import SearchProfile from '../shared/searchProfile'
import ConfirmationPage from './ConfirmationPage'

export default function SelectFriendPage({ navigation }) {

    return (

        <View style={styles.container}>
            <SafeAreaView>
                <ScrollView>

                    <View style={{ flexDirection: 'row' }}>
                        <SearchProfile />
                    </View>

                    <TouchableOpacity onPress ={() => navigation.navigate('ConfirmationPage')} style={globalStyles.container_box_profile}>
                        <View style={globalStyles.container_comments_profile}>
                            <View>
                            <Image style={globalStyles.circle_small_profile}
                                    source={require("../images/comments/Getfresh.png")} />
                            </View>
                            <View style={{ margin: 16 }}>
                                <Text style={globalStyles.h6}>olivia.engelhardt</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress ={() => navigation.navigate('ConfirmationPage')} style={globalStyles.container_box_profile}>
                        <View style={globalStyles.container_comments_profile}>
                            <View>
                            <Image style={globalStyles.circle_small_profile}
                                    source={require("../images/Profile/Getfresh-4.png")} />
                            </View>
                            <View style={{ margin: 16 }}>
                                <Text style={globalStyles.h6}>getfresh</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress ={() => navigation.navigate('ConfirmationPage')} style={globalStyles.container_box_profile}>
                        <View style={globalStyles.container_comments_profile}>
                            <View>
                            <Image style={globalStyles.circle_small_profile}
                                    source={require("../images/Profile/Michel.png")} />
                            </View>
                            <View style={{ margin: 16 }}>
                                <Text style={globalStyles.h6}>michel.lopez</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress ={() => navigation.navigate('ConfirmationPage')} style={globalStyles.container_box_profile}>
                        <View style={globalStyles.container_comments_profile}>
                            <View>
                            <Image style={globalStyles.circle_small_profile}
                                    source={require("../images/Profile/Getfresh-1.png")} />
                            </View>
                            <View style={{ margin: 16 }}>
                                <Text style={globalStyles.h6}>idellete.auchamp</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress ={() => navigation.navigate('ConfirmationPage')} style={globalStyles.container_box_profile}>
                        <View style={globalStyles.container_comments_profile}>
                            <View>
                            <Image style={globalStyles.circle_small_profile}
                                    source={require("../images/Profile/Getfresh-2.png")} />
                            </View>
                            <View style={{ margin: 16 }}>
                                <Text style={globalStyles.h6}>jam.kay</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress ={() => navigation.navigate('ConfirmationPage')} style={globalStyles.container_box_profile}>
                        <View style={globalStyles.container_comments_profile}>
                            <View>
                            <Image style={globalStyles.circle_small_profile}
                                    source={require("../images/Profile/Getfresh-3.png")} />
                            </View>
                            <View style={{ margin: 16 }}>
                                <Text style={globalStyles.h6}>monica.sc</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress ={() => navigation.navigate('ConfirmationPage')} style={globalStyles.container_box_profile}>
                        <View style={globalStyles.container_comments_profile}>
                            <View>
                            <Image style={globalStyles.circle_small_profile}
                                    source={require("../images/Profile/Michel.png")} />
                            </View>
                            <View style={{ margin: 16 }}>
                                <Text style={globalStyles.h6}>michel.lopez</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                <TouchableOpacity onPress ={() => navigation.navigate('ConfirmationPage')} style={globalStyles.container_box_profile}>
                        <View style={globalStyles.container_comments_profile}>
                            <View>
                            <Image style={globalStyles.circle_small_profile}
                                    source={require("../images/Profile/Getfresh-1.png")} />
                            </View>
                            <View style={{ margin: 16 }}>
                                <Text style={globalStyles.h6}>idellete.auchamp</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress ={() => navigation.navigate('ConfirmationPage')} style={globalStyles.container_box_profile}>
                        <View style={globalStyles.container_comments_profile}>
                            <View>
                                <Image style={globalStyles.circle_small_profile}
                                    source={require("../images/Profile/Getfresh.png")} />
                            </View>
                            <View style={{ margin: 16 }}>
                                <Text style={globalStyles.h6}>monica.sc</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#252A37',

    },

 
})

