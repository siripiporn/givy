import React, { Component } from "react";
import {  View, Image, FlatList } from "react-native";
import { globalStyles } from '../styles/styleGlobal';

export default class HomeCommunityFeedScreen extends Component {
  constructor() {
    super();
    this.state = {
      photo_feed: [0, 1, 2, 3, 4],
      refresh: false,
    };
  }
  loadNew = () => {
    this.setState({
      refresh: true,
    });
    this.setState({
      photo_feed: [5, 6, 7, 8, 9],
      refresh: false,
    });
  };
  render() {
    return (
      <FlatList
        refreshing={this.state.refresh}
        onRefresh={this.loadNew}
        data={this.state.photo_feed}
        keyExtractor={(index) => index.toString()}
        renderItem={({ index }) => (
          <View key={index} style={globalStyles.container_feed}>
            <Image
              style={globalStyles.image_feed}
              source={require("../images/feed/feed1.png")} 
            />
            <Image
              style={globalStyles.image_feed}
              source={require("../images/feed/feed2.png")} 
            />
            <Image
              style={globalStyles.image_feed}
              source={require("../images/feed/feed3.png")} 
              // source={{
              //   require:
              //     "https://source.unsplash.com/random/800x600" +
              //     Math.floor(Math.random() * 800 + 500),
              // }}
            />
          </View>
        )}
      />
    );
  }
}
 




 