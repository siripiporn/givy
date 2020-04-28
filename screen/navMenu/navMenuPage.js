import React from 'react';
import { View, Text, TouchableOpacity,Button,StyleSheet } from 'react-native';
import { globalStyles } from '../styles/styleGlobal';
 
import SegmentedControlTab from 'react-native-segmented-control-tab'
import PointComponent from '../shared/point';
import FeedRewardScreen from '../rewards/feedRewardScreen';
import FeedOrderScreen from '../order/feedOrderScreen';
import HomeCommunityFeedScreen from '../community/homeCommunityFeedScreen'

 
export default class NavMenuPage extends React.Component {
  
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
    // const { navigate } = this.props.navigation;
    const { customStyleIndex } = this.state;
   
    return (
      <View >


        {/* Simple Segmented with Custom Styling*/}
        <SegmentedControlTab
          values={['Rewards', '  Community']}
          selectedIndex={customStyleIndex}
          onTabPress={this.handleCustomIndexSelect}
          borderRadius={0}
          tabsContainerStyle={{ height: 50, backgroundColor: '#1F2431', }}
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
             <FeedRewardScreen navigation={this.props.navigation} />  
       
           
           {/* <Button title="PointComponent" onPress={() => this.props.navigation.navigate('PointComponent')}/>   */}
          </View>
        )}
        {customStyleIndex === 1 && (
          <View style={styles.search}>
              <HomeCommunityFeedScreen navigation={this.props.navigation} /> 
        {/* <FeedOrderScreen navigation={this.props.navigation} />   */}
             {/* <Button title="PointComponent" onPress={() => this.props.navigation.navigate('PointComponent')}/>   */}
          </View>
        )}
        {customStyleIndex === 2 && (
          <View style={styles.search}>
 {/* <FeedRewardScreen navigation={this.props.navigation} />   */}
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
