import React,{Component} from 'react';
import {Platform, StyleSheet, View, TextInput, Image, TouchableOpacity , FlatList} from 'react-native';

import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch , Button ,Card,CardItem,Tabs,Tab} from 'native-base';

import StarRating from 'react-native-star-rating';

import Comments from "../screens/tabs/Comments";


export default class ProductScreen extends Component<Props> {


    render() {

        const { navigation } = this.props;
        const items = navigation.getParam('params', '');

        return (

            <Container>

                <Content>


                    <Card>
                        <CardItem>

                            <View style={{flex : 1 , flexDirection:'row' ,justifyContent: 'flex-end'
                                }}>


                                <View style={{flex : 1 , flexDirection : 'column', justifyContent: 'center',
                                    alignItems: 'stretch',}}>

                                    <Text>
                                        {items.title}
                                    </Text>

                                    <StarRating
                                        disabled={false}
                                        maxStars={5}
                                        rating={items.rate}
                                        emptyStar={'ios-star-outline'}
                                        fullStar={'ios-star'}
                                        halfStar={'ios-star-half'}
                                        iconSet={'Ionicons'}

                                        fullStarColor={'red'}
                                    />





                                </View>



                                <Image source={{uri : "http://androidsupport.ir/market/images/"+items.icon}} style={{width: 96 , height : 96}} />



                            </View>





                        </CardItem>
                    </Card>


                    <Tabs>
                        <Tab heading="مرتبط">
                           <View>




                           </View>
                        </Tab>
                        <Tab heading="نظرات">

                            <Comments/>

                        </Tab>
                        <Tab heading="توضیحات">
                            <View>

                                <Text>

                                    {items.fullDescription}

                                </Text>



                            </View>
                        </Tab>
                    </Tabs>





                </Content>
            </Container>



        );
    }
}

