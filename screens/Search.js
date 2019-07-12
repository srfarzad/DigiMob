import React,{Component} from 'react';
import {Platform, StyleSheet, View, TextInput, Image, TouchableOpacity , FlatList} from 'react-native';

import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch , Button } from 'native-base';

import Video from 'react-native-video';

export default class Search extends Component<Props> {


    render() {



        return (

            <Video source={{uri: "http://androidsupport.ir/video/Linux.mp4"}}   // Can be a URL or a local file.
                   ref={(ref) => {
                       this.player = ref
                   }}
                // Store reference

                   onBuffer={this.onBuffer}                // Callback when remote video is buffering
                   onError={this.videoError}               // Callback when video cannot be loaded
                   style={styles.backgroundVideo} />



        );
    }
}

const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});