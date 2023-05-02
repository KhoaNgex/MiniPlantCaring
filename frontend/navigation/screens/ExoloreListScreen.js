import React, { useState } from "react";
import { Text,  StyleSheet, Image, View, FlatList, TouchableOpacity} from "react-native";
import { SearchBar } from "@rneui/themed";
import headerBackground from "../../assets/header-bg.png";
import axios from "axios";

var plant_detail = {};


const Plantitem = ({plantinfor, navigation}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={
        () => {
          plant_detail = plantinfor;
          navigation.navigate("detail-explore-plant");
        }
      }
      style={styles.plantItemTouch}
    >
      <View style={styles.plantItem}>
        <Image style={styles.plantImg} source={{uri: plantinfor.mainImage}}/>
        <Text style={styles.plantName}>{plantinfor.plantName}</Text>
      </View>
    </TouchableOpacity>
  )
}

const PlantList = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const updateSearch = (search) => {
    setSearch(search);
  };
  
  const [plantlists, setPlantlists] = useState([]);

  const timeout = setTimeout(()=>{
    axios
      .get("http://192.168.1.4:3000/explore/getAll")
      .then((response) => {setPlantlists(response.data)})
      .catch((error) => console.error(error));   
  }, 1000);

  if(plantlists.length > 0) {
    clearTimeout(timeout);
  }
  
  return (
    <View>
      <View style={styles.header}>
        <Image source={headerBackground} style={styles.headerImg}/>
        <Text style={{
          color: "white",
          fontSize: 23,
          fontWeight: "500",
          position: "absolute",
          top: 0,
          marginTop: 58,
          marginLeft: 30,
        }}>Đề xuất</Text>
        <Text
          style={{
          color: "white",
          fontSize: 14,
          fontWeight: "200",
          position: "absolute",            
          top: 0,
          marginTop: 100,
          marginLeft: 30,
        }}>Làm sao để cây phát triển tốt?</Text>
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
            position: "absolute",
            top: 150,
            marginLeft: "7.5%",
            marginRight: "7.5%"
          }}
          inputContainerStyle={{ backgroundColor: "white" }}
          placeholderTextColor={"#D2D2D2"}
          style={{ fontSize: 14 }}
        />
      </View>
      <FlatList
          style={styles.exploreList} 
          data={plantlists}
          numColumns={2}
          renderItem={({item}) => <Plantitem plantinfor={item} navigation = { navigation } />}
          keyExtractor={item => item._id}
      />
    </View>      
  );
}

const styles = StyleSheet.create({
    header: {
      width: "100%"
    },
    headerImg: {
      width: "100%",
      height: 190
    },
    exploreList: {
      width: "100%",
      marginTop: 40,
      marginBottom: 200
    },
    plantItemTouch: {
      alignItems: "center",
      width: "45%",
      backgroundColor: "white",
      marginTop: 10,
      marginBottom: 10,
      marginLeft: "2.5%",
      marginRight: "2.5%",
      borderRadius: 10,
      elevation: 5,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 5,
      shadowOffset: {width: 0, height: 0}
    },
    plantItem: {
      alignItems: "center"
    },
    plantName: {
      // display: "inline-block"
      marginTop: 10,
      marginBottom: 20,
      fontSize: 12
    },
    plantImg: {
      width: 110,
      height: 125,
      borderRadius: 10,
      marginTop: 20
    }, 
})

export default PlantList;
export var plant_detail;