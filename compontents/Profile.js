import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Profile = (props) => {
  const nav = props.navigation;
  const { route } = props;
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://scontent.fhan5-8.fna.fbcdn.net/v/t1.6435-9/158286235_1355382268148507_3942750498553992743_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HOq0l1URID4AX-OKKNM&_nc_ht=scontent.fhan5-8.fna&oh=00_AfAhMSSG-PWjsmLThg9Zf-PyfZ_l3vahuErh9JIwlE5fLw&oe=6409DC5E",
        }}
        style={{ borderRadius: 200, width: 200, height: 200 }}
      />
      <TouchableOpacity
        style={{ marginVertical: 5 }}
        onPress={() => nav.navigate("Edit_Profile", { ...route.params })}
      >
        <Image
          style={{ width: 30, height: 30 }}
          source={require("../assets/edit_button.png")}
        />
      </TouchableOpacity>
      <Text style={styles.text}>Tên: {route.params.fullName}</Text>
      <Text style={styles.text}>Tuổi: {route.params.age}</Text>
      <Text style={styles.text}>Địa chỉ: {route.params.address}</Text>
      <Text style={styles.text}>SĐT: {route.params.phoneNumber}</Text>
      <Text style={styles.text}>Email: {route.params.email}</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginVertical: 5,
    fontSize: 18,
    color: "tomato",
    fontWeight: "800",
  },
});
