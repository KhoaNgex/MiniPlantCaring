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


const ValidationScreen = ({navigation}) => {

    const [otp, setOtp] = useState('');
    const [isNotFill, setIsNotFill] = useState(false);

    const handleOtpChange = (otp) => {
        setOtp(otp)
    }

    const handleCheckingFill = () => {
        if (otp === "") {
            setIsNotFill(true)
            const timeoutId = setTimeout(() => {
                setIsNotFill(false);
            }, 1000)
        }
        else {
            navigation.navigate("ChangePassScreen")
        }
    }

    const Modal_NotFill = () => {

        return (
            <View>
                <TouchableOpacity 
                    style={modal_styles.modal_container}
                    onPress={() => {setIsNotFill(false)}}
                >
                    <View style={modal_styles.modal_box}>
                        <Text style={modal_styles.modal_text}>Bạn chưa điền mã xác nhận</Text>
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

            <Text style={styles.header_text}>Quên mật khẩu?</Text>

            <Text style={styles.header_subtext}>Nhanh chóng, đơn giản</Text>

            <View style={styles.input_container}>
                <Text style={styles.input_label}>Mã xác nhận</Text>
                <View style={styles.action}>
                    <TextInput
                        style={otp != "" ? [styles.input_box, styles.borderColorImp] : [styles.input_box]}
                        placeholder=""
                        placeholderTextColor=""
                        secureTextEntry={false}
                        autoCapitalize="none"
                        onChangeText={(otp) => handleOtpChange(otp)}
                        value={otp}
                    />
                </View>
                <Text style={styles.input_note}>Nhập mã xác nhận đã được gửi tới số điện thoại</Text>

                <View style={styles.resend_container}>
                    <Text style={styles.resend_label}>Nếu chưa nhận được mã</Text>
                    <TouchableOpacity style={styles.resendBtn}>
                        <Text style={styles.resend_text}>Gửi lại mã</Text> 
                    </TouchableOpacity>
                </View>

                
                
            </View>

            <TouchableOpacity 
                style={styles.loginBtn}
                onPress={() => handleCheckingFill()}
            >
                <Text style={styles.loginText}>Xác nhận</Text> 
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
    input_note: {
        marginTop: 3,
        color: "#6A6F7D",
        fontStyle: "italic",
        fontSize: 12,
    },
    resend_container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 30,
        width: "100%",
    },
    resend_label: {
        color: "#4ca1f0",
        fontWeight: "700",
    },
    resendBtn: {
        borderRadius: 3,
        textAlign: "center",
        backgroundColor: "#4ca1f0",
        display: "flex",
        padding: 15,
        width: "35%",
    },
    resend_text: {
        color: "white",
        fontSize: 14,
        fontWeight: "700",
        justifyContent: "center",
        alignSelf: "center",
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
    modal_text: {
        fontSize: 16,
        color: "white",
        fontWeight: "700",
    },
});

export default ValidationScreen;