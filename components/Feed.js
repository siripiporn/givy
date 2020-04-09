import React, { Component } from "react";
import { StyleSheet, View, Image, Text, FlatList } from "react-native";

export default class Feed extends Component {
  constructor(props) {
    super(props);
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
          <View key={index} style={styles.container}>
            <Image
              style={styles.image}
              source={{
                uri:
                  "https://source.unsplash.com/random/800x600" +
                  Math.floor(Math.random() * 800 + 500),
              }}
            />
            <Image
              style={styles.image}
              source={{
                uri:
                  "https://source.unsplash.com/random/800x600" +
                  Math.floor(Math.random() * 800 + 500),
              }}
            />
            <Image
              style={styles.image}
              source={{
                uri:
                  "https://source.unsplash.com/random/800x600" +
                  Math.floor(Math.random() * 800 + 500),
              }}
            />
          </View>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginTop: 16,
    marginHorizontal: 5,
  },

  image: {
    height: 120,
    width: 300,
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 5,
  },
});
