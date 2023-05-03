import React, { useState, useEffect } from "react";
import { 
  View, 
  Pressable, 
  StyleSheet, 
  Text,
  ImageBackground,
  Touchable,
  ScrollView,
  Image,
} from "react-native";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';


// const SettingsScreen = ({navigation}) => {

//   return (
//     <View style={styles.container}>
//       <Pressable style={styles.button}
//         onPress={() => navigation.navigate('StartScreen')}
//       >
//         <Text style={styles.text}>Đăng xuất</Text>
//       </Pressable>
//     </View>
//   );
// };

const user_data = [
  {
    name: "Nguyen Dang Anh Khoa", 
    username: "khoanda", 
    password: "khoanda"
  }
]

const SettingsScreen = ({navigation}) => {

  const [openSetting, setOpenSetting] = useState(false)

  const handleOpenSetting = () => {
    setOpenSetting(!openSetting)
  }

  return (
    <View style={styles.container}>

        <View style={styles.header_container}>
          <Text style={styles.header_text}>Cài đặt</Text>
        </View>
      
      <ScrollView style={styles.subcontainer}>  
        <Pressable style={styles.user_container}>
          <ImageBackground
            source={require("../../assets/user-image.png")}
            style={styles.user_image}
          ></ImageBackground>
          <View style={styles.user_text}>
            <Text style={styles.user_name}>{user_data[0]["name"]}</Text>
            <Text style={styles.user_username}>@{user_data[0]["username"]}</Text>
          </View>
        </Pressable>

        <Pressable style={styles.setting_container}
          onPress={() => handleOpenSetting()}
        >
          <View style={styles.setting_icon}>
            <FontAwesomeIcon name="cog" color="#6A6F7D" size={30} />
          </View>
          <Text style={styles.setting_text}>Cài đặt chung</Text>
          <View style={styles.setting_arrow}>
            <FontAwesomeIcon name={openSetting == false ? "chevron-right": "chevron-down"} color="#6A6F7D" size={20} />
          </View>
        </Pressable>

        { openSetting != false &&
          <>
            <View style={styles.bar}></View>
            <Pressable style={styles.setting_container}>
              <View style={styles.setting_icon}>
                <FontAwesomeIcon name="language" color="#6A6F7D" size={30} />
              </View>
              <Text style={styles.setting_text}>Ngôn ngữ</Text>
            </Pressable>
            <Pressable style={styles.setting_container}>
              <View style={styles.setting_icon}>
                <FontAwesomeIcon name="lock" color="#6A6F7D" size={30} />
              </View>
              <Text style={styles.setting_text}>Đổi mật khẩu</Text>
            </Pressable>
            <Pressable style={styles.setting_container}>
              <View style={styles.setting_icon}>
                <FontAwesomeIcon name="bell" color="#6A6F7D" size={30} />
              </View>
              <Text style={styles.setting_text}>Thông báo</Text>
            </Pressable>
            <View style={styles.bar}></View>
          </>
          
        }
        <Pressable style={styles.setting_container}>
          <View style={styles.setting_icon}>
            <FontAwesomeIcon name="plug" color="#6A6F7D" size={30} />
          </View>
          <Text style={styles.setting_text}>Cấu hình kết nối</Text>
          <View style={styles.setting_arrow}>
            {/* <FontAwesomeIcon name="chevron-right" color="#6A6F7D" size={20} /> */}
          </View>
        </Pressable>

        <Pressable style={styles.setting_container}>
          <View style={styles.setting_icon}>
            <FontAwesomeIcon name="warning" color="#6A6F7D" size={30} />
          </View>
      
          <Text style={styles.setting_text}>Báo cáo sự cố</Text>

          <View style={styles.setting_arrow}>
            {/* <FontAwesomeIcon name="chevron-right" color="#6A6F7D" size={20} /> */}
          </View>
        </Pressable>

        <Pressable style={styles.setting_container}>
          <View style={styles.setting_icon}>
            <FontAwesomeIcon name="book" color="#6A6F7D" size={30} />
          </View>
          
          <Text style={styles.setting_text}>Hướng dẫn sử dụng</Text>

          <View style={styles.setting_arrow}>
            {/* <FontAwesomeIcon name="chevron-right" color="#6A6F7D" size={20} /> */}
          </View>
        </Pressable>

        <Pressable style={styles.setting_container}>
          <View style={styles.setting_icon}>
            <FontAwesomeIcon name="info" color="#6A6F7D" size={30} />
          </View>
          <Text style={styles.setting_text}>Về chúng tôi</Text>

          <View style={styles.setting_arrow}>
            {/* <FontAwesomeIcon name="chevron-right" color="#6A6F7D" size={20} /> */}
          </View>
        </Pressable>
        
        <Pressable style={styles.setting_container}
          onPress={() => navigation.navigate('StartScreen')}
        >
          <View style={styles.setting_icon}>
            <FontAwesomeIcon name="sign-out" color="#6A6F7D" size={30} />
          </View>
          
          <Text style={styles.setting_text}>Đăng xuất</Text>
        </Pressable>

      </ScrollView>
    </View>
  );
};


const IMAGE_HEIGHT = 53.33;
const IMAGE_WIDTH = 53.33;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  subcontainer: {
    width: "100%",
    marginLeft: 20,
    marginRight: 20,
  },
  header_container: {
    alignSelf: "flex-start",
    backgroundColor: "#2DDA93",
    width: "100%",
  },
  header_text: {
    marginTop: 40,
    marginLeft: 20,
    marginBottom: 20,
    fontSize: 30,
    fontWeight: "500",
    color: "white",
  },
  user_container: {
    backgroundColor: "#e6e6eb",
    marginTop: 30,
    marginBottom: 30,
    width: "90%",
    marginLeft: 20,
    marginRight: 20,
    padding: 10, 
    display: "flex",
    flexDirection: "row",
    borderRadius: 5,
  },
  user_image: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    marginRight: 10,
  },
  user_text: {

  },
  user_name: {
    fontSize: 20,
    fontWeight: "500",
  },
  user_username: {
    marginTop: 5,
    fontSize: 12,

  },
  setting_container: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  setting_icon: {
    width: 35,
    display: "flex",
    alignItems: "center",
  },
  setting_text: {
    fontSize: 15,
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: 10,
    fontWeight: "300",
  },  
  setting_arrow: {
    position: 'absolute',
    right: 0,
    top: 13,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 7,
    backgroundColor: "#e6e6eb",
    marginTop: 5,
    width: "80%",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "500",
    letterSpacing: 0.25,
    color: "#2b2b2b",
  },
  bar: {
    backgroundColor: "#E3E3E3",
    height: 1,
    width: "100%",
    borderRadius: 70,    
  }
});

export default SettingsScreen;
