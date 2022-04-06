import { View, Text, StyleSheet } from "react-native"
import Icon from "react-native-vector-icons/Entypo"

function capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1)
}


function MealDetails({duration, complexity, affordability, color}){
    return (
    <View style={styles.detailsContainer}>
        <Text style={[styles.detailsText, {color: color}]}>{duration}min</Text>
        <Icon name="dot-single" size={20} color={color} />
        <Text style={[styles.detailsText, {color: color}]}>{capitalize(complexity)}</Text>
        <Icon name="dot-single" size={20} color={color} />
        <Text style={[styles.detailsText, {color: color}]}>{capitalize(affordability)}</Text>
    </View>)
}

const styles = StyleSheet.create({
    detailsContainer:{
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 4,
    },
    detailsText:{
        fontSize: 14,
        fontWeight: "bold",
    },
})

export default MealDetails