
import React, { Component, useState } from 'react';
import {
    StyleSheet,
    Alert,
    TextInput,
    TouchableHighlight,
    ActivityIndicatorIOS,
    AsyncStorage,
    Text,
    View,
    ScrollView,
    SafeAreaView,
    Image

} from 'react-native';

import { CheckBox } from 'react-native-elements'
import LoginScreen from './LoginScreen'
import { globalStyles } from '../styles/styleGlobal';

class RegisterScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fullname: "",
            username: "",
            password:  [],
            repassword:  [],
            phonenumber: [],
            email:"",

        }
    }


    async onRegisterPressed() {
        try {
            const { username, password,repassword, fullname, phonenumber,email } = this.state
            await AsyncStorage.setItem('username', username)
            await AsyncStorage.setItem('password', password)
            await AsyncStorage.setItem('fullname', fullname)
            await AsyncStorage.setItem('repassword', repassword)
            await AsyncStorage.setItem('phonenumber', phonenumber)
            await AsyncStorage.setItem('email', email)

        } catch (error) {

        }

        this.props.navigation.navigate('LoginScreen')
    }

    render() {

        return (
            <View style={styles.container}>

                <SafeAreaView style={styles.scrollView}>
                    <ScrollView>
                        <View style={{ marginTop: 30 }}>
                            <Text style={globalStyles.greenFont}>REGISTER</Text>
                        </View>
                        <TextInput
                            onChangeText={(text) => this.setState({ fullname: text })}
                            keyboardType={'ascii-capable'}
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            style={styles.input} placeholder="Full Name">
                        </TextInput>
                        <TextInput
                            onChangeText={(Number) => this.setState({ phonenumber: Number })}
                            keyboardType={'numeric'}
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            style={styles.input} placeholder="Phone">
                        </TextInput>
                        <TextInput
                            onChangeText={(text) => this.setState({ username: text })}
                            keyboardType={'ascii-capable'}
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            style={styles.input} placeholder="User Name">
                        </TextInput>
                        <TextInput
                            onChangeText={(text) => this.setState({ email: text })}
                            keyboardType={'email-address'}
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            style={styles.input} placeholder="Email">
                        </TextInput>
                        <TextInput
                            onChangeText={(text) => this.setState({ password: text })}
                            style={styles.input}
                            placeholder="Password"
                            autoCorrect={false}
                            secureTextEntry={true}>
                        </TextInput>
                        <TextInput
                            onChangeText={(text) => this.setState({ repassword: text })}
                            style={styles.input}
                            placeholder="Re-Enter Password"
                            autoCorrect={false}
                            secureTextEntry={true}>
                        </TextInput>
 
                        <View style={{ flexDirection: 'row', flex: 1, marginTop: 5, alignItems: 'center' }}>
                            <CheckBox
                                center
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                                uncheckedColor='#fff'
                                checkedColor='#fff'
                                checked={this.state.checked}
                                onPress={() => this.setState({ checked: !this.state.checked })}
                            />
                            <Text style={globalStyles.h6}>Agree to Terms and Conditions</Text>
                        </View>
                       
                        <TouchableHighlight onPress={this.onRegisterPressed.bind(this)}
                            style={styles.registerButton}>
                            <Text style={styles.registerButtonText}>
                                Sign Up
                            </Text>
                        </TouchableHighlight>

                        <Text style={styles.error}>
                            {this.state.error}
                        </Text>
                    </ScrollView>
                </SafeAreaView>
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
    checkbox: {
        alignSelf: "center",
        color: 'white',

    },
    scrollView: {
        flex: 1,
        marginRight: 16,
        marginHorizontal: 16,
        backgroundColor: '#252A37',
    },
    input: {
        height: 50,
        width: '100%',
        marginTop: 10,
        padding: 4,
        borderRadius: 5,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#303540',
        color: 'white'
    },
    registerButton: {
        height: 50,
        backgroundColor: '#18E39C',
        alignSelf: 'stretch',
        marginTop: 40,
        borderRadius: 10,
        justifyContent: 'center'
    },
    registerButtonText: {
        fontSize: 22,
        color: '#FFF',
        alignSelf: 'center'
    },


    error: {
        color: 'red',
        paddingTop: 10
    },
    success: {
        color: 'green',
        paddingTop: 10
    },
    loader: {
        marginTop: 20
    }
});

export default RegisterScreen;
