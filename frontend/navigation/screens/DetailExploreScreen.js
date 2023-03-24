import React, {useState}  from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    Modal
} from "react-native";

import { plant_detail } from "./ExoloreListScreen";
import detailBackground from "../../assets/detailexplore-bg.png";
import closeIcon from "../../assets/close-icon.png";



const DetailExploreScreen = () => {
    const [ showModal, setshowModal] = useState(false);

    const changeModalVisible = (bool) => {
        setshowModal(bool);
    }

    const DetailModal = () => {
        return (
            <View style={[styles.modal, styles.shadow]}>
                <TouchableOpacity onPress = {() => changeModalVisible(false)} >
                    <Image style={styles.closeIcon} source={closeIcon} />
                </TouchableOpacity>
                <View style={styles.detailInforHeader}>
                    <Image style={styles.bigPlantImage} source={{uri: plant_detail.image1}}/>
                    <View style={styles.smallPlantImageList}>
                        <Image style={styles.smallPlantImage} source={{uri: plant_detail.image2}}/>
                        <Image style={styles.smallPlantImage} source={{uri: plant_detail.mainImage}}/>
                    </View>
                    <View style={[styles.smallPlantImageList, {top: 85, flexDirection:"column", left: 110}]}>
                        <Text style={styles.detailName}>{plant_detail.plantName}</Text>
                        <Text style={styles.detailScienceName}>{plant_detail.plantScienceName}</Text>
                    </View>
                </View>
                <Text style={{marginLeft: "8%", marginTop: 20, fontSize: 17, fontWeight: "bold"}}>
                    Chăm sóc
                </Text>
                <View style={styles.caringDescContainer}>
                    <Text  style={styles.caringDesc}>
                        <Text style={{fontWeight:"bold"}}>Về nhiệt độ: </Text> 
                        <Text>{plant_detail.descTemp}</Text>
                    </Text>
                
                    <Text  style={styles.caringDesc}>
                        <Text style={{fontWeight:"bold"}}>Về ánh sáng: </Text> 
                        <Text>{plant_detail.descLight}</Text>
                    </Text>
                
                    <Text  style={styles.caringDesc}>
                        <Text style={{fontWeight:"bold"}}>Về tưới nước: </Text> 
                        <Text>{plant_detail.descWatering}</Text>
                    </Text>
                </View>
            </View>
        );
    }

    return (
        <ScrollView style={styles.detailContainer}>
            <View>
                <Image style={styles.detailBg} source={detailBackground}/>
                <View style={[styles.mainImgContainer, styles.shadow]}>
                    <Image style={styles.mainImg} source={{uri: plant_detail.mainImage}} />
                </View>
                <View style={styles.proposalInfor}>
                    <Text style={styles.proposalCondName}>Nhiệt độ</Text>
                    <Text style={styles.proposalCond}>{`${plant_detail.minIdealTemp} - ${plant_detail.maxIdealTemp}°C`}</Text>
                    <Text style={styles.proposalCondName}>Ánh sáng</Text>
                    <Text style={styles.proposalCond}>{`${plant_detail.light}`}</Text>
                    <Text style={styles.proposalCondName}>Tưới nước</Text>
                    <Text style={styles.proposalCond}>{`${plant_detail.watering}`}</Text>
                    <TouchableOpacity
                        style= {styles.detailBtn}
                        onPress = {() => changeModalVisible(true)} 
                    >
                        <Text style={styles.detailBtnText}>Chi tiết</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.plantDescContainer}>
                <Text style={styles.plantName}>{plant_detail.plantName}</Text>
                <Text style={styles.plantScienceName}>{plant_detail.plantScienceName}</Text>
                <Text style={styles.genaralDisc}>{plant_detail.description}</Text>
            </View>
            <Modal
                transparent={true}
                animationType={"fade"}
                visible={showModal}
                onRequestClose = {() => changeModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <DetailModal />
                </View>
            </Modal>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    detailContainer: {
        // width: "100%",
        // height: "100%",
        backgroundColor: "#fff"
    },
    detailBg: {
        width: 168,
        height: 331,
        marginTop: 20
    },
    mainImgContainer: {
        position: "absolute",
        left: 45,
        top: 71,
        borderRadius: 20,
    },
    mainImg: {
        width: 168,
        height: 230,
        borderRadius: 20,
    },
    proposalInfor: {
        position: 'absolute',
        left: 250,
        top: 30
    },
    proposalCondName: {
        color: "#A1A8B9",
        fontSize: 13,
    },
    proposalCond: {
        color: "#000",
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 5,
        marginBottom: 30,
        maxWidth: 150
    },
    detailBtn: {
        backgroundColor: "#000",
        alignItems: "center",
        padding: 8,
        width: 100,
    },
    detailBtnText: {
        color: "#fff"
    },
    shadow: {
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: {width: 0, height: 2}
    },
    plantDescContainer: {
        marginTop: 20,
        marginLeft: 15,
        marginRight: 15,
    },
    plantName: {
        fontSize: 20,
        fontWeight: "bold"
    },
    plantScienceName: {
        color: "#A1A8B9",
        fontSize: 14,
        marginTop: 3,
    },
    genaralDisc: {
        marginTop: 10,
        marginBottom: 20,
        textAlign: "justify",
        lineHeight: 19
    },
    modalContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.5)"
    },
    modal: {
        backgroundColor: "#fff",
        width: "90%",
        minHeight: "70%",
        borderRadius: 10
    },
    closeIcon: {
        width: 25, 
        height: 25,
        position: "absolute",
        right: 0,
        top: 10,
        right: 10
    },
    detailInforHeader: {
        marginTop: 40,
        marginLeft: "8%",
        marginRight: "8%",
    },
    bigPlantImage: {
        width: 110,
        height: 125,
        borderRadius: 10
    },
    smallPlantImageList: {
        flexDirection: "row",
        position: "absolute",
        left: 110
    },
    smallPlantImage: {
        width: 70,
        height: 70,
        borderRadius: 10,
        marginLeft: 10
    },
    detailName: {
        marginLeft: 10,
        fontWeight: "bold",
        fontSize: 13
    },
    detailScienceName: {
        marginLeft: 10,
        color: "#A1A8B9",
        fontSize: 10,
        maxWidth: 170
    },
    caringDescContainer: {
        marginLeft: "7%",
        marginRight: "7%",
        marginTop: 10,
        marginBottom: 40,
    },
    caringDesc: {
        textAlign: "justify",
        marginTop: 10,
        lineHeight: 18,
    }
})

export default DetailExploreScreen;