import { SafeAreaView, StyleSheet,Pressable, Text, View, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


const HomeScreen = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    axios.get('https://random-data-api.com/api/users/random_user?size=80').then((response) => {
      setData(response.data);
      // console.log(response.data)
    });
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.container1}>
          <Text style={styles.Head}>Intern Assignment</Text>
        </View>

        <Pressable style={styles.Random} onPress={() => navigation.navigate("UserProfile")}>
          <Text>
          Random User Profile
          </Text>
          </Pressable>

        <View style={styles.detail} >
          <View style={styles.h1}>
            <Feather name="users" size={24} color="black" />
            <Text style={styles.h1}>All User's</Text>
          </View>


          <View style={styles.btn1}>
            <Pressable style={styles.btn0}>
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

          {data.map((element, index) => {
            // console.log("data", element)
            return (
              <View style={styles.btn1} key={index}>
                <Pressable style={styles.btn} >
                  <View>
                    <Text style={styles.user}>
                      {index + 1}.
                    </Text>
                  </View>
                  <View >
                    <Text style={styles.user1}>
                      {element.id}
                    </Text>
                  </View>

                  <View style={styles.user2}>
                    <Image
                      style={styles.logo}
                      // source={{
                      //   uri: 'https://i.postimg.cc/mD0J0xYw/Whats-App-Image-2023-12-23-at-10-36-11-c59d566b.jpg',
                      // }}
                      source={{
                        uri: element.avatar,
                      }}
                    />
                  </View>

                  <View >
                    <Text style={styles.user3}>
                      {element.first_name}
                    </Text>
                    {/* first_name */}
                  </View>

                  <View style={styles.user4}>
                    <Text>
                      {element.employment.key_skill.length > 15
                        ? `${element.employment.key_skill.slice(0, 15)}...`
                        : element.employment.key_skill
                      }
                    </Text>
                    {/* employment.key_skill */}
                  </View>

                </Pressable>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  container1: {
    width: 370,
    backgroundColor: '#4daeff',

  },
  h1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
    marginBottom: 5,
    alignItems: 'center',
    // marginLeft: 150

  },
  Head: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    marginLeft: 110
  },
  detail: {
    marginTop: 20,
  },
  btn0: {
    flex: 1,
    flexDirection: 'row',
    width: 370,
    height: 'auto',
    padding: 5,
    backgroundColor: '#bfd0de',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 10,
    marginTop: 10,
  },
  btn: {
    flex: 1,
    flexDirection: 'row',
    width: 370,
    height: 'auto',
    padding: 5,
    backgroundColor: '#bfd0de',
    alignItems: 'center',
    // justifyContent: 'space-evenly',
    borderRadius: 10,
    marginTop: 10,
  },
  btn1: {
    marginBottom: 10
  },
  user: {
    marginLeft: 30,
    marginRight: 25
  },
  user1: {

    marginRight: 15
  },
  user2: {

    marginRight: 20
  },
  user3: {
    width: 70,
    // marginRight:15 
  },
  logo: {
    width: 55,
    height: 55,
    borderRadius: 50
  },
  Random:{
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
  }
});