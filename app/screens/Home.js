import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Button, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useDispatch } from 'react-redux';
import BackButton from '../components/BackButton';
import colors from '../config/colors';
import { userLogout } from '../redux/user-actions';

function Home(props) {
    const dispatch = useDispatch();
    return (
        <View style={styles.mainContainer} >
            <View style={styles.headContainer}>
                <Image style={styles.headContainerImage} source={require('../assets/images/1.png')} />
                <View style={styles.headRow}>
                    <View style={styles.headRowItem}>
                        <Text style={styles.headRowItemText}>Hi Uishopy</Text>
                    </View>
                    <View style={styles.headRowItem2}>
                        <Image source={require('../assets/islam.png')} style={styles.headRowItemImage} />
                    </View>
                </View>
            </View>
            <LinearGradient colors={["rgba(0,164,109,0.4)", "transparent"]} style={styles.linearGradient}>
                <View style={styles.searchBox}>
                    <TextInput placeholder='Search'
                        placeholderTextColor='#b1e5d3'
                        style={styles.searchText}

                    />
                    <Image style={styles.searchIcon} source={require('../assets/icons8-search-40.png')} />
                </View>
            </LinearGradient>
            <View style={{
                flexDirection: 'row',
                paddingHorizontal: 20,
                width: '100%',
                alignItems: 'center'
            }}>
                <View style={{
                    width: '50%'
                }}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 17,
                        color: '#585a61'
                    }}>
                        Recommended
                    </Text>
                    <View style={{
                        height: 4,
                        backgroundColor: '#b1e5d3',
                        width: 115,
                        marginTop: 3,
                    }}></View>

                </View>
                <View style={{ width: '50%', alignItems: 'flex-end' }}>
                    <View style={{
                        backgroundColor: '#00a46c',
                        paddingHorizontal: 20,
                        paddingVertical: 5,
                        borderRadius: 15,
                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 13,
                            color: colors.white,
                        }}>More</Text>

                    </View>
                </View>

            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ height: 400, }}
            >
                <TouchableOpacity
                    style={{
                        height: 250,
                        elevation: 2,
                        backgroundColor: '#fff',
                        marginTop: 20,
                        marginLeft: 20,
                        borderRadius: 15,
                        marginBottom: 10,
                        width: 160,
                    }}
                >
                    <Image source={require('../assets/4.png')}
                    />
                    <View style={{
                        flexDirection: "row",
                        paddingTop: 10,
                        paddingHorizontal: 10
                    }}>
                        <Text style={{
                            fontWeight: "bold"
                        }}>SAMANTHA</Text>
                        <Text style={{
                            fontWeight: "bold",
                            color: "#00a46c",
                            paddingLeft: 35
                        }}>$400</Text>
                    </View>
                    <Text style={{
                        paddingHorizontal: 10,
                        fontWeight: "bold",
                        color: "#b1e5d3",
                        paddingTop: 3
                    }}>
                        RUSSIA
                    </Text>

                </TouchableOpacity>
                <View
                    // onPress={()=>navigation.navigate("Detail")}
                    style={{
                        height: 250,
                        elevation: 2,
                        backgroundColor: "#FFF",
                        marginLeft: 20,
                        marginTop: 20,
                        borderRadius: 15,
                        marginBottom: 10,
                        width: 160
                    }}
                >
                    <Image
                        source={require('../assets/4.png')}
                    />
                    <View style={{
                        flexDirection: "row",
                        paddingTop: 10,
                        paddingHorizontal: 10
                    }}>
                        <Text style={{
                            fontWeight: "bold"
                        }}>ANGELICA</Text>
                        <Text style={{
                            fontWeight: "bold",
                            color: "#00a46c",
                            paddingLeft: 45
                        }}>$400</Text>
                    </View>
                    <Text style={{
                        paddingHorizontal: 10,
                        fontWeight: "bold",
                        color: "#b1e5d3",
                        paddingTop: 3
                    }}>
                        RUSSIA
                    </Text>
                </View>

                <View
                    // onPress={()=>navigation.navigate("Detail")}
                    style={{
                        height: 250,
                        elevation: 2,
                        backgroundColor: "#FFF",
                        marginLeft: 20,
                        marginTop: 20,
                        borderRadius: 15,
                        marginBottom: 10,
                        width: 160
                    }}
                >
                    <Image
                        source={require('../assets/4.png')}
                    />
                    <View style={{
                        flexDirection: "row",
                        paddingTop: 10,
                        paddingHorizontal: 10
                    }}>
                        <Text style={{
                            fontWeight: "bold"
                        }}>SAMANTHA</Text>
                        <Text style={{
                            fontWeight: "bold",
                            color: "#00a46c",
                            paddingLeft: 35
                        }}>$400</Text>
                    </View>
                    <Text style={{
                        paddingHorizontal: 10,
                        fontWeight: "bold",
                        color: "#b1e5d3",
                        paddingTop: 3
                    }}>
                        RUSSIA
                    </Text>
                </View>

            </ScrollView>

            <View style={{
                flexDirection: 'row',
                paddingHorizontal: 20,
                width: '100%',
                alignItems: 'center'
            }}>
                <View style={{
                    width: '50%'
                }}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 17,
                        color: '#585a61'
                    }}>
                        Featured Plants
                    </Text>
                    <View style={{
                        height: 4,
                        backgroundColor: '#b1e5d3',
                        width: 115,
                        marginTop: 3,
                    }}></View>

                </View>
                <View style={{ width: '50%', alignItems: 'flex-end' }}>
                    <View style={{
                        backgroundColor: '#00a46c',
                        paddingHorizontal: 20,
                        paddingVertical: 5,
                        borderRadius: 15,
                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 13,
                            color: colors.white,
                        }}>More</Text>

                    </View>
                </View>

            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ marginBottom: -100 }}
            >
                <Image source={require('../assets/18.png')}
                    style={{ marginTop: 20, marginHorizontal: 20 }} />

                <Image source={require('../assets/19.png')}
                    style={{
                        marginTop: 20, marginHorizontal: 20,
                        borderRadius: 15,
                    }} />
            </ScrollView>

        </View>
    );
}
const styles = StyleSheet.create({
    headContainer: {
        backgroundColor: '#00a46c',
        height: '28%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingHorizontal: 20,
    },
    headContainerImage: {
        height: 10,
        width: 20,
        marginTop: 50,
    },
    headRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 25,
        width: '100%'
    },
    headRowItem: {
        width: '50%'
    },
    headRowItem2: {
        width: '50%',
        alignItems: 'flex-end'
    },
    headRowItemImage: {
        height: 60,
        width: 60,
    },
    headRowItemText: {
        fontSize: 28,
        color: colors.white,
        fontWeight: 'bold'
    },
    linearGradient: {
        left: 0,
        right: 0,
        height: 90,

        marginTop: -45,
    },
    searchBox: {
        backgroundColor: colors.white,
        paddingVertical: 8,
        marginHorizontal: 15,
        paddingHorizontal: 20,
        borderRadius: 15,
        marginTop: 25,
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchText: {
        fontWeight: 'bold',
        fontSize: 18,
        width: 260,
    },
    searchIcon: {
        width: 20,
        height: 20,
    },
    mainContainer: {
        flex: 1,
        backgroundColor: colors.white,

    }
});
export default Home;




                // <Button title='Log out' onPress={() => {
                //     dispatch(userLogout(props));
                // }} />