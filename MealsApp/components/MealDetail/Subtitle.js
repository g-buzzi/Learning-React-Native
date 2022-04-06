import { View, Text, StyleSheet } from "react-native"
import Color from "../../constants/color"

function Subtitle({children}){

    return(
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    subtitleContainer:{
        width: "100%",
        marginHorizontal: 6,
        marginVertical: 4,
        borderBottomColor: Color.accent700,
        borderBottomWidth: 2, 
    },
    subtitle:{
        fontSize: 20,
        fontWeight: "bold",
        color: Color.accent700,
        textAlign: "center",
        marginBottom: 4,
    },
})

export default Subtitle