import React from 'react';
import {   StyleSheet,
    TextInput,
    TouchableHighlight,
    ActivityIndicatorIOS,
    AsyncStorage,
    Alert,
    Text,
    Image,
    View,
    ScrollView } from 'react-native';
import { globalStyles } from '../styles/styleGlobal';
import RegisterScreen from './RegisterScreen'
import HomeScreen from '../homeScreen'
import axios from 'axios';

class LoginScreen extends React.Component {

    static navigationOptions = {
        title: 'Login Form',
    };

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }


    async onLoginPressed() {
        const { username, password } = this.state
        let regUsername = await AsyncStorage.getItem('username')
        let regPassword = await AsyncStorage.getItem('password')

        if (this.state.username == "" || this.state.password == "") {
            Alert.alert("Invalid Account")
            return
        }

        const data = {
            username: username,
            password: password
        };

        //Connect POST/login
        axios.post('http://192.168.0.42:9000/api/v1.0.0/login',data)
        .then( async(responese) => {
            let account = responese.data.data[0]; 
            if(account.personId != 0){
                //Save Account Storage2
                await AsyncStorage.setItem('AccountId', ""+account.personId)
                await AsyncStorage.setItem('AccountName', ""+account.uname)
                await AsyncStorage.setItem('Token', account.JWT)

                this.props.navigation.navigate("HomeScreen")
                console.log("Account->Access=>Token=",  account.JWT);
            }else{
                Alert.alert("Invalid Account, Please Try Again.")
            }
            console.log(account);
        }).catch((error) => {
            console.error(error);
        });

        // if (regUsername == username && regPassword == password) {
        //     Alert.alert("Login Successful")
        //     // this.props.navigation.navigate("HomeScreen")
        // } else {
        //     Alert.alert("Invalid Account")
        // }
    }

    onRegisterPressed() {
        this.props.navigation.navigate("RegisterScreen")
    }


    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollView} >
                    <View style={{ marginTop: 30 }}>
                        <Text style={globalStyles.greenFont}>SIGN IN</Text>
                    </View>

                    <TextInput
                        onChangeText={(text) => this.setState({ username: text })}
                        keyboardType={'email-address'}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        style={styles.input}
                        placeholder="Username"
                    />

                    <TextInput
                        onChangeText={(text) => this.setState({ password: text })}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        style={styles.input}
                        secureTextEntry={true}
                        placeholder="Password"
                    />

                    <TouchableHighlight
                        onPress={this.onLoginPressed.bind(this)}
                        style={styles.loginButton}>
                        <Text style={styles.loginButtonText}>
                            Login
                         </Text>

                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={this.onRegisterPressed.bind(this)}
                        style={styles.registerButton}>
                        <Text style={styles.loginButtonText}>
                            Register
                         </Text>
                    </TouchableHighlight>


                    <View style={{ flexDirection: 'row', flex: 1 }}>

                        <View style={styles.buttom}>
                        <Text style={styles.loginButtonText}>Faceook</Text>
                        </View>
                        <View style={styles.buttom}>
                            <Text style={styles.loginButtonText}>Google</Text>
                        </View>
                    </View>


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

    banner: {
        height: 90,
        width: '100%'
    },
    input: {
        height: 65,
        width: '100%',
        marginTop: 10,
        padding: 4,
        borderRadius: 5,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48bbec33',
        color: 'white'
    },
    buttom: {
        backgroundColor: '#18E39C',
        alignSelf: 'stretch',
        height:50,
        marginTop: 40,
        borderRadius: 10,
        margin:3,
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center'
    },
    loginButton: {
        flexDirection: 'row',
        flex: 1,
        height: 50,
        backgroundColor: '#18E39C',
        alignSelf: 'stretch',
        marginTop: 40,
        borderRadius: 10,
        justifyContent: 'center'
    },
    registerButton: {
        flexDirection: 'row',
        flex: 1,
        height: 50,
        borderRadius: 5,

        borderWidth: 1,
        borderColor: '#18E39C',
        alignSelf: 'stretch',
        marginTop: 40,
        borderRadius: 10,
        justifyContent: 'center'
    },
    loginButtonText: {
        fontSize: 14,
        color: '#FFF',
        alignSelf: 'center'
    },
    registerButtonText: {
        fontSize: 18,
        color: '#0007',
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

export default LoginScreen;
