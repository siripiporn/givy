import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Keyboard, TouchableOpacity, Button,Image, SafeAreaView, ScrollView } from "react-native";
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';
import Fliter from '../images/icons/fliter.svg'
import { globalStyles } from '../styles/styleGlobal';
 
const listItems = [
  {
      id: 'Food',
      title: 'Food',
  },
  {
      id: 'Milk',
      title: 'Milk',
  },

];


  export default class SearchBox extends Component {
 
    state = {
        searchBarFocused: false
    }
    componentDidMount() {
        this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
        this.keyboardWillShow = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)
        this.keyboardWillHide = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)
    }
    keyboardDidShow = () => {
        this.setState({ searchBarFocused: true })
    }
    keyboardWillShow = () => {
        this.setState({ searchBarFocused: true })
    }
    keyboardWillHide = () => {
        this.setState({ searchBarFocused: false })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={globalStyles.searchBox_store}>
                    <Animatable.View style={globalStyles.searchIcon_store}>
                        <Animatable.View animation={this.state.searchBarFocused ? "fadeInLeft" : "fadeInRight"} duration={400}>
                            <Icon name={this.state.searchBarFocused ? "md-arrow-back" : "ios-search"} style={{ fontSize: 24, color: 'white' }} />
                        </Animatable.View>
                        <TextInput placeholder="Search menu, category" style={globalStyles.contentSearch_store} />
                        {/* <Button title="Press me" color="#252A37" style={{height: 50, backgroundColor: '#252A37', borderColor: '#50596D',}} /> */}
                        <TouchableOpacity style={globalStyles.search_store}>
                            <Text style={globalStyles.search_icon_store}>
                                <Fliter />  </Text>
                        </TouchableOpacity>
                    </Animatable.View>

                </View>
                <FlatList
                    style={{ backgroundColor: this.state.searchBarFocused ? 'rgba(0,0,0,0.3)' : 'white' }}
                    data={listItems}
                    //renderItem={({ item }) => <Text style={{ padding: 20, fontSize: 18, backgroundColor: '#252A37',color: 'white' }}>{item.id}</Text>}
                    keyExtractor={(index) => index.toString()}
                />
                {/* container New Popular */}
                
 
                </View>
           
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        paddingTop: 5,
        flex: 1,
    }
})

