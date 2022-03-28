import { useState } from "react";
import {View, TextInput, Button, StyleSheet, Modal} from "react-native";
import CustomButton from "./CustomButton";

function GoalInput(props){
    const [enteredGoal, setEnteredGoal] = useState("")
    const [modalVisibility, setModalVisibility] = useState(false)

    function goalInputHandler(enteredText){
        setEnteredGoal(enteredText)
    }

    function addGoalHandler(){
        props.addGoalHandler(enteredGoal);
        setEnteredGoal("")
        setModalVisibility(false)
    }

    return (
    <View style={styles.inputContainer}>
        <CustomButton title="Add New Goal" color="#5e0acc" onPress={()=>{setModalVisibility(true)}} />
        <Modal visible={modalVisibility} animationType="slide">
            <View style={styles.modal}>
                <TextInput placeholder='Your goal!' style={styles.textInput} value={enteredGoal} onChangeText={goalInputHandler}/>
                <View style={styles.buttonsContainer}>
                    <CustomButton title='Add Goal' color="#5e0acc" onPress={addGoalHandler}/>
                    <CustomButton title='Cancel' color="#ec0b00" onPress={() => {setModalVisibility(false); setEnteredGoal("")}}/>
                </View>
            </View>
        </Modal>
    </View>)
}

const styles = StyleSheet.create({
    inputContainer:{
        flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      },
    textInput:{
        width: "70%",
        borderWidth: 2,
        borderColor: "#5e0acc",
        marginBottom: 10,
        borderRadius: 5,
        paddingVertical: 4,
        paddingHorizontal: 8,
        color:"#5e0acc",
      },
    modal:{
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 24,
        borderWidth: 2,
        borderColor: "rgba(94, 10, 204, 0.4)"
    },
    buttonsContainer:{
        flexDirection: "row",
        width: "45%",
        justifyContent: "space-around",
    },
    })

export default GoalInput