
import React, { Component } from 'react';
import {
    StyleSheet,
    Alert,
    TextInput,
    TouchableHighlight,
    ActivityIndicatorIOS,
    AsyncStorage,
    Text,
    View,
    ScrollView
} from 'react-native';

import LoginScreen from './LoginScreen'

class RegisterScreen extends Component {

    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    async onRegisterPressed(){
        try{
            const {username, password} = this.state
            await AsyncStorage.setItem('username', username)
            await AsyncStorage.setItem('password', password)
        }catch(error){

        }

        this.props.navigation.navigate('LoginScreen')
    }

    
    render() {

        return (
            <View style={styles.container}>
               <ScrollView style={styles.scrollView} > 
                <TextInput
                    onChangeText={(text) => this.setState({ username: text })}
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
                <TouchableHighlight onPress={this.onRegisterPressed.bind(this)} 
                style={styles.registerButton}>
                    <Text style={styles.registerButtonText}>
                        Register
              </Text>
                </TouchableHighlight>
                <Text style={styles.error}>
                    {this.state.error}
                </Text>
                </ScrollView>
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
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48bbec33'
    },
    registerButton: {
        height: 50,
        backgroundColor: '#EB6663',
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

    heading: {
        fontSize: 30,
        marginBottom: 40
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
