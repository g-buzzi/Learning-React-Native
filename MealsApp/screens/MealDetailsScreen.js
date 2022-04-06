import { View, ScrollView, Text, StyleSheet, Image } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect, useContext } from "react";
import MealDetails from "../components/MealDetail/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import Color from "../constants/color";
import { FavoritesContext } from "../store/context/favorites-context";

function MealDetailsScreen({route, navigation}){
    const favoriteMealsCtx = useContext(FavoritesContext);

    const mealId = route.params.mealId
    const meal = MEALS.find((meal) => meal.id == mealId)
    const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId)

    function favoritePressHandler(){
        if(mealIsFavorite){
            favoriteMealsCtx.removeFavorite(mealId)
        }
        else{
            favoriteMealsCtx.addFavorite(mealId)
        }
    }

    useLayoutEffect(() =>{
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon={mealIsFavorite? "star": "star-outline"} color={Color.primary600} onPress={favoritePressHandler}/>
            },
            title: "", 
        })
    }, [favoritePressHandler, navigation])

    return(
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri: meal.imageUrl}} />
                </View>
                <Text style={styles.title}>
                    {meal.title}
                </Text>
                <MealDetails complexity={meal.complexity} affordability={meal.affordability} duration={meal.duration}/>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={meal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={meal.steps} />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        padding: 16,
        alignItems: "center",
        backgroundColor: Color.primary700
    },
    image:{
          height: 200,
          resizeMode: "cover",
    },
    imageContainer:{
        width: "100%",
        overflow: "hidden",
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    title:{
        fontSize: 26,
        textAlign: "center",
        fontWeight: "bold", 
        color: Color.accent600,
        marginTop: 10,
    },
    listContainer:{
        width: "90%",
        alignItems: "center",
    }
})

export default MealDetailsScreen