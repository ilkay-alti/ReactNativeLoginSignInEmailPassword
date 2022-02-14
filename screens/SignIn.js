import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  Image,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useAuth } from "../AuthContext";

const SignIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigation = useNavigation();

  // Auth provider
  const [user, setUser] = useAuth();

  //Login with email and password
  const handleLogin = () => {
    axios({
      method: "post",
      url: "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword",
      params: {
        key: "AIzaSyBmwnPUwrIFFtMYKg3qR1y_Hf1S-1vwk8E",
      },
      data: { email, password },
    })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.warn(err.message);
      });
  };

  //go to sign in
  const heanderSignIn = () => {
    navigation.navigate("SignUp");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.logobox}>
        <Image
          style={styles.logo}
          source={require("../assets/AppleLogo.png")}
        />
      </View>
      <Text style={styles.titleText}>Sign In</Text>
      <Text style={styles.questionText}>Already have an account?</Text>
      <TouchableOpacity onPress={heanderSignIn}>
        <Text style={styles.linkText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="ilkayalti@hotmail.com"
          value={email}
          placeholderTextColor={"#D8D8D8"}
          onChangeText={setEmail}
        />
        <Text style={styles.inputText}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="********"
          value={password}
          placeholderTextColor={"#D8D8D8"}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.signupButton} onPress={handleLogin}>
        <Text style={styles.signup}>Login</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#000417",
    paddingHorizontal: 32,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  titleText: { color: "#fff", fontSize: 36, fontWeight: "bold" },
  logobox: { width: 27, height: 35, marginTop: 32, marginBottom: 27 },
  logo: { width: "100%", height: "100%" },
  questionText: { color: "#D8D8D8", marginTop: 12, fontSize: 18 },
  linkText: { color: "#99E6FC", textDecorationLine: "underline", fontSize: 18 },
  inputContainer: { marginTop: 49 },
  inputText: {
    color: "#D8D8D8",
    fontSize: 14,

    marginTop: 17,
  },
  input: {
    backgroundColor: "#4B5378",
    borderRadius: 5,
    padding: 16,
    marginTop: 3,

    height: 56,
    fontSize: 18,
  },
  signupButton: {
    backgroundColor: "#67D9FA",
    width: 160,
    height: 48,
    borderRadius: 5,
    marginTop: 28,
    marginLeft: "52%",
    justifyContent: "center",
    alignItems: "center",
  },
  signup: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
