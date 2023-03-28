import React, { useState } from "react";
import { 
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    ImageBackground,
    KeyboardAvoidingView,
    CheckBox,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = ({navigation}) => {

    const [data, setData] = useState();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [eyeStatus, setEyeStatus] = useState(true);
    const [isSelected, setSelection] = useState(false);

    const handleUsernameChange = (username) => {
        setUsername(username)
    }

    const handlePasswordChange = (password) => {
        setPassword(password)
    }

    const handleEyeStatus = () => {
        setEyeStatus(!eyeStatus)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.backBtn}
                onPress={() => alert('ABC')}
            >
                <ImageBackground 
                    source={require("../../assets/login-back.png")}
                    style={styles.backBtn_image}
                ></ImageBackground>
            </TouchableOpacity>

            <Text style={styles.header_text}>
                Xin chào
            </Text>

            <Text style={styles.header_subtext}>
                Đăng nhập để chăm sóc cây nào!
            </Text>

            <View style={styles.input_container}>
                <Text style={styles.input_label}>
                    Tên đăng nhập
                </Text>
                    {/* <TextInput
                        style={username != "" ? [styles.input_box, styles.borderColorImp] : [styles.input_box]}
                        placeholder=""
                        placeholderTextColor=""
                        secureTextEntry={false}
                        autoCapitalize="none"
                        onChangeText={(username) => handleUsernameChange(username)}
                    /> */}
                <View style={styles.action}>
                    <TextInput
                        style={username != "" ? [styles.input_box, styles.borderColorImp] : [styles.input_box]}
                        placeholder=""
                        placeholderTextColor=""
                        secureTextEntry={false}
                        autoCapitalize="none"
                        onChangeText={(username) => handleUsernameChange(username)}
                    />
                    
                    <View 
                        style={styles.visibility}
                    >
                        <FontAwesomeIcon name={username != "" ? "check" : ""} color={username != "" ? "#2DDA93" : "white"} size={30} />
                    </View>
                </View>

                <Text style={styles.input_label}>
                    Mật khẩu
                </Text>

                <View style={styles.action}>
                    <TextInput
                        style={!eyeStatus ? [styles.input_box, styles.borderColorImp] : [styles.input_box]}
                        placeholder=""
                        placeholderTextColor=""
                        secureTextEntry={eyeStatus}
                        onChangeText={(password) => handlePasswordChange(password)}
                    />
                    
                    <TouchableOpacity 
                        style={styles.visibility}
                        onPress={() => handleEyeStatus()}
                    >
                        <FontAwesomeIcon name={eyeStatus ? "eye-slash" : "eye"} color={eyeStatus ? "#6A6F7D" : "#2DDA93"} size={30} />
                    </TouchableOpacity>
                </View>
                


                {/* npm install @react-native-community/checkbox --save */}
                <View style={styles.tools}>
                    <View style={styles.checkbox_container}>
                        <CheckBox
                            style={styles.checkbox}
                            value={isSelected}
                            onValueChange={setSelection}
                        />
                        <Text style={styles.checkbox_label}> Lưu mật khẩu </Text>
                    </View>
                    <Text style={styles.forgotpass}>
                        Quên mật khẩu?
                    </Text>
                </View>
            </View>

            <TouchableOpacity 
                style={styles.loginBtn}
            >
                <Text style={styles.loginText}>Đăng nhập</Text> 
            </TouchableOpacity>

            <Text
                style={styles.footer_text}
                >
                Liên hệ hỗ trợ: <Text style={{color: "#2DDA93", fontWeight: 500}}> 0123456789 </Text>
            </Text>

            <View style={styles.space}> </View>

            <Text
                style={styles.footer_text}
                >
                Được phát triển bởi LCKK Team
            </Text>

            <View
                style={styles.footer_line}
                >
            </View>

        </View>

        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
    },
    backBtn: {
        alignSelf: 'flex-start',
        height: 30,
        width: "100%",
        marginTop: 40,
    },
    backBtn_image: {
        height: 30,
        width: 30,
    },
    header_text: {
        alignSelf: 'flex-start',
        color: "#61D2C4",
        fontSize: 35,
        fontWeight: "500",
        marginTop: 24,
    },
    header_subtext: {
        alignSelf: 'flex-start',
        color: "#495566",
        fontSize: 20,
        fontWeight: "200",
        marginTop: 18,
    },
    input_container: {
        alignSelf: 'flex-start',
        width: "100%",
        marginTop: 20,
    },
    input_label: {
        color: "#6A6F7D",
        fontSize: 15,
        fontWeight: "200",
        marginTop: 20,
    },
    input_box: {
        borderWidth: 0.5,
        borderStyle: "solid",
        borderTopColor: "transparent",
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "#A7A7A7",
        paddingLeft: 5,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 13,
        color: "#36455A",
        width: "100%",
    },
    tools: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
    },
    loginBtn: {
        width: "100%",
        height: 50,
        marginTop: 30,
        borderRadius: 3,
        alignItems: 'center', // For loginText
        justifyContent: 'center', // For loginText
        backgroundColor: "#2DDA93",
    },
    loginText: {
        color: "white",
        fontSize: 20,
        fontWeight: "500",
        paddingTop: 20,
        paddingBottom: 20,
    },
    footer_text: {
        color: "#6A6F7D",
        fontSize: 13,
        fontWeight: "200",
        marginTop: 5,
    },
    footer_line: {
        backgroundColor: "#E3E3E3",
        height: 5,
        width: "35%",
        borderRadius: 70,
        marginTop: 5,
    },
    checkbox_container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    checkbox_label: {
        color: "#495566",
        marginLeft: 5,
    },
    forgotpass: {
        color: "#4ca1f0",
        fontWeight: 700,
    },
    checkbox: {
        color: "#61D2C4",
    },
    space: {
        height: 180,
        width: "100%",
    },
    action: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%"
    },
    visibility: {
        display: "flex",
        justifyContent: "center",
        marginLeft: 5,
    },
    borderColorImp: {
        borderBottomColor: "#2DDA93",
    },
});

export default LoginScreen;