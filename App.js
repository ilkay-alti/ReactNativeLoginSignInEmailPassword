import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import Profile from "./screens/Profile";
import AuthProvider, { useAuth } from "./AuthContext";

export default function App() {
  const Stack = createNativeStackNavigator();

  const Navigater = () => {
    const [user] = useAuth();

    if (!user) {
      return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
      );
    }
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <AuthProvider>
        <Navigater />
      </AuthProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
