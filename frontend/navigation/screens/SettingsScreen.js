import React from "react";
import { View, Pressable, StyleSheet, Text } from "react-native";

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        <Text style={styles.text}>Đăng xuất</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 7,
    backgroundColor: "#e6e6eb",
    marginTop: 5,
    width: "80%",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "500",
    letterSpacing: 0.25,
    color: "#2b2b2b",
  },
});

export default SettingsScreen;
