import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homepage from '../components/homepage';
import Qrscanpage from './qrscanpage';
import Explorepage from './explorepage';
import MessagesPage from './messagesPage';
import ProfilePage from './profilePage';
import {Image } from 'react-native';
 

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Home  = {
  tabBarLabel: 'Home',
  tabBarIcon:({focused}) => (
    <Image style={{height: 28, width:28}} 
    resizeMode = 'contain'
    source={
      focused 
      ? require('../assets/images/Navigation/Home2x_select.png') 
      : require('../assets/images/Navigation/Home2x.png')

    }
    />
  )
}

const Explore  = {
  tabBarLabel: 'Explore',
  tabBarIcon:({focused}) => (
    <Image style={{height: 28, width:28}} 
    resizeMode = 'contain'
    source={
      focused 
      ? require('../assets/images/Navigation/Explore2x_select.png') 
      : require('../assets/images/Navigation/Explore2x.png')

    }
    />
  )
}


const Scan  = {
  tabBarLabel: 'Scan',
  tabBarIcon:({focused}) => (
    <Image style={{height: 28, width:28}} 
    resizeMode = 'contain'
    source={
      focused 
      ? require('../assets/images/Navigation/Scan2x_select.png') 
      : require('../assets/images/Navigation/Scan2x.png')

    }
    />
  )
}

const Messages  = {
  tabBarLabel: 'Messages',
  tabBarIcon:({focused}) => (
    <Image style={{height: 28, width:28}} 
    resizeMode = 'contain'
    source={
      focused 
      ? require('../assets/images/Navigation/message2x_select.png') 
      : require('../assets/images/Navigation/message2x.png')

    }
    />
  )
}


const Profile  = {
  tabBarLabel: 'Profile',
  tabBarIcon:({focused}) => (
    <Image style={{height: 28, width:28}} 
    resizeMode = 'contain'
    source={
      focused 
      ? require('../assets/images/Navigation/profile2x_select.png') 
      : require('../assets/images/Navigation/profile2x.png')

    }
    />
  )
}

const SuccessTab = () => {
  return (
    <Tab.Navigator 
    initialRouteName='Homepage'
    screenOptions={{ gestureEnabled: false }}>
      
      <Tab.Screen name="Homepage" 
      component={Homepage} 
      options={Home}
      
      />
    
       <Tab.Screen
        name='Explorepage'
        component={Explorepage}
        options={Explore}
      />

        <Tab.Screen
        name='Qrscanpage'
        component={Qrscanpage}
        options={Scan}
      />

       <Tab.Screen
        name='MessagesPage'
        component={MessagesPage}
        options={Messages}
      />
     

        <Tab.Screen
        name='ProfilePage'
        component={ProfilePage}
        options={Profile}
      />

    </Tab.Navigator>
  )
}

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Homepage'
      screenOptions={{ gestureEnabled: false }}
      >
    <Stack.Screen
        name='Homepage'
        component={SuccessTab}
      
        options={{
          title: 'home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <Stack.Screen
        name='Scan'
        component={SuccessTab}
        options={{ title: 'Qrscanpage' }}
      />
    
       <Stack.Screen
        name='Explorepage'
        component={SuccessTab}
        options={{ title: 'Explorepage' }}
      />

    
         <Stack.Screen
        name='MessagesPage'
        component={SuccessTab}
        options={{ title: 'Messages' }}
      />
          <Stack.Screen
        name='ProfilePage'
        component={SuccessTab}
        options={{ title: 'Profile' }}
      />
    </Stack.Navigator>

  )
}
 

export default RootStack;