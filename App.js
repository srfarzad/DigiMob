/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View, TextInput, Image, TouchableOpacity , FlatList} from 'react-native';

import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch , Button } from 'native-base';


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];

type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            data: [],
        }

    }

    increment() {
        this.setState({counter : this.state.counter + 1})
    }


    decrement() {
        this.setState({counter : this.state.counter - 1})
    }



    render() {
        return (

            <Container>
                <Header />
                <Content>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#FF9501" }}>
                                <Icon active name="airplane" />
                            </Button>
                        </Left>
                        <Body>
                        <Text>Airplane Mode</Text>
                        </Body>
                        <Right>
                            <Switch value={false} />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#007AFF" }}>
                                <Icon active name="wifi" />
                            </Button>
                        </Left>
                        <Body>
                        <Text>Wi-Fi</Text>
                        </Body>
                        <Right>
                            <Text>GeekyAnts</Text>
                            <Icon active name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#007AFF" }}>
                                <Icon active name="bluetooth" />
                            </Button>
                        </Left>
                        <Body>
                        <Text>Bluetooth</Text>
                        </Body>
                        <Right>
                            <Text>On</Text>
                            <Icon active name="arrow-forward" />
                        </Right>
                    </ListItem>
                </Content>
            </Container>



        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
