import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Switch,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import axios from "axios";

import { LineChart } from "react-native-chart-kit";

const apitemp = "http://192.168.1.4:3000/temperature/getAll";
const apisoil = "http://192.168.1.4:3000/soil_moisture/getAll";
const apihumi = "http://192.168.1.4:3000/humidity/getAll";
const apilight = "http://192.168.1.4:3000/light/getAll";

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

const LogItem = ({ stat, date, typ }) => {
  var title = "";
  var unit = "";
  var icon;
  if (typ == "temp") {
    title = "Nhiệt độ";
    unit = "oC";
    icon = <Ionicons name="thermometer-outline" color="#2DDA93" size={32} />;
  } else if (typ == "soil") {
    title = "Độ ẩm đất";
    icon = <Ionicons name="rainy-outline" color="#2DDA93" size={30} />;
  } else if (typ == "humi") {
    title = "Độ ẩm không khí";
    unit = "%";
    icon = <Ionicons name="water-outline" color="#2DDA93" size={30} />;
  } else if (typ == "light") {
    title = "C.Độ ánh sáng";
    unit = "lux";
    icon = <Ionicons name="sunny-sharp" color="orange" size={30} />;
  }
  return (
    <>
      <View style={styles.logItemContainer}>
        {icon}
        <View style={styles.logContent}>
          <Text style={styles.logContentStat}>
            {title} được ghi nhận: {stat}
            {unit}
          </Text>
          <Text style={styles.logContentDate}>{formatDate(date)}</Text>
        </View>
      </View>
      <View style={styles.divider} />
    </>
  );
};

const ConditionCards = () => {
  const [tempData, setTempData] = useState([{ value: 0 }]);
  const [humiData, setHumiData] = useState([{ value: 0 }]);
  const [soilData, setSoilData] = useState([{ value: 0 }]);
  const [lightData, setLightData] = useState([{ value: 0 }]);
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [light, setLight] = useState(0);
  const [soil_moisture, setSoil_moisture] = useState(0);

  const [isEnabledLed, setIsEnabledLed] = useState(false);
  const [isEnabledPump, setIsEnabledPump] = useState(false);

  const handleToggleStatusLed = () => {
    setIsEnabledLed(!isEnabledLed);
  };

  const handleToggleStatusPump = () => {
    setIsEnabledPump(!isEnabledPump);
  };

  useEffect(() => {
    const data = {
      signal: isEnabledPump == true ? 1 : 0,
      type: "PUMP",
    };

    axios.post("http://localhost:5000/control-signal", data).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [isEnabledPump])

  useEffect(() => {
    const data = {
      signal: isEnabledLed == true ? 1 : 0,
      type: "LED",
    };

    axios.post("http://localhost:5000/control-signal", data).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [isEnabledLed]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      axios
        .get("http://192.168.1.4:3000/temperature/getLast")
        .then((response) => setTempData(response.data))
        .then(setTemperature(tempData[0]["value"]))
        .catch((error) => console.error(error));
      axios
        .get("http://192.168.1.4:3000/soil_moisture/getLast")
        .then((response) => setSoilData(response.data))
        .then(setSoil_moisture(soilData[0]["value"]))
        .catch((error) => console.error(error));
      axios
        .get("http://192.168.1.4:3000/humidity/getLast")
        .then((response) => setHumiData(response.data))
        .then(setHumidity(humiData[0]["value"]))
        .catch((error) => console.error(error));
      axios
        .get("http://192.168.1.4:3000/light/getLast")
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
          <Switch
            style={styles.toggle_btn}
            trackColor={{ false: "#767577", true: "#ffffff" }}
            thumbColor={isEnabledLed ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => handleToggleStatusLed()}
            value={isEnabledLed}
          />
        </View>
        <Text style={[styles.statText, styles.markedStatText]}>
          {light} lux
        </Text>
        <Text style={[styles.statTypeText, styles.markedStatTypeText]}>
          Ánh sáng
        </Text>
      </View>
      <View style={[styles.card, styles.markedCard]}>
        <View style={styles.iconContainer}>
          <Ionicons name="rainy-outline" color="yellow" size={30} />
          <Switch
            style={styles.toggle_btn}
            trackColor={{ false: "#767577", true: "#ffffff" }}
            thumbColor={isEnabledPump ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => handleToggleStatusPump()}
            value={isEnabledPump}
          />
        </View>
        <Text style={[styles.statText, styles.markedStatText]}>
          {soil_moisture}
        </Text>
        <Text style={[styles.statTypeText, styles.markedStatTypeText]}>
          Độ ẩm đất
        </Text>
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
  const [tempData, setTempData] = useState([]);
  const [humiData, setHumiData] = useState([]);
  const [soilData, setSoilData] = useState([]);
  const [lightData, setLightData] = useState([]);

  const fetchData = async () => {
    try {
      const [res_temp, res_soil, res_humi, res_light] = await Promise.all([
        axios.get(apitemp),
        axios.get(apisoil),
        axios.get(apihumi),
        axios.get(apilight),
      ]);

      var res_temp_data = res_temp.data.map((item) => {
        return item.value;
      });

      var res_soil_data = res_soil.data.map((item) => {
        return item.value;
      });

      var res_humi_data = res_humi.data.map((item) => {
        return item.value;
      });

      var res_light_data = res_light.data.map((item) => {
        return item.value;
      });

      setTempData(res_temp_data);
      setHumiData(res_humi_data);
      setSoilData(res_soil_data);
      setLightData(res_light_data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchData();
    }, 500);

    return () => clearTimeout(timeout);
  }, [tempData, soilData, humiData, lightData]);

  const tempdata = {
    datasets: [
      {
        data: tempData,
        color: (opacity = 1) => `rgba(22, 156, 93, ${opacity})`,
      },
    ],
  };

  const soildata = {
    datasets: [
      {
        data: soilData,
        color: (opacity = 1) => `rgba(64, 22, 156, ${opacity})`,
      },
    ],
  };

  const humidata = {
    datasets: [
      {
        data: humiData,
        color: (opacity = 1) => `rgba(28, 201, 184, ${opacity})`,
      },
    ],
  };

  const lightdata = {
    datasets: [
      {
        data: lightData,
        color: (opacity = 1) => `rgba(230, 126, 30, ${opacity})`,
      },
    ],
  };

  return (
    <ScrollView style={styles.chartList}>
      <View style={styles.chartDesc}>
        <Text style={styles.chartTitle}>Nhiệt độ không khí</Text>
        <Text style={styles.chartMark}>
          Cập nhật lần cuối: {tempData[tempData.length - 1]}&deg;C
        </Text>
      </View>
      <ScrollView horizontal style={styles.chartContainer}>
        <LineChart
          data={tempdata}
          width={400}
          height={200}
          chartConfig={{
            backgroundColor: "#ffffff",
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
        />
      </ScrollView>

      <View style={styles.chartDesc}>
        <Text style={styles.chartTitle}>Độ ẩm đất</Text>
        <Text style={styles.chartMark}>
          Cập nhật lần cuối: {soilData[soilData.length - 1]}
        </Text>
      </View>
      <ScrollView horizontal style={styles.chartContainer}>
        <LineChart
          data={soildata}
          width={400}
          height={200}
          chartConfig={{
            backgroundColor: "#ffffff",
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
        />
      </ScrollView>

      <View style={styles.chartDesc}>
        <Text style={styles.chartTitle}>Độ ẩm không khí</Text>
        <Text style={styles.chartMark}>
          Cập nhật lần cuối: {humiData[humiData.length - 1]}%
        </Text>
      </View>
      <ScrollView horizontal style={styles.chartContainer}>
        <LineChart
          data={humidata}
          width={400}
          height={200}
          chartConfig={{
            backgroundColor: "#ffffff",
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
        />
      </ScrollView>

      <View style={styles.chartDesc}>
        <Text style={styles.chartTitle}>Cường độ sáng</Text>
        <Text style={styles.chartMark}>
          Cập nhật lần cuối: {lightData[lightData.length - 1]}lux
        </Text>
      </View>
      <ScrollView horizontal style={styles.chartContainer}>
        <LineChart
          data={lightdata}
          width={400}
          height={200}
          chartConfig={{
            backgroundColor: "#ffffff",
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
        />
      </ScrollView>
    </ScrollView>
  );
};

const Logs = () => {
  const [enviData, setEnviData] = useState([]);
  const fetchData = async () => {
    try {
      const [res_temp, res_soil, res_humi, res_light] = await Promise.all([
        axios.get(apitemp),
        axios.get(apisoil),
        axios.get(apihumi),
        axios.get(apilight),
      ]);

      var res_temp_data = res_temp.data.map((item) => {
        return { ...item, typ: "temp" };
      });

      var res_soil_data = res_soil.data.map((item) => {
        return { ...item, typ: "soil" };
      });

      var res_humi_data = res_humi.data.map((item) => {
        return { ...item, typ: "humi" };
      });

      var res_light_data = res_light.data.map((item) => {
        return { ...item, typ: "light" };
      });

      setEnviData(
        res_temp_data
          .concat(res_soil_data, res_humi_data, res_light_data)
          .sort((a, b) => new Date(b.receivedAt) - new Date(a.receivedAt))
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchData();
    }, 500);

    return () => clearTimeout(timeout);
  }, [enviData]);
  return (
    <View style={styles.logContainer}>
      {enviData.map((log, index) => (
        <View key={index}>
          <LogItem stat={log.value} date={log.receivedAt} typ={log.typ} />
        </View>
      ))}
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
    flexDirection: "row",
    justifyContent: "space-between",
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
  logContainer: {
    marginLeft: 20,
  },
  logItemContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  logContent: {
    marginLeft: 10,
  },
  logContentStat: {
    fontSize: 15,
    color: "#36455A",
    fontWeight: "500",
  },
  logContentDate: {
    fontSize: 13,
    color: "#9EA5B6",
    fontStyle: "italic",
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#e6e6e6",
    marginBottom: 10,
    width: 320,
  },
  chartContainer: {
    marginBottom: 20,
  },
  chartList: {
    marginLeft: 20,
    marginRight: 20,
  },
  chartDesc: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  chartTitle: {
    fontSize: 17,
    color: "#36455A",
    fontWeight: "500",
  },
  chartMark: {
    fontSize: 14,
    color: "#9EA5B6",
    fontStyle: "italic",
  },
  toggle_btn: {
    marginTop: 5,
    marginRight: 5
  },
});

export default PlantConditionScreen;
