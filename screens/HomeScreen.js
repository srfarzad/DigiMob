import React,{Component} from 'react';
import {Platform, StyleSheet, View, TextInput, Image, TouchableOpacity , FlatList} from 'react-native';

import { Container, Header, Content, List, ListItem, Icon, Left, Body, Right, Switch , Button , Text , Card,CardItem } from 'native-base';
import ImageSlider from 'react-native-image-slider';
import ProductScreen from "./ProductScreen";

export default class HomeScreen extends Component<Props> {


    constructor(props) {
        super(props);

        this.state= {
            newApps : [],
        };

        this.getBestApps();

    }

    getBestApps() {

        fetch('http://androidsupport.ir/market/getBestApplications.php')
            .then((respose)=>respose.json())
            .then((responseJson)=> {
                console.log(responseJson);
                this.setState({newApps : responseJson});
            })
            .catch((e)=>{
                console.log(e.toString())
            });


    }



    render() {
const arr = this.state.newApps.map(function(item){
    return("http://androidsupport.ir/market/images/"+item.icon);
})


        return (

            <Container>

                <Content>


                    <ImageSlider style={{height : 180}} images={arr}/>


        <FlatList

            horizontal = {true}
            data={this.state.newApps}
            keyExtractor={(item , index)=>index.toString()}
            renderItem={ ({item})=>



                <Card>
                    <CardItem>
                        <Body>

                        <TouchableOpacity onPress={()=> {

                            this.props.navigation.navigate('ProductScreen',{params : item})

                        }} >

                        <Image source={{uri : "http://androidsupport.ir/market/images/"+item.icon}} style={{width: 96 , height : 96}} />
                        <Text style={{fontFamily:"Iranian Sans"}}> {item.title} </Text>

                        </TouchableOpacity>
                        </Body>
                    </CardItem>
                </Card>


            }

        />


                </Content>
            </Container>



        );
    }
}

