import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, FlatList, Image} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import Logo from './components/Logo';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [id, setId] = useState(0)


  function addGoalHandler(enteredGoalText){
    setCourseGoals(currentCourseGoals => ([...currentCourseGoals, {text: enteredGoalText, key: id},]))
    setId(currentId => {return (currentId + 1)})
  }

  function deleteGoal(key){
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((item) => item.key !== key)
    })
  }

  return (
    <View style={styles.appContainer}>
      <StatusBar style="auto" />
      <Logo />
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} 
        renderItem={(itemData) => 
              {
                return <GoalItem text={itemData.item.text} id={itemData.item.key} onDeleteItem={deleteGoal}/>}} 
        keyExtractor={(item, index) => {
          return item.key
        }}  />
      </View>
      <GoalInput addGoalHandler={addGoalHandler}/>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer:{
    flex: 6,
    justifyContent: "flex-start",
    width: "95%",
    padding: 10,
    borderWidth: 2,
    borderColor: "rgba(94, 10, 204, 0.8)",
    borderRadius: 10,
  },
  logo:{
    width: 100,
    height: 100,
    tintColor:'#5e0acc',
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: "rgba(94, 10, 204, 0.4)",
  }
});
