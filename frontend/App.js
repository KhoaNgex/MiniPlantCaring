import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartScreen from "./navigation/screens/StartScreen";
import LoginScreen from "./navigation/screens/LoginScreen";

const Start = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Start.Navigator initialRouteName={StartScreen} animation="slide_from_right">
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
        </Start.Navigator>
      </NavigationContainer>
  );
}



