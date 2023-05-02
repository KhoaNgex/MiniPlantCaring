import React, {useState} from "react";
import { 
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
  FlatList,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from "axios";

const Item = ({notiInfor}) => {

  if (notiInfor.notiType == "update") {
    return (
      <View style={styles.notiItemContainer}>
        <Text style={styles.notiItemHeader}>[Cập nhật] Dữ liệu cây <Text style={{color: "#33E49B"}}>{notiInfor.plantName}</Text></Text>
        <Text style={{color: "grey", fontSize: 10, marginTop: 5}}>{notiInfor.notiDate}</Text>
        <View style={styles.newConditionContainer}>
          <View style={styles.newCondition}>
            <Text style={{fontSize: 14}}><Ionicons name="sunny-sharp" color="#2DDA93" size={16} /> {notiInfor.newCondition[0]}</Text>
          </View>
          <View style={styles.newCondition}>
            <Text style={{fontSize: 14}}><Ionicons name="rainy-outline" color="#2DDA93" size={16} /> {notiInfor.newCondition[1]}</Text>
          </View>
          <View style={styles.newCondition}>
            <Text style={{fontSize: 14}}><Ionicons name="water-outline" color="#2DDA93" size={16} /> {notiInfor.newCondition[2]}</Text>
          </View>
          <View style={styles.newCondition}>
            <Text style={{fontSize: 14}}><Ionicons name="thermometer-outline" color="#2DDA93" size={16} /> {notiInfor.newCondition[3]}</Text>
          </View>
        </View>
      </View>
    )
  } else {
    return (
      <View style={styles.notiItemContainer}>
        <Text style={styles.notiItemHeader}>[Cảnh báo] Cây <Text style={{color: "#33E49B"}}>{notiInfor.plantName}</Text> {notiInfor.noti}</Text>
        <Text style={{color: "grey", fontSize: 10, marginTop: 5}}>{notiInfor.notiDate}</Text>
        <Text style={{color: "#36455A", fontSize: 12, marginTop: 5}}>Cây {notiInfor.plantName} đang có {notiInfor.problem}. {notiInfor.solution}</Text>
      </View>
    )
  }
};

const NotificationScreen = () => {

  const [isEnabled, setIsEnabled] = useState(true)

  const handleToggleStatus = () => {
    setIsEnabled(!isEnabled)
  }

  const [notiLists, setNotiLists] = useState([]);

    const timeout = setTimeout(()=>{
        axios
        .get("http://192.168.1.4:3000/notification/getAll")
        .then((response) => {setNotiLists(response.data)})
        .catch((error) => console.error(error));   
    }, 1000);

    if(notiLists.length > 0) {
        clearTimeout(timeout);
    }

  return (
    <View style={styles.container}>

        <View style={styles.header}>
          <Image source={require("../../assets/header-bg.png")} style={styles.headerImg}/>
          <Text style={{
            color: "white",
            fontSize: 23,
            fontWeight: "500",
            position: "absolute",
            top: 0,
            marginTop: 58,
            marginLeft: 30,
          }}>Thông báo</Text>

          <Text
            style={{
              color: "white",
              fontSize: 14,
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
          style={styles.notiList}
          data={notiLists}
          renderItem={({item}) => <Item notiInfor={item} />}
          keyExtractor={item => item._id}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "flex-start",
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
  notiList: {
    width: "100%",
    marginTop: 20,
    marginBottom: 280
  },
  notiItemContainer: {
    width: "90%",
    height: 120,
    backgroundColor: "#fff",
    marginBottom: 15,
    marginLeft: "5%",
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 0},
    padding: 10,
  },
  notiItemHeader: {
    fontWeight: "bold",
  },
  newConditionContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15
  },
  newCondition: {
    marginRight: 15
  }
});

export default NotificationScreen;

