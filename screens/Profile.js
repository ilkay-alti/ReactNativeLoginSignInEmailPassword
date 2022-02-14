import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAuth } from "../AuthContext";

const Profile = () => {
  const [user] = useAuth();
  return (
    <View>
      <Text style={{ fontSize: 40, color: "#000" }}>{user.displayName}</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
