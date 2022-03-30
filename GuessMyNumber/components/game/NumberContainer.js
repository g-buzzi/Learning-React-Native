import {Text, StyleSheet, View, Dimensions} from "react-native";
import Color from "../../constants/colors";

function NumberContainer({children}){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}

const deviceWidth = Dimensions.get("window").width

const styles = StyleSheet.create({
    container:{
        borderWidth: 3,
        borderColor: Color.accent500,
        borderRadius: 10,
        backgroundColor: Color.primary700,
        padding: deviceWidth < 380? 12: 24, 
        margin: deviceWidth < 380? 12: 24,
        alignContent: 'center',
        justifyContent: "center"
    },
    text:{
        fontSize: deviceWidth < 380? 28: 40,
        fontFamily: "open-sans-bold",
        textAlign: "center",
        color: Color.accent500,
    },
})

export default NumberContainer