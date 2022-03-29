import {Text, StyleSheet, View} from "react-native";
import Color from "../../constants/colors";

function GuessLogItem({roundNumber, guess}){
    return(
        <View style={styles.item}>
            <Text style={styles.itemText}>#{roundNumber}</Text>
            <Text style={styles.itemText}>Oponent Guess: {guess}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        borderWidth: 2,
        borderColor: Color.primary800,
        borderRadius: 40,
        backgroundColor: Color.primary600,
        padding: 12, 
        elevation: 4,
        shadowColor: "black",
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 3,
        marginVertical: 4,
    },
    itemText:{
        fontSize: 16,
        fontFamily: "open-sans",
        textAlign: "center",
        color: "white",
    },
})

export default GuessLogItem