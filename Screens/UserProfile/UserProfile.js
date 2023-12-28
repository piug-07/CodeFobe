import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import image from '../../assets/elvis-bekmanis-01EbaBH1g3Y-unsplash (2).jpg';


const UserProfile = () => {
    const [data, setData] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                'https://random-data-api.com/api/users/random_user?size=1'
            );
            const userData = await response.data;

            if (userData) {
                setData(userData);
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };


    // console.log(data);


    return (
        <ScrollView>
            <ImageBackground source={image} resizeMode="cover" styel={{
                flex: 1,
                resizeMode: 'cover',
                justifyContent: 'center',
                brightness: 0.1,
            }}>
                <View style={{ flex: 1 }} >
                    {/* ----------------------------header section------------------------ */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                        <Text style={{ alignItems: 'center', fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>
                            <Ionicons
                                onPress={() => navigation.goBack()}
                                style={{ marginLeft: 5, marginRight: 5 }}
                                name="arrow-back"
                                size={26}
                                color="black"
                            />
                            UserProfile
                        </Text>
                        <Pressable title="Refresh" onPress={fetchData} style={{
                            alignItems: 'center', fontSize: 35, fontWeight: 'bold', marginRight: 20, padding: 5,
                            backgroundColor: '#bfd0de', width: 100, borderRadius: 15, marginTop: 17
                        }}>
                            <Text>next User</Text>
                        </Pressable>
                    </View>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#5cb1f7', marginVertical: 10 }} />
                    {data.map((element, index) => {
                        // console.log(element)
                        return (
                            <View style={{ flex: 1 }} key={index}>


                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                    <Text>id : </Text>
                                    <Text style={{ fontWeight: 'bold' }}>{element.id}</Text>
                                </View>



                                {/* -----------Image Section---------- */}
                                <View>
                                    <Image
                                        style={{
                                            width: 135,
                                            height: 135,
                                            borderRadius: 100,
                                            alignItems: 'center',
                                            marginHorizontal: 'auto',
                                            marginTop: 35,
                                            borderWidth: 1,
                                            borderColor: '#5cb1f7'
                                        }}
                                        // source={{
                                        //     uri: 'https://i.postimg.cc/mD0J0xYw/Whats-App-Image-2023-12-23-at-10-36-11-c59d566b.jpg',
                                        // }}
                                        source={{
                                            uri: element.avatar,
                                        }}
                                    />
                                </View>
                                <View>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20, textAlign: 'center' }}>
                                        {element.username}

                                    </Text>
                                </View>

                                {/* ------------------user details----------------- */}

                                <View>

                                    <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 10, marginLeft: 35, marginRight: 40, }}>
                                        <Text style={{ fontSize: 15, fontWeight: 'bold', width: 100 }}>
                                            FullName :
                                        </Text>
                                        <Text style={{ fontSize: 15, fontWeight: '400', }}>
                                            {element.first_name} {element.last_name}
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 10, marginLeft: 35, marginRight: 40, }}>
                                        <Text style={{ fontSize: 15, fontWeight: 'bold', width: 100 }}>
                                            Email :
                                        </Text>
                                        <Text style={{ fontSize: 15, fontWeight: '400', }}>
                                            {element.email}
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 10, marginLeft: 35, marginRight: 40, }}>
                                        <Text style={{ fontSize: 15, fontWeight: 'bold', width: 100 }}>
                                            Gender :
                                        </Text>
                                        <Text style={{ fontSize: 15, fontWeight: '400', }}>
                                            {element.gender}
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 10, marginLeft: 35, marginRight: 40, }}>
                                        <Text style={{ fontSize: 15, fontWeight: 'bold', width: 100 }}>
                                            PhoneNo. :
                                        </Text>
                                        <Text style={{ fontSize: 15, fontWeight: '400', }}>
                                            {element.phone_number}
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 10, marginLeft: 35, marginRight: 40, }}>
                                        <Text style={{ fontSize: 15, fontWeight: 'bold', width: 110 }}>
                                            Date Of Birth :
                                        </Text>
                                        <Text style={{ fontSize: 15, fontWeight: '400', }}>
                                            {element.date_of_birth}
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 10, marginLeft: 35, marginRight: 40, }}>
                                        <Text style={{ fontSize: 15, fontWeight: 'bold', width: 100 }}>
                                            Uid :
                                        </Text>
                                        <Text style={{ fontSize: 15, fontWeight: '400', }}>
                                            {element.uid}
                                        </Text>
                                    </View>
                                </View>
                                {/* -----------------------------------------------employment Details--------------------- */}

                                <View style={{ flex: 1, marginTop: 20, }}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20, textAlign: 'center', marginHorizontal: 'auto' }}>Employment Details</Text>
                                    <View>
                                        <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 10, marginLeft: 35, marginRight: 40, }}>
                                            <Text style={{ fontSize: 15, fontWeight: 'bold', width: 100 }}>
                                                Title :
                                            </Text>
                                            <Text style={{ fontSize: 15, fontWeight: '400', }}>
                                                {element.employment.title}
                                            </Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 10, marginLeft: 35, marginRight: 40, }}>
                                            <Text style={{ fontSize: 15, fontWeight: 'bold', width: 100 }}>
                                                {/* {element.first_name} */}
                                                Key Skill :
                                            </Text>
                                            <Text style={{ fontSize: 15, fontWeight: '400', }}>
                                                {element.employment.key_skill}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                {/* ----------------------------------------User address------------------------------ */}

                                <View style={{ flex: 1, marginTop: 20, }}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20, textAlign: 'center', marginHorizontal: 'auto' }}>Address Details</Text>
                                    <View>
                                        <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 35, marginRight: 40, marginBottom: 10 }}>
                                            <Text style={{ fontSize: 15, fontWeight: 'bold', width: 100 }}>
                                                Address :
                                            </Text>
                                            <Text style={{ fontSize: 15, fontWeight: '400' }}>
                                                {element.address.street_address}, {element.addressstreet_name}, {element.address.city}

                                            </Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 35, marginRight: 40, marginBottom: 5 }}>
                                            <Text style={{ fontSize: 15, fontWeight: 'bold', width: 100 }}>
                                                Country :
                                            </Text>
                                            <Text style={{ fontSize: 15, fontWeight: '400', }}>
                                                {element.address.country}
                                            </Text>
                                        </View>
                                    </View>
                                </View>

                            </View>
                        );
                    })}
                </View>
            </ImageBackground>
        </ScrollView>
    );
};

export default UserProfile;


const styles = StyleSheet.create({})