import React from 'react';
import { Image, ScrollView, Text, View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SizedBox } from 'sizedbox';
import { ImageSlider } from "react-native-image-slider-banner";

import colors from '../config/colors';


function NearestBoardItemCard({ imageUrl, boardName, boardLocation }) {
    return (<View style={{
        width: 130,
        height: 182,
        backgroundColor: colors.white,
        borderRadius: 15,
        shadowColor: 'purple',
        //android specific
        elevation: 10,
        //ios specific
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowRadius: 3,
        shadowOpacity: 0.5,
        marginLeft: 20,
        marginTop: 20,
        bottom: 20
    }}>
        <Image source={{
            uri: imageUrl
        }} style={{
            width: 130,
            height: 120,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15
        }} />
        <Text style={{
            fontWeight: 'bold',
            fontSize: 14,
            margin: 5
        }}>{boardName}</Text>
        <Text style={{
            fontWeight: 'bold',
            fontSize: 14,
            color: colors.secondary,
            marginLeft: 5
        }}>{boardLocation}</Text>
    </View>);
}



function CustomBookButton({ myFunc, isAvailable }) {
    return (<TouchableOpacity onPress={myFunc}>
        <View style={{
            width: 80,
            height: 30,
            backgroundColor: isAvailable ? colors.primary : colors.lightGreen,
            borderColor: isAvailable ? colors.primary : colors.lightGreen,
            borderRadius: 10,
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text style={{
                fontWeight: 'bold',
                fontSize: 14,
                color: isAvailable ? colors.white : colors.lightGray,
                marginLeft: 5
            }}>Book Now</Text>
        </View>
    </TouchableOpacity>);
}



function CustomViewDetailsButton({ myFunc }) {
    return (<TouchableOpacity onPress={myFunc}>
        <View style={{
            width: 80,
            height: 30,
            borderColor: colors.primary,
            borderRadius: 10,
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text style={{
                fontWeight: 'bold',
                fontSize: 14,
                color: colors.primary,
                marginLeft: 5
            }}>Details</Text>
        </View>
    </TouchableOpacity>);
}



function AvailableButton({ isAvailable }) {
    return (<View style={{
        width: 60,
        height: 20,
        backgroundColor: isAvailable ? colors.primary : colors.red,
        borderColor: isAvailable ? colors.primary : colors.red,
        borderRadius: 10,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <Text style={{
            fontWeight: 'bold',
            fontSize: 8,
            color: colors.white,
            marginLeft: 5
        }}>{isAvailable ? 'Available' : 'Not'}</Text>
    </View>);
}



function HorizontalBoardItemCard({ windowWidth, imageUrl, boardName, boardLocation, isAvailable }) {
    return (<View style={{
        width: windowWidth - 40,
        height: 120,
        backgroundColor: colors.white,
        borderRadius: 15,
        shadowColor: 'purple',
        //android specific
        elevation: 10,
        //ios specific
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowRadius: 3,
        shadowOpacity: 0.5,
        marginHorizontal: 20,
        bottom: 20,
        flexDirection: 'row',
        marginVertical: 20
    }}>
        <Image source={{
            uri: imageUrl
        }} style={{
            width: 130,
            height: 120,
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15
        }} />
        <View style={{
            justifyContent: 'space-between',
            marginLeft: 10
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    margin: 5
                }}>{boardName}</Text>
                <SizedBox horizontal={5} />
                <AvailableButton isAvailable={isAvailable} />
            </View>
            <Text style={{
                fontWeight: 'bold',
                fontSize: 14,
                marginLeft: 5
            }}>{boardLocation}</Text>
            <Text style={{
                fontWeight: 'bold',
                fontSize: 14,
                color: colors.primary,
                marginLeft: 5
            }}>Rs 5000/room</Text>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <CustomViewDetailsButton myFunc={() => console.log('View details')}></CustomViewDetailsButton>
                <SizedBox horizontal={5} />
                <CustomBookButton myFunc={() => console.log('Book Now')} isAvailable={isAvailable} />
            </View>
            <SizedBox vertical={3} />
        </View>
    </View>);
}


function StudentMainHome(props) {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return (
        <ScrollView style={{
            top: 20,
            backgroundColor: colors.white,
            flex: 1,

        }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                <View>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 20
                    }}>Hello Prasanjith</Text>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 18,
                        color: colors.secondary

                    }}>Find your boarding</Text>
                </View>
                <View style={{ width: 44, height: 44, borderRadius: 21, backgroundColor: colors.primary, justifyContent: 'center', }}>
                    <Image source={{ uri: 'https://cdn.pixabay.com/photo/2015/07/09/00/29/woman-837156_960_720.jpg' }}
                        style={{ width: 40, height: 40, borderRadius: 20, alignSelf: 'center' }} />
                </View>

            </View>
            <View style={{ height: 60 }}>

                <View style={{
                    backgroundColor: colors.lightGray,
                    width: windowWidth * 0.9,
                    height: 42,
                    borderRadius: 15,
                    marginHorizontal: 20,
                    shadowColor: 'purple',
                    //android specific
                    elevation: 10,
                    //ios specific
                    shadowOffset: { width: 1, height: 1 },
                    shadowRadius: 3,
                    shadowOpacity: 0.5,
                }}>
                    <View style={{ flexDirection: 'row', height: 50 }}>
                        <MaterialCommunityIcons name="access-point" size={24} color={colors.secondary} style={{
                            top: 8,
                            left: 10,
                        }} />
                        <SizedBox horizontal={20} />
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 16,
                            color: colors.secondary,
                            top: 10,

                        }}>Search your boarding</Text>
                    </View>
                </View>
            </View>
            <View style={{ bottom: 30 }}>
                <ImageSlider
                    data={[
                        { img: 'https://missioninnresortweddings.com/wp-content/uploads/2019/05/Amalie-Orrange.jpg' },
                        { img: 'https://www.omnihotels.com/-/media/images/hotels/okcdtn/hotel/okcdtn-omni-oklahoma-city-deluxe-king-room-paycom.jpg?h=660&la=en&w=1170' },
                        { img: 'https://www.theghotel.ie/wp-content/uploads/2020/09/Deluxe-Room-1366x768-fp_mb-fpoff_0_0.jpg' }
                    ]}
                    autoPlay={true}
                    // onItemChanged={(item) => console.log("item", item)}
                    closeIconColor="#fff"
                    showIndicator={false}
                />
            </View>
            <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                bottom: 60,
                left: 20,
            }}>Nearest bording</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{
                    bottom: 40,
                    marginRight: 20,
                }}
            >
                <NearestBoardItemCard
                    imageUrl='https://viatravelers.com/wp-content/uploads/2021/01/single-hotel-room.jpg.webp'
                    boardLocation='Moratuwa'
                    boardName='Samagi Boarding'
                />
                <NearestBoardItemCard
                    imageUrl='https://d1iwe50und7qx1.cloudfront.net/broadmoor.com-2121435814/cms/cache/v2/624b237bbebd9.jpg/1920x1080/fit;c:0,130,2001,1255;fp:39,54/80/8cc88f097f0267b9b85c70cd8f388240.jpg'
                    boardLocation='Moratuwa'
                    boardName='Samagi Boarding'
                />
                <NearestBoardItemCard
                    imageUrl='https://viatravelers.com/wp-content/uploads/2021/01/single-hotel-room.jpg.webp'
                    boardLocation='Moratuwa'
                    boardName='Samagi Boarding'
                />
            </ScrollView>

            <Text style={{
                fontWeight: 'bold',
                fontSize: 20,
                bottom: 40,
                left: 20,
            }}>Popular bording</Text>
            <HorizontalBoardItemCard windowWidth={windowWidth} imageUrl='https://viatravelers.com/wp-content/uploads/2021/01/single-hotel-room.jpg.webp' boardName='Sithru Board' boardLocation='Moratuwa' isAvailable={true} />
            <HorizontalBoardItemCard windowWidth={windowWidth} imageUrl='https://d16wrc1l4zio1q.cloudfront.net/provenancehotels3.com-780368889/cms/cache/v2/5f7b2501913a9.jpg/1920x1080/fit;c:0,377,3600,2402/80/b72cce262b1269d4b369dfc0b8d25c66.jpg' boardName='Sithru Board' boardLocation='Moratuwa' isAvailable={false} />
            <HorizontalBoardItemCard windowWidth={windowWidth} imageUrl='https://d3h124bs7uxtdi.cloudfront.net/2021/08/1354x866-room-banner-provressive-1.jpg' boardName='Sithru Board' boardLocation='Moratuwa' isAvailable={true} />
        </ScrollView>
    );
}
const styles = StyleSheet.create({

});
export default StudentMainHome;