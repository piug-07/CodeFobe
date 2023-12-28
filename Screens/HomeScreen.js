import { SafeAreaView, StyleSheet, Pressable, Text, View, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


const HomeScreen = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();

// Fetching data through api using axios

  useEffect(() => {
    axios.get('https://random-data-api.com/api/users/random_user?size=80').then((response) => {
      if(response){
        setData(response.data);
      }else{
        alert("Something went wrong")
      }
      // console.log(response.data)
    });
  }, []);

  return (
    <ScrollView>
      <View style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
      }}>
        <View style={{
          width: 370,
          backgroundColor: '#4daeff',
        }}>
          <Text style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: '#fff',
            marginTop: 10,
            marginBottom: 10,
            alignItems: 'center',
            marginLeft: 110
          }}>Intern Assignment</Text>
        </View>

        <Pressable style={{
          backgroundColor: '#4daeff',
          width: 230,
          height: 30,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 20,
          marginTop: 20,
          // marginBottom: 10,
          fontSize: 20,
          fontWeight: 'bold',
          color: '#fff',
        }} onPress={() => navigation.navigate("UserProfile")}>
          <Text>
            Random User Profile
          </Text>
        </Pressable>

        <View style={{ marginTop: 20, }} >
          <View style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000',
            marginTop: 10,
            marginBottom: 5,
            alignItems: 'center',
          }}>
            <Feather name="users" size={24} color="black" />
            <Text style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#000',
              marginTop: 10,
              marginBottom: 5,
              alignItems: 'center',
            }}>All User's</Text>
          </View>


          <View style={{ marginBottom: 10 }}>
            <Pressable style={{
              flexDirection: 'row',
              width: 370,
              height: 'auto',
              padding: 5,
              backgroundColor: '#bfd0de',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              borderRadius: 10,
              marginTop: 10,
            }}>

              <View >
                <Text>
                  S.no
                </Text>
              </View>
              <View>
                <Text>
                  id
                </Text>
              </View>

              <View>
                <Text>
                  Avatar
                </Text>
              </View>

              <View>
                <Text>
                  first_name
                </Text>
              </View>

              <View>
                <Text>
                  Key_Skill
                </Text>
              </View>

            </Pressable>
          </View>

          {/* mapping all random user in landing screen and showing some info */}

          {data?.map((element, index) => {
            // console.log("data", element)
            return (
              <View style={{ marginBottom: 10 }} key={index}>
                <View style={{
                  flexDirection: 'row',
                  width: 370,
                  height: 'auto',
                  padding: 5,
                  backgroundColor: '#bfd0de',
                  alignItems: 'center',
                  borderRadius: 10,
                  marginTop: 10,
                }} >
                  <View>
                    <Text style={{
                      marginLeft: 30,
                      marginRight: 25
                    }}>
                      {index + 1}.
                    </Text>
                  </View>
                  <View >
                    <Text style={{ marginRight: 15 }}>
                      {element.id ? element.id :""}
                    </Text>
                  </View>

                  <View style={{ marginRight: 20 }}>
                    <Image
                      style={{
                        width: 55,
                        height: 55,
                        borderRadius: 50
                      }}
                      source={{
                        uri: element.avatar? element.avatar: "",
                      }}
                    />
                  </View>

                  <View >
                    <Text style={{ width: 70, }}>
                      {element.first_name ? element.first_name:""}
                    </Text>
                  </View>

                  <View style={styles.user4}>
                    <Text>
                      {element.employment.key_skill.length > 15
                        ? `${element.employment.key_skill.slice(0, 15)}...`
                        : element.employment.key_skill
                      }
                    </Text>
                  </View>

                </View>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}
// id, avatar , first_name,  employment.key_skills


// ---------------------------css -----------------------------
export default HomeScreen

const styles = StyleSheet.create({});