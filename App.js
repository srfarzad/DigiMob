/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View, TextInput, Image, TouchableOpacity, FlatList} from 'react-native';

import {Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch, Button} from 'native-base';
import {createStackNavigator, createAppContainer, createBottomTabNavigator , createDrawerNavigator} from 'react-navigation';
import Dashboard from './screens/Dashboard';
import Profile from './screens/Profile';
import HomeScreen from "./screens/HomeScreen";
import SignUp from "./screens/SignUp";
import Setting from "./screens/Setting";
import Search from "./screens/Search";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


type Props = {};

class SignIn extends Component<Props> {

    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            data: [],
        }

    }

    increment() {
        this.setState({counter: this.state.counter + 1})
    }


    decrement() {
        this.setState({counter: this.state.counter - 1})
    }


    render() {
        return (

            <Container>

                <Content>


                    <Text> Home </Text>

                    <Button onPress={() => {

                        this.props.navigation.navigate('Detail', {
                            name: 10,
                            otherParam: 'anything you want here',
                        });


                    }}>

                        <Text>

                            Detail

                        </Text>

                    </Button>

                    <Button onPress={() => {

                        this.props.navigation.navigate('Dashboard');


                    }}>

                        <Text>

                            Dashbaord

                        </Text>

                    </Button>


                </Content>
            </Container>


        );
    }
}


class DetailScreen extends Component<Props> {


    render() {

        const {navigation} = this.props;
        const itemId = navigation.getParam('name', 0);
        const otherParam = navigation.getParam('otherParam', '');

        return (

            <Container>

                <Content>


                    <Text>
                        {itemId}

                    </Text>


                    <Text>

                        {
                            otherParam
                        }

                    </Text>


                </Content>
            </Container>


        );
    }
}


const TabNavigator = createBottomTabNavigator({

    Home: HomeScreen,
    Search:  Search,
    Setting: Setting

},
    {
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
    ,{
        navigationOptions: ({navigation}) => {
            const {routeName} = navigation.state.routes[navigation.state.index];
            return {
                headerTitle: routeName
            };
        }
    }



);


const DashboardNavigator = createStackNavigator({

    DashbaordTabNavigator: TabNavigator


});

const Drawer = createDrawerNavigator({

    Dashboard: {
        screen: DashboardNavigator,
    },
});


const MainNavigator = createStackNavigator({

    SignIn: {
        screen: SignIn
    },


    Detail: {
        screen: DetailScreen
    }
    , Dashboard: {
        screen: Drawer
    },

    Profile: {
        screen: Profile
    }

    ,
    SignUp: {
        screen: SignUp
    },



});


const AppContainer = createAppContainer(MainNavigator);

export default AppContainer;

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
