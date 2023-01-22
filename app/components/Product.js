import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

function Product(props) {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={{
                backgroundColor: "#f5f5fa",
                height: 280,
                width: 160,
                borderRadius: 20,
                marginTop: props.marginTop,
                marginRight: 10
            }}
        >
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                alignSelf: "center",
                marginTop: 20
            }}>
                <Image
                    source={require('../assets/images/3.png')}
                    style={{ height: 25, width: 20 }}
                />
                <Text style={{
                    paddingHorizontal: 10,
                    fontWeight: "bold",
                    fontSize: 16
                }}>
                    290 Calories
                </Text>
            </View>
            <Image
                source={props.image}
                style={{
                    height: 105,
                    alignSelf: "center",
                    width: 130,
                    marginTop: 15,
                    marginBottom: 15
                }}
            />
            <Text style={{
                fontSize: 18,
                fontWeight: "bold",
                paddingHorizontal: 10
            }}>
                {props.title}
            </Text>
            <Text style={{
                fontSize: 15,
                fontWeight: "bold",
                paddingHorizontal: 10,
                color: "#848385"
            }}>
                Beef burger
            </Text>
        </TouchableOpacity>
    );
}

export default Product;