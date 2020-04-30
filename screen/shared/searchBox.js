import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Keyboard, TouchableOpacity, Button,Image, SafeAreaView, ScrollView } from "react-native";
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';
import Fliter from '../images/icons/fliter.svg'
import ButtomSearch from '../images/icons/buttom_search.svg'
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


  export default class SearchBoxButtom extends Component {
 
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
                             <ButtomSearch /></Text>
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
    },
    searchBox_store: {
        height: 80,
        backgroundColor: '#252A37',
        justifyContent: 'center',
        paddingHorizontal: 5
    },
    searchIcon_store: {
        height: 50, backgroundColor: '#252A37', borderColor: '#50596D',
        borderRadius: 5,
        borderWidth: 1.5, flexDirection: 'row', padding: 5, alignItems: 'center'
    },
    contentSearch_store: {
        fontSize: 18, 
        marginLeft: 15, 
        flex: 1, color: 'white'
    },
    search_store: {
        marginHorizontal: 10,
        paddingVertical: 10,
        left: 15,
        borderColor: '#50596D',
        borderWidth: 1,
        borderEndWidth: 2,
        height: 50,
        width: 80

    },
    search_icon_store: {
        color: 'white',
        marginHorizontal: 28,
        marginVertical: 5,
    },
    container_image_store: {
        marginHorizontal: 10,
        flex: 1,
        flexDirection: 'row'
    },
    search_icon_store: {
        color: 'white',
        marginHorizontal: 28,
        marginVertical: 5,
    },
})

