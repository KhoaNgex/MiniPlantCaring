import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import axios from "axios";

const ConditionCards = () => {
  const [tempData, setTempData] = useState([{ value: 0 }]);
  const [humiData, setHumiData] = useState([{ value: 0 }]);
  const [soilData, setSoilData] = useState([{ value: 0 }]);
  const [lightData, setLightData] = useState([{ value: 0 }]);
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [light, setLight] = useState(0);
  const [soil_moisture, setSoil_moisture] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      axios
        .get("http://192.168.1.7:3000/temperature/getLast")
        .then((response) => setTempData(response.data))
        .then(setTemperature(tempData[0]["value"]))
        .catch((error) => console.error(error));
      axios
        .get("http://192.168.1.7:3000/soil_moisture/getLast")
        .then((response) => setSoilData(response.data))
        .then(setSoil_moisture(soilData[0]["value"]))
        .catch((error) => console.error(error));
      axios
        .get("http://192.168.1.7:3000/humidity/getLast")
        .then((response) => setHumiData(response.data))
        .then(setHumidity(humiData[0]["value"]))
        .catch((error) => console.error(error));
      axios
        .get("http://192.168.1.7:3000/light/getLast")
        .then((response) => setLightData(response.data))
        .then(setLight(lightData[0]["value"]))
        .catch((error) => console.error(error));
    }, 1000);

    // Cleanup function to clear timeout
    return () => clearTimeout(timeout);
  }, [tempData, soilData, humiData, lightData]);

  return (
    <View style={styles.cardContainer}>
      <View style={[styles.card, styles.markedCard]}>
        <View style={styles.iconContainer}>
          <Ionicons name="sunny-sharp" color="yellow" size={30} />
        </View>
        <Text style={[styles.statText, styles.markedStatText]}>
          {light} lux
        </Text>
        <Text style={[styles.statTypeText, styles.markedStatTypeText]}>
          Ánh sáng
        </Text>
      </View>
      <View style={styles.card}>
        <View style={styles.iconContainer}>
          <Ionicons name="rainy-outline" color="#2DDA93" size={30} />
        </View>
        <Text style={styles.statText}>{soil_moisture}</Text>
        <Text style={styles.statTypeText}>Độ ẩm đất</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.iconContainer}>
          <Ionicons name="water-outline" color="#2DDA93" size={30} />
        </View>
        <Text style={styles.statText}>{humidity}%</Text>
        <Text style={styles.statTypeText}>Độ ẩm không khí</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.iconContainer}>
          <Ionicons name="thermometer-outline" color="#2DDA93" size={32} />
        </View>
        <Text style={styles.statText}>
          {temperature}
          &deg;C
        </Text>
        <Text style={styles.statTypeText}>Nhiệt độ</Text>
      </View>
    </View>
  );
};

const Charts = () => {
  return (
    <View>
      <Text>Charts</Text>
    </View>
  );
};

const Logs = () => {
  return (
    <View>
      <Text>Logs</Text>
    </View>
  );
};

const PlantConditionScreen = () => {
  const [sceneType, setSceneType] = useState("condition");

  const showCondition = () => {
    setSceneType("condition");
  };

  const showChart = () => {
    setSceneType("chart");
  };

  const showLog = () => {
    setSceneType("log");
  };

  const renderScene = (type) => {
    if (type === "condition") {
      return <ConditionCards />;
    }

    if (type === "chart") {
      return <Charts />;
    }

    if (type === "log") {
      return <Logs />;
    }
  };

  return (
    <ScrollView>
      <Text style={styles.plantName}>HoniHone</Text>
      <Text style={styles.plantType}>Lan bình rượu</Text>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={
            sceneType === "condition"
              ? [styles.tabButton, styles.markedButton]
              : styles.tabButton
          }
          onPress={showCondition}
        >
          <Text
            style={
              sceneType === "condition"
                ? [styles.tabButtonText, styles.markedButtonText]
                : styles.tabButtonText
            }
          >
            Điều kiện
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            sceneType === "chart"
              ? [styles.tabButton, styles.markedButton]
              : styles.tabButton
          }
          onPress={showChart}
        >
          <Text
            style={
              sceneType === "chart"
                ? [styles.tabButtonText, styles.markedButtonText]
                : styles.tabButtonText
            }
          >
            Biểu đồ
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            sceneType === "log"
              ? [styles.tabButton, styles.markedButton]
              : styles.tabButton
          }
          onPress={showLog}
        >
          <Text
            style={
              sceneType === "log"
                ? [styles.tabButtonText, styles.markedButtonText]
                : styles.tabButtonText
            }
          >
            Ghi nhận
          </Text>
        </TouchableOpacity>
      </View>
      <View>{renderScene(sceneType)}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    marginLeft: 30,
    marginTop: 20,
  },
  tabButton: {
    marginBottom: 30,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 50,
    borderColor: "black",
    marginRight: 10,
  },
  tabButtonText: {
    textAlign: "center",
    padding: 12,
    color: "#36455A",
  },
  markedButton: {
    backgroundColor: "#2DDA93",
  },
  markedButtonText: {
    color: "white",
  },
  cardContainer: {
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "white",
    height: 150,
    width: 150,
    borderRadius: 25,
    padding: 10,
    margin: 5,
    marginBottom: 10,
    elevation: 5,
  },
  statText: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#9F9F9F",
    textAlign: "center",
  },
  statTypeText: {
    color: "#36455A",
    marginLeft: 10,
    marginTop: 25,
    fontStyle: "italic",
  },
  iconContainer: {
    width: "100%",
    paddingLeft: 15,
    marginBottom: 10,
    marginTop: 5,
  },
  markedStatText: {
    color: "white",
  },
  markedStatTypeText: {
    color: "white",
  },
  markedCard: {
    backgroundColor: "#2DDA93",
  },
  plantName: {
    fontSize: 25,
    color: "#36455A",
    fontWeight: "500",
    marginTop: 20,
    marginLeft: 30,
  },
  plantType: {
    fontSize: 15,
    color: "#A1A8B9",
    fontStyle: "italic",
    marginTop: 5,
    marginLeft: 30,
  },
});

export default PlantConditionScreen;
