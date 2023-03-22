import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StyleSheet, Text, View, ImageBackground } from "react-native";

import MyPlantsScreen from "./MyPlantsScreen";
import PlantConditionScreen from "./PlantConditionScreen";

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="my-plants"
        component={MyPlantsScreen}
        options={{
          header: () => (
            <View style={{ height: 130 }}>
              <ImageBackground
                source={require("../../assets/header-bg.png")}
                style={StyleSheet.absoluteFill}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 23,
                    fontWeight: "500",
                    marginLeft: 40,
                    marginTop: 50,
                  }}
                >
                  Xin chào bạn
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: 14,
                    fontWeight: "200",
                    marginTop: 6,
                    marginLeft: 40,
                  }}
                >
                  Hãy chăm sóc cây trồng của bạn theo cách mới!
                </Text>
              </ImageBackground>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="plant-condition"
        component={PlantConditionScreen}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "#52D4B6",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeScreen;
