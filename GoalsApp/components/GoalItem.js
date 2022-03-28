import { StyleSheet, Text, View, Pressable} from 'react-native';

function GoalItem(props){

    return (
    <View style={styles.goalItem}>
        <Pressable android_ripple={{color: "#ccccdd"}} 
                   onPress={props.onDeleteItem.bind(this, props.id)}
                   style={({pressed}) => pressed && styles.pressedItem}>
            <Text style={styles.goalText}>{props.text}</Text>
        </Pressable>
    </View>)
}

const styles = StyleSheet.create({
    goalItem:{
      justifyContent: 'center',
      textAlign: "left",
      backgroundColor: "#5e0acc",
      borderRadius: 10,
      marginBottom: 10,
    },
    goalText:{
      color:"#fff",
      fontSize: 16,
      fontWeight: "600",
      paddingVertical: 8,
      paddingHorizontal: 10,
    },
    pressedItem:{
        opacity: 0.5,
    },
  });
  

export default GoalItem