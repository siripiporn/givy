import React, {useState} from 'react';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
// import Navigation from './routes/homeSlack';
// import Navigation from './screens/navigation';
import Navigation from './routes/homeStack';
 
import { AppLoading } from 'expo';

const getFonts = () => Font.loadAsync({
  'gelion-bold': require('./assets/fonts/Gelion-Bold.ttf'),
  'gelion-medium': require('./assets/fonts/Gelion-Medium.ttf'),
  'gelion-regular': require('./assets/fonts/Gelion-Regular.ttf'),
  'Arialic': require('./assets/fonts/Arialic-Hollow.ttf'),
  'gelion-Black': require('./assets/fonts/Gelion-Black.ttf'),
  
});

export default function App() {
  const [fontLoaded, setfontLoaded] = useState(false);

  if (fontLoaded) {
    return (
       <NavigationContainer> 
      <Navigation />
   
      </NavigationContainer>
     
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
 
 