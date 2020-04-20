import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Store from '../components/store';
import SegmentedControlTab from 'react-native-segmented-control-tab'
import Feed from './Feed';

export default class Menu extends Component {

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
    const { customStyleIndex } = this.state;
    return (
      <View >


        {/* Simple Segmented with Custom Styling*/}
        <SegmentedControlTab
          values={['Posts', 'Store', 'Reservation']}
          selectedIndex={customStyleIndex}
          onTabPress={this.handleCustomIndexSelect}
          borderRadius={0}
          tabsContainerStyle={{ height: 70, backgroundColor: '#1F2431', }}
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
            <Feed />
          </View>
        )}
        {customStyleIndex === 1 && (
          <View style={styles.search}>
            <Store />
          </View>
        )}
        {customStyleIndex === 2 && (
          <View style={styles.search}>

          </View>

        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#252A37',

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
  tabContent: {
    color: 'white',
    fontSize: 18,
  },
  feed: {
    flex: 1,
    flexDirection: 'column',

  },

});
