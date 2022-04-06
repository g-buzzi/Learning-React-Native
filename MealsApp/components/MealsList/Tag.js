import { View, Text, StyleSheet } from "react-native"
import Color from "../../constants/color"

function Tag({children}){

    return(
        <View style={[styles.tag]}>
            <Text style={styles.tagTitle}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    tag:{
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 16,
        margin: 4,
        elevation: 3,
        backgroundColor: Color.accent800,
    },
    tagTitle:{
        fontSize: 14,
        fontWeight: "bold",
        color: Color.primary600,
    },
})

export default Tag