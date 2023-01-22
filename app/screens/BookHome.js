import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import colors from '../config/colors';

function BookHome(props) {
    return (
        <ScrollView
            style={{
                flex: 1
            }}>
            <View style={{
                backgroundColor: colors.primary,
                width: 400,
                height: 250,
                left: -20,
                borderBottomLeftRadius: 300,
                borderBottomRightRadius: 300
            }}>
                <View style={{ marginHorizontal: 40, marginTop: 60, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        color: colors.white,

                    }}>Out Top Picks</Text>
                    <Image style={{
                        tintColor: colors.white
                    }} source={require('../assets/images/1.png')} />
                </View>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ bottom: 100 }}
            >
                <LinearGradient colors={["rgba(0,164,109,0.2)", "transparent"]} style={{ width: 120, marginHorizontal: 15, borderRadius: 15 }}>
                    <View style={{ alignItems: 'center', }}>
                        <Image style={{ width: 120, borderRadius: 15 }} source={require('../assets/Dissapearance.png')} />
                        <Text style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            paddingTop: 10,
                        }}>Fatherhood</Text>
                        <Text>Marcus Berkmann</Text>
                    </View>
                </LinearGradient>
                <LinearGradient colors={["rgba(0,164,109,0.2)", "transparent"]} style={{ width: 120, marginHorizontal: 15, borderRadius: 15 }}>
                    <View style={{ alignItems: 'center' }}>
                        <Image style={{ width: 120, borderRadius: 15 }} source={require('../assets/Dissapearance.png')} />
                        <Text style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            paddingTop: 10,
                        }}>Fatherhood</Text>
                        <Text>Marcus Berkmann</Text>
                    </View>
                </LinearGradient>
                <LinearGradient colors={["rgba(0,164,109,0.2)", "transparent"]} style={{ width: 120, marginHorizontal: 15, borderRadius: 15 }}>
                    <View style={{ alignItems: 'center' }}>
                        <Image style={{ width: 120, borderRadius: 15 }} source={require('../assets/Dissapearance.png')} />
                        <Text style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            paddingTop: 10,
                        }}>Fatherhood</Text>
                        <Text>Marcus Berkmann</Text>
                    </View>
                </LinearGradient>
            </ScrollView>

            <Text style={{
                fontSize: 24,
                fontWeight: 'bold',
                bottom: 80,
                marginHorizontal: 15,
            }}>Bestsellers</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ bottom: 60, marginHorizontal: 15 }}
            >
                <View style={{ alignItems: 'center', }}>
                    <Image style={{ borderRadius: 15 }} source={require('../assets/Tattletale.png')} />
                    <Text style={{
                        fontSize: 14,
                        fontWeight: 'bold',
                    }}>Fatherhood</Text>
                    <Text>Marcus Berkmann</Text>
                    <Image style={{ marginTop: 10 }} source={require('../assets/Group8.png')} />
                </View>
                <View style={{ alignItems: 'center', }}>
                    <Image style={{ borderRadius: 15 }} source={require('../assets/load.png')} />
                    <Text style={{
                        fontSize: 14,
                        fontWeight: 'bold',
                    }}>Fatherhood</Text>
                    <Text>Marcus Berkmann</Text>
                    <Image style={{ marginTop: 10 }} source={require('../assets/Group8.png')} />
                </View>
                <View style={{ alignItems: 'center', }}>
                    <Image style={{ borderRadius: 15 }} source={require('../assets/The_Zoo.png')} />
                    <Text style={{
                        fontSize: 14,
                        fontWeight: 'bold',
                    }}>Fatherhood</Text>
                    <Text>Marcus Berkmann</Text>
                    <Image style={{ marginTop: 10 }} source={require('../assets/Group8.png')} />
                </View>
            </ScrollView>
            <Text style={{
                fontSize: 24,
                fontWeight: 'bold',
                bottom: 80,
                marginHorizontal: 15,
            }}>Bestsellers</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ bottom: 60, marginHorizontal: 15 }}
            >
                <Image style={{ marginTop: 10 }} source={require('../assets/Group_95.png')} />
                <Image style={{ marginTop: 10 }} source={require('../assets/Group_95.png')} />
            </ScrollView>
        </ScrollView >
    );
}

export default BookHome;