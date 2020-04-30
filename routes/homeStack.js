import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 
import BuyProductScreen from '../screen/rewards/buyProductScreen';
import CartProductScreen from '../screen/rewards/cartProductScreen';
import DetailProductScreen from '../screen/rewards/detailProductScreen';
import HomeCommunityFeedScreen from '../screen/community/homeCommunityFeedScreen';


import CommentsFeedScreen from '../screen/community/commentsFeedScreen';
import DetailFeedScreen from '../screen/community/detailFeedScreen';
import ExplorePage from '../screen/explore/explorepage';
import DetailExplore from '../screen/explore/detailExplore';
import WalletPage from '../screen/wallet/walletPage';
import ChatPage from '../screen/chat/chatPage';
import ProfilePage from '../screen/proFile/profilePage';

import Title from '../screen/shared/title';
import PointComponent from '../screen/shared/point';
import NavButtom from '../screen/shared/navButtom';
import AboutBrand from '../screen/shared/aboutBrand';
import SearchBox from '../screen/shared/searchBox';


import Story from '../screen/shared/story';
import NavMenuPage from '../screen/navMenu/navMenuPage';
import FeedRewardScreen from '../screen/rewards/feedRewardScreen';
import FeedOrderScreen from '../screen/order/feedOrderScreen';
import HomeScreen from '../screen/homeScreen';
import DetailOrder from '../screen/order/detailProduct';
import ConfirmationProduct from '../screen/order/confirmationProduct';
import ChallengesScreen from '../screen/challenges/challengesScreen';
// Profile
import  ItemsPage from '../screen/proFile/itemsPage'
import ActivityPage from '../screen/proFile/activityPage';
import ChallengePage from '../screen/proFile/challengePage';
 

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();


const Home = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <Image style={{ height: 28, width: 28 }}
      resizeMode='contain'
      source={
        focused
          ? require('../assets/images/Navigation/Home2x_select.png')
          : require('../assets/images/Navigation/Home2x.png')

      }
    />
  )
}

const Explore = {
  tabBarLabel: 'Explore',
  tabBarIcon: ({ focused }) => (
    <Image style={{ height: 28, width: 28 }}
      resizeMode='contain'
      source={
        focused
          ? require('../assets/images/Navigation/Explore2x_select.png')
          : require('../assets/images/Navigation/Explore2x.png')

      }
    />
  )
}

const Wallet = {
  tabBarLabel: 'Wallet',
  tabBarIcon: ({ focused }) => (
    <Image style={{ height: 28, width: 28 }}
      resizeMode='contain'
      source={
        focused
          ? require('../assets/images/Navigation/Scan2x_select.png')
          : require('../assets/images/Navigation/Scan2x.png')

      }
    />
  )
}

const Chat = {
  tabBarLabel: 'Chat',
  tabBarIcon: ({ focused }) => (
    <Image style={{ height: 28, width: 28 }}
      resizeMode='contain'
      source={
        focused
          ? require('../assets/images/Navigation/message2x_select.png')
          : require('../assets/images/Navigation/message2x.png')

      }
    />
  )
}

const Profile = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <Image style={{ height: 28, width: 28 }}
      resizeMode='contain'
      source={
        focused
          ? require('../assets/images/Navigation/profile2x_select.png')
          : require('../assets/images/Navigation/profile2x.png')

      }
    />
  )
}

const TabOnbuttom = () => {
  return (
    <Tab.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{ gestureEnabled: true }}>

      <Tab.Screen name="HomeScreen"
        component={HomeScreen}
        options={Home}

      />
      <Tab.Screen
        name='Explore'
        component={ExplorePage}
        options={Explore}
      />
      <Tab.Screen
        name='WalletPage'
        component={WalletPage}
        options={Wallet}
      />

      <Tab.Screen
        name='Chat'
        component={ChatPage}
        options={Chat}
      />
      <Tab.Screen
        name='Profile'
        component={ProfilePage}
        options={Profile}
      />


    </Tab.Navigator>
  )
}

export default Navigator = () => {
  return (

    <Stack.Navigator initialRouteName="HomeScreen"
      screenOptions={{ gestureEnabled: false }}>

      {/* Rewards Screen */}
       
      <Stack.Screen name='HomeScreen' component={TabOnbuttom} options={{title: ' ', headerStyle: {height: 25,backgroundColor: '#252A37',},headerTintColor: '#fff',}}/>
      <Stack.Screen name='RewardsScreen' component={TabOnbuttom} options={{ title: 'RewardsScreen' }} />
      <Stack.Screen name='DetailProductScreen' component={DetailProductScreen} options={{title: 'GET FRESH', justifycontent: 'center',  headerTitleAlign: 'center' ,   headerStyle: {height: 70,backgroundColor: '#252A37',  },headerTintColor: '#fff'  }} />
      <Stack.Screen name='BuyProductScreen' component={BuyProductScreen} options={{title: 'GET FRESH', justifycontent: 'center',  headerTitleAlign: 'center' ,   headerStyle: {height: 70,backgroundColor: '#252A37',  },headerTintColor: '#fff'  }} />
      <Stack.Screen name='CartProductScreen' component={CartProductScreen} options={{title: ' Purchase Confirmation', justifycontent: 'center', headerTitleAlign: 'center' , headerStyle: {height: 70,backgroundColor: '#252A37',  },headerTintColor: '#fff',fontSize: 15, }} />
      <Stack.Screen name='FeedRewardScreen' component={FeedRewardScreen} options={{ title: 'FeedRewardScreen' }} />

      {/* Community Screen */}
      <Stack.Screen name='HomeCommunityFeedScreen' component={HomeCommunityFeedScreen} options={{ title: 'HomeCommunityFeedScreen' }} />
      <Stack.Screen name='DetailFeedScreen' component={DetailFeedScreen} options={{ title: 'DetailFeedScreen' }} />
      <Stack.Screen name='CommentsFeedScreen' component={CommentsFeedScreen} options={{ title: 'CommentsFeedScreen' }} />

      {/* PageOnButtom Screen */}
      <Stack.Screen name='ExplorePage' component={ExplorePage} options={{ title: 'ExplorePage' }} />
      <Stack.Screen name='DetailExplore' component={DetailExplore} options={{ title: 'DetailExplore' }} />
      <Stack.Screen name='WalletPage' component={WalletPage} options={{ title: 'WalletPage' }} />
      <Stack.Screen name='ChatPage' component={ChatPage} options={{ title: 'ChatPage' }} />
    
     {/* Profile Screen */}
      <Stack.Screen name='ProfilePage' component={ProfilePage} navigationOptions = {{ title: 'Home' , headerStyle: {height: 70,backgroundColor: '#252A37',  },}}/>
      <Stack.Screen name='ItemsPage' component={ItemsPage} options={{title: 'name', justifycontent: 'center',  headerTitleAlign: 'center' ,   headerStyle: {height: 70,backgroundColor: '#252A37',  },headerTintColor: '#fff'  }} />
      <Stack.Screen name='ActivityPage' component={ActivityPage} options={{title: 'ActivityPage', justifycontent: 'center',  headerTitleAlign: 'center' ,   headerStyle: {height: 70,backgroundColor: '#252A37',  },headerTintColor: '#fff'  }} />
      <Stack.Screen name='ChallengePage' component={ChallengePage} options={{title: 'ChallengePage', justifycontent: 'center',  headerTitleAlign: 'center' ,   headerStyle: {height: 70,backgroundColor: '#252A37',  },headerTintColor: '#fff'  }} />

      {/* Shared Component*/}
      <Stack.Screen name='Title' component={Title} options={{ title: 'Title' }} />
      <Stack.Screen name='PointComponent' component={PointComponent} options={{ title: 'PointComponent' }} />

      <Stack.Screen name='NavButtom' component={NavButtom} options={{ title: 'NavButtom' }} />
      <Stack.Screen name='AboutBrand' component={AboutBrand} options={{ title: 'AboutBrand' }} />
      <Stack.Screen name='SearchBox' component={SearchBox} options={{ title: 'SearchBox' }} />
      <Stack.Screen name='Story' component={Story} options={{ title: 'Story' }} />

      {/* NavMenu */}
      <Stack.Screen name='NavMenuPage' component={NavMenuPage} options={{ title: 'NavMenuPage' }} />


      {/* Order */}
      <Stack.Screen name='FeedOrderScreen' component={FeedOrderScreen} options={{ title: 'FeedOrderScreen' }} />
      <Stack.Screen name='DetailOrder' component={DetailOrder}  options={{title: ' Store', justifycontent: 'center' , headerStyle: {height: 70,backgroundColor: '#252A37', },headerTintColor: '#fff',}} />
      <Stack.Screen name='ConfirmationProduct' component={ConfirmationProduct}  options={{title: 'Purchase Confirmation', justifycontent: 'center' , headerStyle: {height: 70,backgroundColor: '#252A37', },headerTintColor: '#fff',}} />
       
      {/* ChallengesScreen */}
      <Stack.Screen name='ChallengesScreen' component={ChallengesScreen}  options={{title: 'ChallengesScreen', justifycontent: 'center' , headerStyle: {height: 70,backgroundColor: '#252A37', },headerTintColor: '#fff',}} />
       
   
       
    </Stack.Navigator>
  )
}