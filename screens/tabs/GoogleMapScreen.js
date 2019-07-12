import React,{Component} from 'react';
import {Platform, StyleSheet, View, TextInput, Image, TouchableOpacity , FlatList} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch , Button } from 'native-base';


import LottieView from 'lottie-react-native';

export default class GoogleMapScreen extends Component<Props> {


    render() {



        return (

            <View style={{flex : 1}}>

                <MapView
                    style={{width:400, height : 400}}
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps

                    region={{
                        latitude: 35.78825,
                        longitude: 51.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                </MapView>

            </View>

        );
    }
}

