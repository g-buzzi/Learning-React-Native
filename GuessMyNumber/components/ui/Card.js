import {View, StyleSheet, Dimensions} from "react-native"
import Color from "../../constants/colors"

function Card({children}){
    return(
        <View style={styles.card}>
            {children}
        </View>
    )
}

const deviceWidth = Dimensions.get("screen").width

const styles = StyleSheet.create({
    card:{
        alignItems: "center",
        padding: 20,
        marginHorizontal: 20,
        marginTop: deviceWidth < 380? 18: 26,
        backgroundColor: Color.primary800,
        borderRadius: 10,
        elevation: 4, /* Android shadow, the other is for ios */
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 0.2,
        shadowRadius: 6,
    }
})

export default Card