/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View, Button, TextInput, Image, TouchableOpacity , FlatList} from 'react-native';

import { Container, Header, Title, Content, Footer, FooterTab, Left, Right, Body, Icon, Text } from 'native-base';


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

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


    myAlert() {

        alert("React native");

    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={{textAlign: 'center', color: '#ccc'}}>{instructions}</Text>

                <TextInput style={{width: 200}}/>

                <Button title="Click" onPress={() => {
                    this.myAlert();
                }

                }/>


                <Image source={require("./src/image.png")} style={{width: 50, height: 50}}/>


                <Image
                    source={{uri: "https://cdn.dribbble.com/users/1850024/screenshots/6660965/schedule-dribbble_4x.png"}}
                    style={{width: 50, height: 50}}/>


                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>

                    <TouchableOpacity onPress={()=> {

                        this.increment()

                    }} >

                        <Text> + </Text>


                    </TouchableOpacity>


                    <Text> {this.state.counter} </Text>

                    <TouchableOpacity onPress={ ()=> {
                        this.decrement()
                    } }  >

                        <Text> - </Text>

                    </TouchableOpacity>


                </View>


                <FlatList

                    data={[

                        {key : 'Iran'}, {key : 'USA'}
                        , {key : 'UK'}, {key : 'CA'}, {key : 'Fr'}

                    ]}

                    renderItem={ ({item}) => <Text> {item.key}  </Text>  }

                />


            </View>
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
