import { useNavigation } from "@react-navigation/native"
import { View, FlatList, StyleSheet } from "react-native"
import MealItem from "./MealItem"

function MealsList({items}){

    const navigation = useNavigation()

    function renderMealItem(itemData){
        const meal = itemData.item
        function pressHandler(){
          navigation.navigate("MealDetails", {mealId: meal.id})
        }
          return <MealItem title={meal.title} imgURL={meal.imageUrl} duration={meal.duration} 
                            affordability={meal.affordability} complexity={meal.complexity}
                            isGlutenFree={meal.isGlutenFree} isVegan={meal.isVegan} isVegetarian={meal.isVegetarian}
                            isLactoseFree={meal.isLactoseFree}  onPress={pressHandler}/>
      }

    return( 
    <View style={styles.container}>
        <FlatList data={items} keyExtractor={(item) => item.id}  renderItem={renderMealItem} />
    </View>)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 16,
    },
  });

export default MealsList