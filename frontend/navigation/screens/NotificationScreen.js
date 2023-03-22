import React from "react";
import { Text, View } from "react-native";

const NotificationScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text onPress={() => navigation.navigate("Home")}>NOTI</Text>
    </View>
  );
};

export default NotificationScreen;
