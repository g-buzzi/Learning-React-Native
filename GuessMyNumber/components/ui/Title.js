import {Text, StyleSheet, Platform} from "react-native"
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
        borderWidth: Platform.select({ios: 0, android: 2}),
        borderColor: Color.accent500,
        padding: 12,
        maxWidth: "80%",
        width: 300,
    }
})

export default Title