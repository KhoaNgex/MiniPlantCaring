import React from "react";
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
} from "react-native";


const StartScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../../assets/start-header.png")}
                style={styles.header_image}
            >
            </ImageBackground>

            <Text
                style={styles.header_text}
            >
                Plant Smart
            </Text>

            <Image
                source={require("../../assets/start-image.png")}
                style={styles.center_image}
            >
            </Image>

            <Text
                style={styles.center_text}
                >
                Thông minh, đơn giản và nhanh chóng!
            </Text>

            <Text
                style={styles.center_subtext}
                >
                Ứng dụng hỗ trợ chăm sóc cây trồng sử dụng IoT
            </Text>
            
            <TouchableOpacity 
                style={styles.startBtn}
                onPress={() => navigation.navigate('LoginScreen')}
            >
                <Text style={styles.startText}>Bắt đầu thôi!</Text> 
            </TouchableOpacity>

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
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    header_image: {
        height: 50,
        width: "100%",
        zIndex: 10,
    },
    header_text: {
        color: "#61D2C4",
        fontSize: 36,
        fontWeight: "700",
        marginTop: 30,
        textTransform: "uppercase"
    },
    center_image: {
        marginTop: 30,
        width: 200,
        height: 211,
    },
    center_text: {
        color: "#36455A",
        fontSize: 18,
        fontWeight: "300",
        marginTop: 20,
    },
    center_subtext: {
        color: "#6A6F7D",
        fontSize: 13,
        fontWeight: "200",
        marginTop: 20,
        fontStyle: "italic",
    },
    startBtn: {
        width: "85%",
        marginTop: 50,
        borderRadius: 3,
        textAlign: "center",
        backgroundColor: "#2DDA93",
    },
    startText: {
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
    },
    footer_line: {
        backgroundColor: "#E3E3E3",
        height: 5,
        width: "35%",
        borderRadius: 70,
        marginTop: 5,
    },
    space: {
        height: 130,
    },
});

export default StartScreen;