import {Text, StyleSheet} from "react-native"
import Color from "../../constants/colors"

function Title({children}){
    return(
        <Text style={styles.title}>{children}</Text>)
}

const styles = StyleSheet.create({
    title:{
        width: "100%",
        fontFamily: "open-sans-bold",
        fontSize: 24,
        color: Color.accent500,
        backgroundColor: Color.primary700,
        textAlign: "center",
        borderWidth: 2,
        borderColor: Color.accent500,
        padding: 12,
    }
})

export default Title