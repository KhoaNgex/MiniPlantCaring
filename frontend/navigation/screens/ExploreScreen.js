import React, { Fragment, useState } from "react";
import { Text, ScrollView, StyleSheet, Image, View, FlatList } from "react-native";
import { SearchBar } from "@rneui/themed";
// import { Divider } from "@rneui/base";
import headerBackground from "../../assets/header-bg.png";
import axios from "axios";

const plantlists = [
  {
    id: 1,
    plantName: "Sen đá móng rồng",
    mainImage: "https://cayxinh.vn/wp-content/uploads/2017/11/sen-da-mong-rong-sao-41.jpg"      
  },
  {
    id: 2,
    plantName: "Sen đá móng rồng",
    mainImage: "https://cayxinh.vn/wp-content/uploads/2017/11/sen-da-mong-rong-sao-41.jpg"
  },
  {
    id: 3,
    plantName: "Sen đá móng rồng",
    mainImage: "https://cayxinh.vn/wp-content/uploads/2017/11/sen-da-mong-rong-sao-41.jpg"
  },
  {
    id: 4,
    plantName: "Sen đá móng rồng",
    mainImage: "https://cayxinh.vn/wp-content/uploads/2017/11/sen-da-mong-rong-sao-41.jpg"
  },
  {
    id: 5,
    plantName: "Sen đá móng rồng",
    mainImage: "https://cayxinh.vn/wp-content/uploads/2017/11/sen-da-mong-rong-sao-41.jpg"
  },
  {
    id: 6,
    plantName: "Sen đá móng rồng",
    mainImage: "https://cayxinh.vn/wp-content/uploads/2017/11/sen-da-mong-rong-sao-41.jpg"
  },
  {
    id: 7,
    plantName: "Sen đá móng rồng",
    mainImage: "https://cayxinh.vn/wp-content/uploads/2017/11/sen-da-mong-rong-sao-41.jpg"
  }
]

function Plantitem({plantinfor}) {
  return (
      <View style={styles.plantItem}>
        <Image style={styles.plantImg} source={{uri: plantinfor.mainImage}}/>
        <Text style={styles.plantName}>{plantinfor.plantName}</Text>
      </View>
  )
}

const ExploreScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const updateSearch = (search) => {
    setSearch(search);
  };

  // const plantlists = [];
  // plantlists = response.data

  axios
    .get("http://192.168.1.7:3000/explore/getAll")
    .then((response) => console.log(response.data))
    .catch((error) => console.error(error));

  // console.log(plantlists);  
  return (   
    <View>
      <View style={styles.header}>
        <Image source={headerBackground} style={styles.headerImg}/>
        <Text style={{
          color: "white",
          fontSize: 25,
          fontWeight: "500",
          position: "absolute",
          top: 0,
          marginTop: 58,
          marginLeft: 30,
        }}>Đề xuất</Text>
        <Text
          style={{
          color: "white",
          fontSize: 16,
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
        renderItem={({item}) => <Plantitem plantinfor={item} />}
        keyExtractor={item => `${item.id}`}
      />

     
    </View>      
  );
};

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
    marginBottom: 200,
    // marginLeft: "10%",
    // marginRight: "10%"
  },
  plantItem: {
    alignItems: "center",
    width: "43%",
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: "3.5%",
    marginRight: "3.5%",
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 0}
  },
  plantName: {
    // display: "inline-block"
    marginTop: 10,
    marginBottom: 20
  },
  plantImg: {
    width: 110,
    height: 125,
    borderRadius: 10,
    marginTop: 20,
  }, 
})

export default ExploreScreen;
