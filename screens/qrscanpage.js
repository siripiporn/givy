import React from 'react';
import {  View, Image, Text,Button } from 'react-native';



const Qrscanpage = props => {
    return (
      
            <View>
        <Button title='Title' onPress={() => props.navigation.navigate('Explorepage')}  />
                 </View>
    )
}


export default Qrscanpage;
