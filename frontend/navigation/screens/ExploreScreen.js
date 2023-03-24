import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PlantList from "./ExoloreListScreen";
import DetailExploreScreen from "./DetailExploreScreen";


const Stack = createNativeStackNavigator();


const ExploreScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="explore-plant"
        component={PlantList}
        options={{
          headerShown: false,
          title: "",
          headerStyle: {
            backgroundColor: "#52D4B6",
          },
        }}
      />
      <Stack.Screen
        name="detail-explore-plant"
        component={DetailExploreScreen}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "#fff",
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
        }}
      />
    </Stack.Navigator>
  );
  
};

export default ExploreScreen;
