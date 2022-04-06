import { View, StyleSheet } from "react-native"
import Tag from "./Tag"

function capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1)
}


function MealTags({isGlutenFree, isVegan, isVegetarian, isLactoseFree}){
    return (
    <View style={styles.tagsContainer}>
        {isGlutenFree? <Tag>Gluten Free</Tag>: null}
        {isVegan? <Tag>Vegan</Tag>: null}
        {isVegetarian? <Tag>Vegetarian</Tag>: null}
        {isLactoseFree? <Tag>Lactose Free</Tag>: null}
    </View>)
}

const styles = StyleSheet.create({
    tagsContainer:{
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        marginVertical: 4,
    },
})

export default MealTags