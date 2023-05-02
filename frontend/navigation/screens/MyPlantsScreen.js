import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  ScrollView,
} from "react-native";
import { SearchBar } from "@rneui/themed";

const MyPlantsScreen = ({ navigation }) => {
  return (
    <View>
      <ScrollView style={styles.listContainer}>
        <Text style={styles.title}>Cây trồng của tôi</Text>
        <View style={styles.plantCardContainter}>
          <View style={styles.plantCard}>
            <Image
              style={styles.plantImage}
              source={require("../../assets/plant.png")}
            />
            <View style={styles.cardContent}>
              <Text style={styles.plantName}>HoniHone</Text>
              <Text style={styles.plantType}>Lan bình rượu</Text>
              <TouchableOpacity style={styles.viewButton}>
                <Text
                  style={styles.viewButtonText}
                  onPress={() => navigation.navigate("plant-condition")}
                >
                  Theo dõi
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 30,
    paddingTop: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    color: "#36455A",
  },
  plantCardContainter: {
    marginTop: 15,
  },
  plantCard: {
    backgroundColor: "#F6F6F6",
    height: 130,
    width: "95%",
    borderRadius: 10,
    margin: 5,
    elevation: 5,
    flexDirection: "row",
  },
  plantImage: {
    height: "100%",
    resizeMode: "contain",
    borderRadius: 10,
    width: "50%",
  },
  cardContent: {
    padding: 20,
    paddingTop: 17
  },
  plantName: {
    fontSize: 22,
    color: "#36455A",
    fontWeight: "500",
    marginBottom: 4,
  },
  plantType: {
    fontSize: 15,
    color: "#A1A8B9",
    fontStyle: "italic",
  },
  viewButton: {
    marginTop: 12,
    backgroundColor: "#2DDA93",
    alignItems: "center",
    borderRadius: 10,
    padding: 3,
    width: "90%"
  },
  viewButtonText: {
    color: "white"
  },
});

export default MyPlantsScreen;
