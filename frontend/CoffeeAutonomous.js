import React, { useState, useEffect } from "react";
import { Box, View, Center, NativeBaseProvider } from "native-base";
import { StyleSheet, Text, TouchableHighlight } from "react-native";

import axios from "axios";

export default function CoffeeAutonomous() {
  const onPressButton = async () => {
    console.log("hello");
    await axios.post(
      "http://localhost:3000/pet/insert",
      {
        name: "Fred",
        animalType: "Fish",
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
  };
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // const fetchData = async () => {
  //   const resp = await fetch("http://localhost:3000/pet/getAll");
  //   const fetch_data = await resp.json();
  //   console.log(fetch_data)
  //   setData(fetch_data);
  //   setLoading(false);
  // };

  const fetchData = async () => {
    const baseURL = "http://localhost:3000";
    const configurationObject = {
      method: "get",
      url: `${baseURL}/pet/getAll`,
    };
    const response = await axios(configurationObject);
    setData(response.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <Box px={5} py={2} rounded="md" bg="primary.300" my={2}>
        {item.title}
      </Box>
    );
  };

  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Box> Fetch API</Box>
        {loading && <Box>Loading..</Box>}
        <View>
          {data.map((item, idx) => (
            <Text key={idx}>{item.name}</Text>
          ))}
        </View>
        <TouchableHighlight onPress={onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
      </Center>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: "center",
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: "center",
    backgroundColor: "#2196F3",
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "white",
  },
});
