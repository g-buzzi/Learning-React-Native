import { StyleSheet, FlatList, View } from 'react-native';
import CategoryCard from '../components/CategoryCard';
import {CATEGORIES} from '../data/dummy-data';

function CategoriesScreen({navigation}) {


  function renderCategoryItem(itemData){
    function pressHandler(){
      navigation.navigate("MealsOverview", {categoryId: itemData.item.id})
    }

      return (<CategoryCard title={itemData.item.title} color={itemData.item.color} onPress={pressHandler}/>)
  }

  return (
    <View style={styles.container}>
      <FlatList data={CATEGORIES} renderItem={renderCategoryItem} keyExtractor={(item) => item.id} numColumns={2}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default CategoriesScreen