import  {useState, useEffect} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../assets/Colors";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

WebBrowser.maybeCompleteAuthSession();



const Login = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId:
      "542658566994-5gqt04kt9imnt99sjbu13ok9p7097u71.apps.googleusercontent.com",
    expoClientId:
      "542658566994-ldvpbuqgrlgdde1fnded8q9gokibr958.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      setAccessToken(response.authentication.accessToken);
      console.log(response.authentication.accessToken);
       accessToken && getDataUser();
    }
  }, [response, accessToken]);

  const getDataUser = async () => {
     try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );

       const user = await response.json();
       console.log('user deatils',user);
      setUserInfo(user);
    } catch (error) {
      // Add your own error handler here
    }
  }

  return (
    <View>
      <Image
        source={require("../assets/images/image_13.png")}
        style={styles.image}
      />
      <View>
        <Text style={styles.text}>Welcome to CodeBox</Text>
      </View>
      <View>
        <Text style={styles.textLogin}>Login/Signup</Text>
      </View>
      <TouchableOpacity
        onPress={() => promptAsync()}
        style={styles.socialButton}>
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
    marginTop: 50,
    display: 'flex',
    flexDirection: "row", 
  },
  socialText: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: "bold",
  },
});