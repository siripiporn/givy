import React, { Component } from 'react'
import QRCode from 'react-native-qrcode-image';
 
import {
    
    StyleSheet,
    View,
    TextInput
} from 'react-native';
 
export default class  HelloWorld extends Component {
  state = {
    text: 'http://facebook.github.io/react-native/',
  };
 
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({text: text})}
          value={this.state.text}
        />
        <QRCode
          value={this.state.text}
          size={200}
          bgColor='#FFFFFF'
          fgColor='#000000'/>
      </View>
    );
  };
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
 
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 5,
    }
});
 
 
 