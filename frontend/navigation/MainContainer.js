import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Image, StyleSheet, Text, View } from "react-native";

// Screen
import HomeScreen from "./screens/HomeScreen";
import ExploreScreen from "./screens/ExploreScreen";
import NotificationScreen from "./screens/NotificationScreen";
import SettingsScreen from "./screens/SettingsScreen";

// Screen names
const homeName = "HOME";
const exploreName = "EXPLORE";
const notiName = "NOTI";
const settingName = "SETTINGS";

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  return (
    // <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === exploreName) {
              iconName = focused ? "leaf" : "leaf-outline";
            } else if (rn === notiName) {
              iconName = focused ? "notifications" : "notifications-outline";
            } else if (rn === settingName) {
              iconName = focused ? "settings" : "settings-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#52D4B6",
          tabBarInactiveTintColor: "grey",
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarStyle: [
            {
              display: "flex",
              height: 62,
              paddingBottom: 7,
              paddingTop: 7,
            },
            null,
          ],
        })}
      >
        <Tab.Screen
          name={homeName}
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name={exploreName}
          component={ExploreScreen}
          options={{
            headerShown: false,
          }}
        />
        {/* <Tab.Screen
          name={notiName}
          component={NotificationScreen}
          options={{
            headerTitle: () => (
              <View
                style={{
                  paddingLeft: 15,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 23,
                    fontWeight: "500",
                  }}
                >
                  Thông báo
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: 14,
                    fontWeight: "200",
                    marginTop: 5,
                  }}
                >
                  Nắm bắt tình hình nhanh chóng!
                </Text>
              </View>
            ),
            headerStyle: {
              height: 170,
            },
            headerBackground: () => (
              <Image
                style={StyleSheet.absoluteFill}
                source={require("../assets/header-bg.png")}
              />
            ),
          }}
        /> */}
        <Tab.Screen
          name={notiName}
          component={NotificationScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name={settingName}
          component={SettingsScreen}
          options={{
            title: "SETTING",
            headerStyle: {
              backgroundColor: "#34D79A",
            },
            headerTitleStyle: {
              color: "white",
            },
          }}
        />
      </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default MainContainer;
