import React,{Component} from 'react';
import {Platform, StyleSheet, View, TextInput, Image, TouchableOpacity , FlatList} from 'react-native';

import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch , Button } from 'native-base';


import LottieView from 'lottie-react-native';

export default class AnimationLottie extends Component<Props> {


    render() {



        return (

                    <LottieView source={require('../assets/like.json')} autoPlay loop />

        );
    }
}

