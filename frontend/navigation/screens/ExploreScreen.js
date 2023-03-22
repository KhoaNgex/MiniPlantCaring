import React, { useState } from "react";
import { View } from "react-native";
import { SearchBar } from "@rneui/themed";

const ExploreScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const updateSearch = (search) => {
    setSearch(search);
  };
  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <SearchBar
        placeholder="Tìm kiếm cây trồng"
        onChangeText={updateSearch}
        value={search}
        round
        lightTheme
        containerStyle={{
          backgroundColor: "#F6F6F6",
          borderRadius: 20,
          width: "85%",
          marginTop: -30,
          zIndex: 1,
          elevation: 2,
        }}
        inputContainerStyle={{ backgroundColor: "white" }}
        placeholderTextColor={"#D2D2D2"}
        style={{ fontSize: 14 }}
      />
    </View>
  );
};

export default ExploreScreen;
