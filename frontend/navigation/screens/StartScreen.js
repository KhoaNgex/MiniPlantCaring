import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";


const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/start-header.png")}
        style={styles.header_image}
      ></ImageBackground>

      <Text style={styles.header_text}>Plant Smart</Text>

      <Image
        source={require("../../assets/start-image.png")}
        style={styles.center_image}
      ></Image>
      <View style={styles.center_content}>
        <Text style={styles.center_text}>
          Thông minh, đơn giản và nhanh chóng!
        </Text>

        <Text style={styles.center_subtext}>
          Ứng dụng hỗ trợ chăm sóc cây trồng sử dụng IoT
        </Text>
      </View>

      <TouchableOpacity
        style={styles.startBtn}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        <Text style={styles.startText}>Bắt đầu thôi!</Text>
      </TouchableOpacity>

      <View style={styles.space}></View>

      <Text style={styles.footer_text}>Được phát triển bởi LCKK Team</Text>

      <View style={styles.footer_line}></View>
    </View>
  );
};

const IMAGE_HEIGHT = 213.33;
const IMAGE_WIDTH = 200;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header_image: {
    height: 50,
    width: "100%",
  },
  header_text: {
    color: "#61D2C4",
    fontSize: 36,
    fontWeight: "700",
    marginTop: 30,
    textTransform: "uppercase",
  },
  center_image: {
    marginTop: 30,
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
  },
  center_content: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  center_text: {
    color: "#36455A",
    fontSize: 18,
    fontWeight: "300",
    marginTop: 20,
  },
  center_subtext: {
    color: "#6A6F7D",
    fontSize: 13,
    fontWeight: "200",
    marginTop: 15,
    textAlign: "center",
  },
  startBtn: {
    width: "85%",
    borderRadius: 3,
    textAlign: "center",
    backgroundColor: "#2DDA93",
    display: "flex",
    height: 60,
    marginTop: 35,
  },
  startText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    justifyContent: "center",
    alignSelf: "center",
    padding: 15,
  },
  footer_text: {
    color: "#6A6F7D",
    fontSize: 13,
    fontWeight: "200",
  },
  footer_line: {
    backgroundColor: "#E3E3E3",
    height: 5,
    width: 150,
    borderRadius: 70,
    marginTop: 5,
  },
  space: {
    height: 155,
  },
});

export default StartScreen;
