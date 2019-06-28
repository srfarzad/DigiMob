/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {   StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
    Image} from 'react-native';

import {createStackNavigator, createAppContainer, createBottomTabNavigator , createDrawerNavigator} from 'react-navigation';
import Dashboard from './screens/Dashboard';
import Profile from './screens/Profile';
import HomeScreen from "./screens/HomeScreen";
import SignUp from "./screens/SignUp";
import Setting from "./screens/Setting";
import Search from "./screens/Search";
import MyWebView from "./screens/MyWebView";
//import { AdMobBanner } from 'react-native-admob';



type Props = {};

class SignIn extends Component<Props> {


        onPresshandler(screenName , params){

            this.props.navigation.navigate(screenName,params)
        }


    render() {
        return (


            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://png.icons8.com/password/androidL/40/3498db'}}/>
                    <TextInput style={styles.inputs}
                               placeholder="Email"
                               keyboardType="email-address"
                               underlineColorAndroid='transparent'/>
                </View>

                <View style={styles.inputContainer}>
                    <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://png.icons8.com/envelope/androidL/40/3498db'}}/>
                    <TextInput style={styles.inputs}
                               placeholder="Password"
                               secureTextEntry={true}
                               underlineColorAndroid='transparent'/>
                </View>

                <TouchableOpacity style={styles.restoreButtonContainer}>
                    <Text>Forgot?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={()=>{

                   // this.props.navigation.navigate('Dashboard')
                    this.onPresshandler('Dashboard','')

                }}  >
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer}  onPress={()=>{

                    this.props.navigation.navigate('SignUp')

                }} >
                    <Text>Register</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonContainer, styles.fabookButton]}>
                    <View style={styles.socialButtonContent}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/facebook/androidL/40/FFFFFF'}}/>
                        <Text style={styles.loginText}>Continue with facebook</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonContainer, styles.googleButton]}>
                    <View style={styles.socialButtonContent}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/google/androidL/40/FFFFFF'}}/>
                        <Text style={styles.loginText}>Sign in with google</Text>
                    </View>
                </TouchableOpacity>

{/*
                <AdMobBanner
                    adSize="fullBanner"
                    adUnitID="ca-app-pub-3940256099942544/6300978111"
                    didFailToReceiveAdWithError={this.bannerError}
                    onAdFailedToLoad={error => console.error(error)} />*/}

            </View>



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
    MyWebView: {
        screen: MyWebView
    },



});


const AppContainer = createAppContainer(MainNavigator);

export default AppContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B0E0E6',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:15,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    icon:{
        width:30,
        height:30,
    },
    inputIcon:{
        marginLeft:15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
    },
    loginButton: {
        backgroundColor: '#3498db',
    },
    fabookButton: {
        backgroundColor: "#3b5998",
    },
    googleButton: {
        backgroundColor: "#ff0000",
    },
    loginText: {
        color: 'white',
    },
    restoreButtonContainer:{
        width:250,
        marginBottom:15,
        alignItems: 'flex-end'
    },
    socialButtonContent:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    socialIcon:{
        color: "#FFFFFF",
        marginRight:5
    }
});