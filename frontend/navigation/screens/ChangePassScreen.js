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
    Dimensions,
    Modal,
} from "react-native";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';


const ChangePassScreen = ({navigation}) => {

    const [isNotFill, setIsNotFill] = useState(false);
    const [eyeStatus, setEyeStatus] = useState(true);
    const [password, setPassword] = useState('');
    const [cpass, setCpass] = useState('');
    const [success, setSuccess] = useState(false);
    const [isNotMatch, setIsNotMatch] = useState(false);


    const handleCheckingFill = () => {
        if (password === "") {
            setIsNotFill(true)
            const timeoutId = setTimeout(() => {
                setIsNotFill(false);
            }, 1000)
        }
        else if (password != cpass) {
            setIsNotMatch(true)
            const timeoutId = setTimeout(() => {
                setIsNotMatch(false);
            }, 1000)
        }
        else {
            setSuccess(true)
            const timeoutId = setTimeout(() => {
                setSuccess(false);
                navigation.navigate("LoginScreen")
            }, 1000);
        }
    }

    const handleEyeStatus = () => {
        setEyeStatus(!eyeStatus)
    }

    const handlePasswordChange = (password) => {
        setPassword(password)
    }

    const handleCpassChange = (cpass) => {
        setCpass(cpass)
    }

    const Modal_NotFill = () => {

        return (
            <View>
                <TouchableOpacity 
                    style={modal_styles.modal_container}
                    onPress={() => {setIsNotFill(false)}}
                >
                    <View style={modal_styles.modal_box}>
                        <Text style={modal_styles.modal_text}>Bạn chưa điền mật khẩu mới</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    const Modal_NotMatch = () => {

        return (
            <View>
                <TouchableOpacity 
                    style={modal_styles.modal_container}
                    onPress={() => {setIsNotMatch(false)}}
                >
                    <View style={modal_styles.modal_box}>
                        <Text style={modal_styles.modal_text}>Xác nhận không khớp</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    const Modal_Success = () => {

        return (
            <View>
                <TouchableOpacity 
                    style={modal_styles.modal_container}
                    onPress={() => {setSuccess(false)}}
                >
                    <View style={modal_styles.modal_box_success}>
                        <Text style={modal_styles.modal_text}>Đổi mật khẩu thành công</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.backBtn}
                onPress={() => navigation.navigate("ForgotPassScreen")}
            >
                <FontAwesomeIcon name="chevron-left" color="#6A6F7D" size={30} />
            </TouchableOpacity>

            <Text style={styles.header_text}>Đổi mật khẩu mới</Text>

            <Text style={styles.header_subtext}>Đừng quên nữa nhé!</Text>

            <View style={styles.input_container}>

                <Text style={styles.input_label}>Mật khẩu mới</Text>

                <View style={styles.action}>
                    <TextInput
                        style={!eyeStatus ? [styles.input_box, styles.borderColorImp] : [styles.input_box]}
                        placeholder=""
                        placeholderTextColor=""
                        secureTextEntry={eyeStatus}
                        onChangeText={(password) => handlePasswordChange(password)}
                        value={password}
                    />
                    
                    <TouchableOpacity 
                        style={styles.visibility}
                        onPress={() => handleEyeStatus()}
                    >
                        <FontAwesomeIcon name={eyeStatus ? "eye-slash" : "eye"} color={eyeStatus ? "#6A6F7D" : "#2DDA93"} size={30} />
                    </TouchableOpacity>
                </View>

                <Text style={styles.input_label}>Xác nhận mật khẩu mới</Text>
                <View style={styles.action}>
                    <TextInput
                        style={password == cpass && cpass != "" ? [styles.input_box, styles.borderColorImp] : [styles.input_box]}
                        placeholder=""
                        placeholderTextColor=""
                        secureTextEntry={true}
                        autoCapitalize="none"
                        onChangeText={(cpass) => handleCpassChange(cpass)}
                        value={cpass}
                    />
                    
                    <View 
                        style={styles.visibility}
                    >
                        <FontAwesomeIcon name={password == cpass && cpass != "" ? "check" : "remove"} color={password == cpass && cpass != "" ? "#2DDA93" : "gray"} size={30} />
                    </View>
                </View>

                
                {/* <View style={styles.tools}>
                    <View style={styles.checkbox_container}>
                        <Text style={styles.checkbox_label}>Xác nhận lấy lại mật khẩu qua số điện thoại</Text>
                    </View>
                </View> */}
            </View>

            <TouchableOpacity 
                style={styles.loginBtn}
                onPress={() => handleCheckingFill()}
            >
                <Text style={styles.loginText}>Đổi mật khẩu</Text> 
            </TouchableOpacity>

            <Text
                style={styles.contact_text}
                >Liên hệ hỗ trợ: <Text style={{color: "#2DDA93", fontWeight: "500"}}>0123456789</Text></Text>
            <View style={styles.space}></View>

            <Text
                style={styles.footer_text}
                >Được phát triển bởi LCKK Team</Text>

            <View
                style={styles.footer_line}
                >
            </View>

            <Modal
                transparent={true}
                animationType="fade"
                visible={isNotFill}
                // onRequestClose={() => handleModalWrongPass(false)}
            >
                <Modal_NotFill />
            </Modal>

            <Modal
                transparent={true}
                animationType="fade"
                visible={success}
                // onRequestClose={() => handleModalWrongPass(false)}
            >
                <Modal_Success />
            </Modal>

            <Modal
                transparent={true}
                animationType="fade"
                visible={isNotMatch}
                // onRequestClose={() => handleModalWrongPass(false)}
            >
                <Modal_NotMatch />
            </Modal>
        </View>

        
    );
};


const MODAL_HEIGHT = 40;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
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
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: "auto",
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
        width: "100%",
    },
    loginBtn: {
        width: "100%",
        height: 50,
        marginTop: 30,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#2DDA93",
    },
    loginText: {
        color: "white",
        fontSize: 20,
        fontWeight: "500",
    },
    contact_text: {
        color: "#6A6F7D",
        fontSize: 13,
        fontWeight: "200",
        marginTop: 10,
    },
    footer_text: {
        color: "#6A6F7D",
        fontSize: 13,
        fontWeight: "200",
        position: 'absolute',
        bottom: 15,
    },
    footer_line: {
        backgroundColor: "#E3E3E3",
        height: 5,
        width: 150,
        borderRadius: 70,
        position: 'absolute',
        bottom: 5,
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
    forgotpass_label: {
        color: "#4ca1f0",
        fontWeight: "700",
    },
    checkbox: {
        color: "#61D2C4",
    },
    space: {
        height: 170,
        width: "100%",
    },
    action: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
    },
    visibility: {
        position: "absolute",
        top: 0,
        right: 0,
        marginLeft: 5,
    },
    borderColorImp: {
        borderBottomColor: "#2DDA93",
    },
});

const modal_styles = StyleSheet.create({
    modal_container: {
        flex: 1,
        alignItems: "center",
    },
    modal_box: {
        height: MODAL_HEIGHT,
        backgroundColor: "#f25c43",
        borderRadius: 10,
        marginTop: 35,
        width: "85%",
        justifyContent: "center",
        alignItems: "center",
    },
    modal_box_success: {
        height: MODAL_HEIGHT,
        backgroundColor: "#2DDA93",
        borderRadius: 10,
        marginTop: 35,
        width: "85%",
        justifyContent: "center",
        alignItems: "center",
    },
    modal_text: {
        fontSize: 16,
        color: "white",
        fontWeight: "700",
    },
});

export default ChangePassScreen;