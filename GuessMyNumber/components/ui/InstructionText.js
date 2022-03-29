import {Text, StyleSheet} from "react-native"
import Color from "../../constants/colors"

function InstructionText({children, style}){
    return(
        <Text style={[styles.instructionText, style]}>{children}</Text>)
}

const styles = StyleSheet.create({
    instructionText:{
        fontSize: 16,
        color: "white",
        fontFamily: "open-sans",
    },
})

export default InstructionText