import React,{Component} from 'react';
import {WebView} from 'react-native';

export default class MyWebView extends Component<Props> {


    render() {



        return (

            <WebView
                source={{uri: 'http://google.com'}}
                style={{marginTop: 20}}
            />

        );
    }
}

