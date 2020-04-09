import React, {useState} from 'react';
import * as Font from 'expo-font';
import {StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import Home from './components/home';


const getFonts = () => Font.loadAsync({
  'Gelion-bold': require('./assets/font/Gelion-Bold.ttf'),

});
 
export default function App() {
  const [fontLoaded, setfontLoaded] = useState(false);

  if (fontLoaded) {
    return (
      <Home />
    )
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setfontLoaded(true)}
      />
    )
  }

}
const styles = StyleSheet.create({
  container: {
   
    marginVertical: 8,
    marginTop: 50,
    backgroundColor:'#252A37',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
