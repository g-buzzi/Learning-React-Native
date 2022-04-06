import { useLayoutEffect } from 'react';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealsList from '../components/MealsList/MealsList';

function MealsOverviewScreen({route, navigation}) {
    const categoryId = route.params.categoryId

    useLayoutEffect(() => {
      const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;
      navigation.setOptions({title: categoryTitle})
    }, [categoryId, navigation])

    const displayedMeals = MEALS.filter((meal) => {return meal.categoryIds.includes(categoryId)})

  return (
    <MealsList items={displayedMeals} />
  );
}



export default MealsOverviewScreen