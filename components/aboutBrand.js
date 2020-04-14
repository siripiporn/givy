import React, { Component } from 'react';
import {View, Image, Text } from 'react-native';
import { globalStyles } from '../styles/styleGlobal';

export default class AboutBrand extends Component {
    render() {
        return (

            <View >

                <View style={globalStyles.container_brand}>
                    <Image style={globalStyles.logo_brand} source={require("../assets/images/logo.jpg")} />

                    <View style={globalStyles.point_brand}>
                        <Text style={globalStyles.contents_brand}>500</Text>
                        <Text style={globalStyles.contents_brand}>Post</Text>
                    </View>
                    <View style={globalStyles.point_brand}>
                        <Text style={globalStyles.contents_brand}>300</Text>
                        <Text style={globalStyles.contents_brand}>Followers</Text>
                    </View>
                    <View style={globalStyles.point_brand}>
                        <Text style={globalStyles.contents_brand}>700</Text>
                        <Text style={globalStyles.contents_brand}>Followers</Text>
                    </View>
                </View>

                <View style={globalStyles.discretion_brand}>
                    <Text style={globalStyles.contents_brand}>getfresh</Text>
                    <Text style={globalStyles.contents_brand}>Restaurant</Text>
                    <Text style={globalStyles.contents_brand}>Simple.Notural.Delicious</Text>
                </View>
                <View style={globalStyles.discretion_brand}>
                    <Text style={globalStyles.contents_brand}>At getfresh we believe that eating fresh food, knowing where it comes from and how it’s prepared directly influences your health and the environment.</Text>
                    <Text style={globalStyles.contents_brand}>www.getfresh.com</Text>
                    <Text style={globalStyles.contents_brand}>Loved by michel_lopez, mcube and 60 others</Text>
                </View>
            </View>


        )
    }
}
