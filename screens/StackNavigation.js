import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../compontents/Profile";
import EditProfile from "../compontents/EditProfile";
const Home = (props) => {
  const nav = props.navigation;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          nav.navigate("Profile", {
            fullName: "Vũ Viết Khanh",
            age: "17",
            address: "Hà Lội",
            phoneNumber: "0123456789",
            email: "khanhvvph28077@fpt.edu.vn",
          })
        }
      >
        <Text style={styles.text}>Thông tin cá nhân</Text>
      </TouchableOpacity>
    </View>
  );
};
const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Edit_Profile" component={EditProfile} />
    </Stack.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    backgroundColor: "tomato",
    padding: 15,
    borderRadius: 20,
    color: "white",
  },
});
