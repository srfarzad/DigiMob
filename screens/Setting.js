import React,{Component} from 'react';
import {Platform, StyleSheet, View, TextInput, Image, TouchableOpacity , FlatList} from 'react-native';

import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch , Button } from 'native-base';
import call from 'react-native-phone-call'
import MyWebView from "./MyWebView";


const args = {
    number: '+905314093654', // String value with the number to call
    prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call
}

export default class Setting extends Component<Props> {


    render() {



        return (

            <Container>

                <Content>

                <Button block info  onPress={()=> {

                    call(args).catch(console.error)

                }}>
                    <Text>
                        Call

                    </Text>
                </Button>

                    <Button block success onPress={()=>{

                        this.props.navigation.navigate('MyWebView')

                    }}>
                        <Text>
                            Webview

                        </Text>
                    </Button>





                </Content>
            </Container>



        );
    }
}

