import React from 'react';
import { useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Product from '../components/Product';

function MainHome(props) {
    const [city, setcity] = useState('colombo');
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                marginTop: 40,
                marginHorizontal: 20,
                flex: 1
            }}
        >
            <View style={{ flexDirection: 'row' }}>
                <View style={{ width: '10%' }}>
                    <Image source={require('../assets/images/1.png')} />
                </View>
                <View style={{ width: '80%', alignItems: 'center', bottom: 50 }}>
                    <Picker
                        style={{ width: 50, height: 160, }}
                        selectedValue={city}
                        onValueChange={(itemValue, itemIndex) =>
                            setcity(itemValue)
                        }>
                        <Picker.Item label="Java" value="java" style={{ fontWeight: 'bold' }} />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </View>
                <View style={{ width: '10%' }}>
                    <Image style={{ width: 20, height: 20, top: 20 }} source={require('../assets/icons8-search-40.png')} />
                </View>
            </View>

            <View style={{ paddingHorizontal: 0, bottom: 100 }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Food that</Text>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>meets your needs</Text>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ marginTop: -50 }}
            >
                <View style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    backgroundColor: '#f9dd7a',
                    marginRight: 15,
                    borderRadius: 25,
                    paddingVertical: 5,
                    paddingHorizontal: 15
                }}>
                    <Image source={require('../assets/images/5.png')} style={{ height: 40, width: 40 }} />
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 18,
                            paddingLeft: 10
                        }}
                    >Burgers</Text>
                </View>
                <View style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    backgroundColor: '#e5e4eb',
                    marginHorizontal: 15,
                    borderRadius: 25,
                    paddingVertical: 5,
                    paddingHorizontal: 15
                }}>
                    <Image source={require('../assets/images/6.png')} style={{ height: 40, width: 40 }} />
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 18,
                            paddingLeft: 10
                        }}
                    >Pizza</Text>
                </View>

                <View style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    backgroundColor: '#e5e4eb',
                    marginHorizontal: 15,
                    borderRadius: 25,
                    paddingVertical: 5,
                    paddingHorizontal: 15
                }}>
                    <Image source={require('../assets/images/7.png')} style={{ height: 40, width: 40 }} />
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 18,
                            paddingLeft: 10
                        }}
                    >Salads</Text>
                </View>

                <View style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    backgroundColor: '#e5e4eb',
                    marginHorizontal: 15,
                    borderRadius: 25,
                    paddingVertical: 5,
                    paddingHorizontal: 15
                }}>
                    <Image source={require('../assets/images/10.png')} style={{ height: 40, width: 40 }} />
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 18,
                            paddingLeft: 10
                        }}
                    >Burrito</Text>
                </View>
            </ScrollView>
            <View
                style={{ flexDirection: 'row', marginTop: 40 }}>
                <View style={{ width: '50%' }}>
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: 'bold'
                        }}
                    >New Products</Text>
                </View>
                <View style={{ width: '50%', alignItems: 'flex-end' }}>
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: 'bold'
                        }}
                    >. . .</Text>
                </View>
            </View>
            <View style={{
                flexDirection: "row",
                marginHorizontal: 0,
                marginTop: 30,
            }}>
                <Product
                    image={require("../assets/images/4.png")}
                    title="Smokehouse"
                    price="12.99"
                    onPress={() => props.navigation.navigate('Details')}
                />
                <Product
                    image={require("../assets/images/9.png")}
                    title="Honey Chilli"
                    price="10.99"
                    marginTop={25}
                />
            </View>
            <View style={{
                flexDirection: "row",
                marginHorizontal: 0,
                marginTop: 30,
            }}>
                <Product
                    image={require("../assets/images/6.png")}
                    title="Adios Pizza"
                    price="11.99"
                />
                <Product
                    image={require("../assets/images/10.png")}
                    title="Burrito"
                    price="10.99"
                    marginTop={25}
                />
            </View>
        </ScrollView>
    );
}

export default MainHome;