import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartScreen from "./navigation/screens/StartScreen";
import LoginScreen from "./navigation/screens/LoginScreen";
import MainContainer from "./navigation/MainContainer";
import HomeScreen from "./navigation/screens/HomeScreen";
import NotificationScreen from "./navigation/screens/NotificationScreen";
import ForgotPassScreen from "./navigation/screens/ForgotPassScreen";
import ValidationScreen from "./navigation/screens/ValidationScreen";
import SettingsScreen from "./navigation/screens/SettingsScreen";
import ChangePassScreen from "./navigation/screens/ChangePassScreen";

const Start = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Start.Navigator initialRouteName={StartScreen} animation="slide_from_left">
          <Start.Screen 
              name="StartScreen"
              component={StartScreen}
              options={{
                headerShown: false,
              }}/>
          <Start.Screen 
              name="LoginScreen"
              component={LoginScreen}
              options={{
                headerShown: false,
              }}/>
          <Start.Screen 
              name="MainContainer"
              component={MainContainer}
              options={{
                headerShown: false,
              }}/>
          <Start.Screen 
              name="ForgotPassScreen"
              component={ForgotPassScreen}
              options={{
                headerShown: false,
              }}/>
          <Start.Screen 
              name="ValidationScreen"
              component={ValidationScreen}
              options={{
                headerShown: false,
              }}/>
          <Start.Screen 
              name="ChangePassScreen"
              component={ChangePassScreen}
              options={{
                headerShown: false,
              }}/>
        </Start.Navigator>
      </NavigationContainer>
  );
}