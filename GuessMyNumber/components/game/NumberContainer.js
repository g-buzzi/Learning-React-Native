import {Text, StyleSheet, View} from "react-native";
import Color from "../../constants/colors";

function NumberContainer({children}){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 3,
        borderColor: Color.accent500,
        borderRadius: 10,
        backgroundColor: Color.primary700,
        padding: 24, 
        margin: 24,
        alignContent: 'center',
        justifyContent: "center"
    },
    text:{
        fontSize: 40,
        fontFamily: "open-sans-bold",
        textAlign: "center",
        color: Color.accent500,
    },
})

export default NumberContainer