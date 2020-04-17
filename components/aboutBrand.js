import React, { Component } from 'react';
import {View, Image, Text,TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/styleGlobal';

export default class AboutBrand extends Component {
    render() {
        return (

            <View >
                <View style={globalStyles.container_brand}>
                    <Image style={globalStyles.logo_brand} source={require("../assets/images/logo.jpg")} />

                    <View style={globalStyles.point_brand}>
                        <Text style={globalStyles.contents_brand}>50K</Text>
                        <Text style={globalStyles.contents_pink}>Member</Text>
                    </View>
                    <View style={globalStyles.point_brand}>
                        <Text style={globalStyles.contents_brand}>30K</Text>
                        <Text style={globalStyles.contents_pink}>Followers</Text>
                    </View>
                    <TouchableOpacity style={globalStyles.buttom}>
                  <Text style={globalStyles.buttom_content}>+</Text>
              </TouchableOpacity>
                </View>

                <View style={globalStyles.discretion_brand}>
                    <Text style={globalStyles.contents_name_brand}>getfresh</Text>
                    <Text style={globalStyles.contents_name_des}>Restaurant</Text>
                  
                </View>
                <View style={globalStyles.discretion_brand}>
                <Text style={globalStyles.contents_text}>Simple.Notural.Delicious</Text>
                 <Text style={globalStyles.contents_text}>At getfresh we believe that eating fresh food, knowing where it comes from and how it’s prepared directly influences your health and the environment.</Text>  
                </View>
                <View style={globalStyles.discretion_brand}>  
                <Text style={globalStyles.contents_text}>www.getfresh.com</Text>
                </View>
            </View>


        )
    }
}
