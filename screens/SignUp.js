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
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../AuthContext";

const SignUp = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");

  //go to sign in
  const navigation = useNavigation();
  const heanderSignIn = () => {
    navigation.navigate("SignIn");
  };

  // Auth provider
  const [_, setUser] = useAuth();

  //Register with email password and name
  const handleRegister = () => {
    axios({
      method: "post",
      url: "https://identitytoolkit.googleapis.com/v1/accounts:signUp",
      params: {
        key: "AIzaSyBmwnPUwrIFFtMYKg3qR1y_Hf1S-1vwk8E",
      },
      data: { email, password },
    })
      .then((res) => {
        axios({
          method: "post",
          url: "https://identitytoolkit.googleapis.com/v1/accounts:update",
          params: {
            key: "AIzaSyBmwnPUwrIFFtMYKg3qR1y_Hf1S-1vwk8E",
          },
          data: {
            idToken: res.data.idToken,
            displayName: name,
          },
        })
          .then((r) => {
            setUser({ ...r.data, idToken: res.data.idToken });
          })
          .catch((err) => {
            alert(err.message);
          });

        console.log(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
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
      <Text style={styles.titleText}>Sign Up</Text>
      <Text style={styles.questionText}>Already have an account?</Text>
      <TouchableOpacity onPress={heanderSignIn}>
        <Text style={styles.linkText}>Sign in</Text>
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Your Name</Text>
        <TextInput
          style={styles.input}
          placeholder="ilkayus"
          value={name}
          placeholderTextColor={"#D8D8D8"}
          onChangeText={setName}
        />
        <Text style={styles.inputText}>Your Email</Text>
        <TextInput
          style={styles.input}
          placeholder="ilkayalti@hotmail.com"
          value={email}
          placeholderTextColor={"#D8D8D8"}
          onChangeText={setEmail}
        />
        <Text style={styles.inputText}>Your Password</Text>
        <TextInput
          style={styles.input}
          placeholder="********"
          value={password}
          placeholderTextColor={"#D8D8D8"}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.signupButton} onPress={handleRegister}>
        <Text style={styles.signup}>SIGN UP</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default SignUp;

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
