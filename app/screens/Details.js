import React from 'react';
import { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Icon from '@expo/vector-icons/Entypo'
function Details(props) {
    const [quantity, setquantity] = useState(1)

    const addQuantity = () => {
        setquantity(quantity => quantity + 1)
    }
    const subtractQuantity = () => {
        if (quantity > 0) {
            setquantity(quantity => quantity - 1)
        }
    }
    return (
        <View style={{ backgroundColor: "#FFF" }}>
            <ScrollView>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 40,
                    marginHorizontal: 20
                }}>
                    <View style={{ width: "10%" }}>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('Home')}
                        >
                            <Image
                                source={require('../assets/images/2.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: "80%", alignItems: "center" }}>
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                            alignSelf: "center"
                        }}>
                            <Image
                                source={require('../assets/images/3.png')}
                                style={{ height: 25, width: 20 }}
                            />
                            <Text style={{
                                paddingHorizontal: 10,
                                fontWeight: "bold",
                                fontSize: 16
                            }}>290 Calories</Text>
                        </View>
                    </View>
                    <View style={{ width: "10%" }}>
                        <Icon
                            name="heart"
                            color="#f9dd7a"
                            size={30}
                        />
                    </View>
                </View>
                <Image
                    source={require('../assets/images/5.png')}
                    style={{
                        height: 300,
                        width: 300,
                        alignSelf: "center"
                    }}
                />
                <View
                    style={{
                        flexDirection: "row",
                        alignSelf: "center",
                        alignItems: "center",
                        backgroundColor: "#f6f3fb",
                        paddingHorizontal: 20,
                        paddingVertical: 8,
                        borderRadius: 20
                    }}
                >
                    <TouchableOpacity
                        onPress={addQuantity}
                    >
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 18
                        }}>+</Text>
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        paddingHorizontal: 20
                    }}>
                        {quantity}
                    </Text>

                    <TouchableOpacity
                        onPress={subtractQuantity}
                    >
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 18
                        }}>-</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 20,
                    marginTop: 30
                }}>
                    <View>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 25
                        }}>Smokehouse </Text>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 15,
                            color: "#a4a4a9"
                        }}>
                            Beef burger
                        </Text>
                    </View>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 28,
                        marginLeft: 80
                    }}>$12.99</Text>
                </View>
                <Text style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    marginTop: 30,
                    marginHorizontal: 20
                }}>
                    Ingredients
                </Text>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 20, marginHorizontal: 20 }}
                >
                    <View style={{
                        borderRadius: 15,
                        borderWidth: 0.1,
                        paddingHorizontal: 12,
                        paddingVertical: 8,
                        marginRight: 10
                    }}>
                        <Image
                            source={require('../assets/images/11.png')}
                            style={{ height: 30, width: 30 }}
                        />
                    </View>

                    <View style={{
                        borderRadius: 15,
                        borderWidth: 0.1,
                        paddingHorizontal: 12,
                        paddingVertical: 8,
                        marginRight: 10
                    }}>
                        <Image
                            source={require('../assets/images/13.png')}
                            style={{ height: 30, width: 30 }}
                        />
                    </View>

                    <View style={{
                        borderRadius: 15,
                        borderWidth: 0.1,
                        paddingHorizontal: 12,
                        paddingVertical: 8,
                        marginRight: 10
                    }}>
                        <Image
                            source={require('../assets/images/12.png')}
                            style={{ height: 30, width: 30 }}
                        />
                    </View>

                    <View style={{
                        borderRadius: 15,
                        borderWidth: 0.1,
                        paddingHorizontal: 12,
                        paddingVertical: 8,
                        marginRight: 10
                    }}>
                        <Image
                            source={require('../assets/images/8.png')}
                            style={{ height: 30, width: 30 }}
                        />
                    </View>

                    <View style={{
                        borderRadius: 15,
                        borderWidth: 0.1,
                        paddingHorizontal: 12,
                        paddingVertical: 8,
                        marginRight: 10
                    }}>
                        <Image
                            source={require('../assets/images/bl.png')}
                            style={{ height: 30, width: 30 }}
                        />
                    </View>

                    <View style={{
                        borderRadius: 15,
                        borderWidth: 0.1,
                        paddingHorizontal: 12,
                        paddingVertical: 8,
                        marginRight: 10
                    }}>
                        <Image
                            source={require('../assets/images/7.png')}
                            style={{ height: 30, width: 30 }}
                        />
                    </View>
                </ScrollView>
                <Text style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    marginTop: 30,
                    marginHorizontal: 20
                }}>
                    Details
                </Text>
                <Text style={{
                    color: "#a4a4a9",
                    fontWeight: "bold",
                    fontSize: 15,
                    marginTop: 10,
                    marginHorizontal: 20,
                    textAlign: "justify"
                }}>
                    The most unique fire grilled patty,
                    flame grilled, charred, seared, well-done
                    All natural beef, grass-feed beef,
                    Fiery, juicy, greacy. delicous moist
                    The most unique fire grilled patty,
                    flame grilled, charred, seared, well-done
                    All natural beef, grass-feed beef,
                    Fiery, juicy, greacy. delicous moist
                </Text>
            </ScrollView>
            <View style={{
                position: "absolute",
                backgroundColor: "#000",
                height: 50,
                width: 50,
                bottom: 20,
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "center",
                borderRadius: 25
            }}>
                <Icon
                    name="shopping-cart"
                    size={24}
                    color="#FFF"
                />
            </View>
        </View>
    )
}


export default Details;