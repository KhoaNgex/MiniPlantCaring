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

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isSelected, setSelection] = useState(false);

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.backBtn}
            >
                <Image 
                    source={require("../../assets/login-back.png")}
                    style={styles.center_image}
                ></Image>
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
                <TextInput
                    style={styles.input_box}
                    placeholder=""
                    placeholderTextColor=""
                    secureTextEntry={false}
                    onChangeText={(username) => setUsername(username)}
                />

                <Text style={styles.input_label}>
                    Mật khẩu
                </Text>
                <TextInput
                    style={styles.input_box}
                    placeholder=""
                    placeholderTextColor=""
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
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
                Liên hệ hỗ trợ: 0123456789
            </Text>


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
        justifyContent: 'flex-start',
        marginLeft: 20,
        marginRight: 20,
    },
    backBtn: {
        alignSelf: 'flex-start',
        marginTop: 50,
    },
    header_text: {
        alignSelf: 'flex-start',
        color: "#36455A",
        fontSize: 35,
        fontWeight: "500",
        marginTop: 24,
    },
    header_subtext: {
        color: "#495566",
        fontSize: 20,
        fontWeight: "200",
        marginTop: 18,
    },
    input_container: {
        marginTop: 20,
    },
    input_label: {
        color: "#6A6F7D",
        fontSize: 15,
        fontWeight: "200",
        marginTop: 20,
        marginBottom: 5,
    },
    input_box: {
        borderWidth: 0.5,
        borderStyle: "solid",
        borderColor: "#A7A7A7",
        padding: 10,
        fontSize: 20,
        color: "#36455A"
    },
    tools: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
    },
    loginBtn: {
        width: "85%",
        height: 50,
        marginTop: 50,
        borderRadius: 3,
        alignItems: 'center', // For loginText
        justifyContent: 'center', // For loginText
        backgroundColor: "#2DDA93",
    },
    footer_text: {
        color: "#6A6F7D",
        fontSize: 13,
        fontWeight: "200",
        marginTop: 80,
    },
    footer_line: {
        backgroundColor: "#E3E3E3",
        height: 5,
        width: "35%",
        borderRadius: 70,
        marginTop: 5,
    },
});

export default LoginScreen;