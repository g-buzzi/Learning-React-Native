import { StyleSheet, View, Text} from 'react-native';
import { useContext } from 'react';
import MealsList from '../components/MealsList/MealsList';
import { MEALS } from '../data/dummy-data';
import { FavoritesContext } from '../store/context/favorites-context';
import Color from '../constants/color';

function FavoritesScreen() {
    const favoriteMealsCtx = useContext(FavoritesContext)
    const favoriteMeals = MEALS.filter((meal) => favoriteMealsCtx.ids.includes(meal.id))

      if(favoriteMeals.length === 0){
        return (
        <View style={styles.container}>
          <Text style={styles.message}>You have no favorites yet.</Text>
        </View>)
      }
      
      return(
      <MealsList items={favoriteMeals} />)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: "center"
  },
  message:{
    color: Color.accent800,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  }
});

export default FavoritesScreen