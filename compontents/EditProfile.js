import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const EditProfile = (props) => {
  const nav = props.navigation;
  const { route } = props;
  const [FullName, setFullName] = useState(route.params.fullName);
  const [Age, setAge] = useState(route.params.age);
  const [Address, setAddress] = useState(route.params.address);
  const [PhoneNumber, setPhoneNumber] = useState(route.params.phoneNumber);
  const [Email, setEmail] = useState(route.params.email);
  const onSaveAccount = () => {
    nav.navigate("Profile", {
      fullName: FullName,
      age: Age,
      address: Address,
      phoneNumber: PhoneNumber,
      email: Email,
    });
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={FullName}
        onChangeText={(e) => setFullName(e)}
        style={styles.textInput}
      />
      <TextInput
        value={Age}
        onChangeText={(e) => setAge(e)}
        style={styles.textInput}
      />
      <TextInput
        value={Address}
        onChangeText={(e) => setAddress(e)}
        style={styles.textInput}
      />
      <TextInput
        value={PhoneNumber}
        onChangeText={(e) => setPhoneNumber(e)}
        style={styles.textInput}
      />
      <TextInput
        value={Email}
        onChangeText={(e) => setEmail(e)}
        style={styles.textInput}
      />
      <TouchableOpacity onPress={onSaveAccount} style={styles.TouchableOpacity}>
        <Text style={styles.text}>Lưu</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchableOpacity}>
        <Text style={styles.text} onPress={() => nav.navigate("Home")}>
          Huỷ
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    width: 300,
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 10,
    padding: 5,
    paddingStart: 15,
  },
  text: {
    backgroundColor: "tomato",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    color: "white",
  },
  TouchableOpacity: {
    marginVertical: 10,
  },
});
