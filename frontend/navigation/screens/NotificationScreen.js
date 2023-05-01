import React, {useState} from "react";
import { 
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Switch,
  FlatList,
} from "react-native";

const NotificationScreen = () => {

  const [isEnabled, setIsEnabled] = useState(true)

  const handleToggleStatus = () => {
    setIsEnabled(!isEnabled)
  }

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    }
  ];

  const Item = ({title}) => (
    <View>
      <Text>{title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>

        <View style={styles.header}>
          <Image source={require("../../assets/header-bg.png")} style={styles.headerImg}/>
          <Text style={{
            color: "white",
            fontSize: 30,
            fontWeight: "500",
            position: "absolute",
            top: 0,
            marginTop: 60,
            marginLeft: 30,
          }}>Thông báo</Text>

          <Text
            style={{
            color: "white",
            fontSize: 15,
            fontWeight: "200",
            position: "absolute",            
            top: 0,
            marginTop: 100,
            marginLeft: 30,
          }}>Nắm bắt tình hình nhanh chóng!</Text>
        </View>
          
        <View style={styles.container1}>
          <View style={styles.toggle}>
            <Text style={styles.toggle_text}> Nhận thông báo? </Text>
            <Switch style={styles.toggle_btn}
              trackColor={{false: '#767577', true: '#ffffff'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => handleToggleStatus()}
              value={isEnabled}
            />
          </View>
        </View>

        <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    // alignItems: "center",
  },
  header: {
    height: 190,
  },
  headerImg: {
    width: "100%",
    height: "100%",
  },
  container1: {
    justifyContent: "center",
    borderBottomColor: "#c7c7c7",
    borderBottomWidth: 1,
    borderTopWidth: 0,
  },
  toggle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  toggle_text: {
    fontSize: 18,
  },
  toggle_btn: {
    alignSelf: "center",
  },
});

export default NotificationScreen;

