import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import Colors from "../assets/Colors";


const Login = () => {
  return (
    <View>
      <Image
        source={require("../assets/images/image_13.png")}
        style={styles.image}
      />
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to Education App</Text>
      </View>
      <View>
        <Text style={styles.textLogin}>Login/Signup</Text>
      </View>
      <TouchableOpacity style={styles.socialButton}>
          <AntDesign
            style={{marginRight: 20}}
            name="google"
            size={24}
            color="white"
          />
          <Text style={styles.socialText}>Sign in with Google</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;
const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    marginTop: -20,
    backgroundColor: "#fff",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  text: {
    fontWeight: "bold",
    fontSize: 35,
    lineHeight: 46,
    textAlign: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  textLogin: {
    fontWeight: "bold",
    fontSize: 25,
    lineHeight: 24,
    textAlign: "center",
    paddingHorizontal: 20,
    paddingTop: 70,
  },
  socialButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
    borderRadius: 30,
    padding: 20,
    margin: 30,
    display: 'flex',
    flexDirection: "row", 
  },
  socialText: {
    color: Colors.white,
    fontSize: 20,
  },
});