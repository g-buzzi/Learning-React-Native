import { View, Pressable, Image, Text, StyleSheet, Platform } from "react-native"
import Color from "../../constants/color"
import MealDetails from "../MealDetail/MealDetails"
import MealTags from "./MealTags"


function MealItem({title, imgURL, duration, affordability, complexity, isGlutenFree, isLactoseFree, isVegan, isVegetarian, onPress}){


    return(
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color: "#ccc"}} onPress={onPress} style={({pressed}) => [styles.button, Platform.OS === "ios" && pressed? styles.buttonPressed: null]}>
                <View style={styles.innerContainer}>
                    <View style={styles.imageContainer}>
                        <Image source={{uri: imgURL}} style={styles.image}/>
                    </View>
                    <View style={styles.infoContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{title}</Text>
                        </View>
                        <MealDetails color={Color.primary600} duration={duration} affordability={affordability} complexity={complexity}/>
                        <MealTags isGlutenFree={isGlutenFree} isLactoseFree={isLactoseFree} isVegan={isVegan} isVegetarian={isVegetarian}/>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem:{
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 20,
        backgroundColor: Color.accent600,
        borderRadius: 16,
        overflow: "hidden",
        elevation: 5,
    },
    button:{
        overflow: "hidden",
        flex: 1,
    },
    buttonPressed:{
        opacity: 0.6,
    },
    innerContainer:{
        flex: 1,
    },
    imageContainer:{
        flex: 1,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        overflow: "hidden",
        borderTopWidth: 2,
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderColor: Color.accent700,
    },
    image:{
        height: 200,
        resizeMode: "cover",
    },
    infoContainer:{
        flex: 1,
        padding: 10,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        borderBottomWidth: 2,
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderColor: Color.accent700,
    },
    title:{
        fontSize: 24,
        fontWeight: "bold",
        color: Color.primary600,
        textAlign: "center",
        marginBottom: 4,
    },
    mainInfoContainer:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 8,
    },
    tagsContainer:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
    }
})

export default MealItem