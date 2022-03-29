import {View, TextInput, StyleSheet, Alert} from "react-native"
import { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Color from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen(props){

    const [enteredNumber, setEnteredNumber] = useState("")

    function numberInputHandler(number){
        setEnteredNumber(number)
    }

    function resetInput(){
        setEnteredNumber("")
    }

    function confirmInputHandler(){
        const chosenNumber = parseInt(enteredNumber)
        if(isNaN(chosenNumber) || Math.floor(chosenNumber) != chosenNumber || chosenNumber <= 0 || chosenNumber > 999){
            Alert.alert(
                "Invalid number!",
                "The entered value must be a number beetween 1 and 999!",
                [{text: "Okay", style:"destructive", onPress: resetInput}]
            )
        }
        else{
            props.inputNumberHandler(chosenNumber)
        }
    }

    return(
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText style={{color:Color.accent500}}>Enter a Number:</InstructionText>
                <TextInput 
                    keyboardType="number-pad" 
                    maxLength={3} 
                    autoCapitalize="none" 
                    autoCorrect={false} 
                    style={styles.numberInput}
                    value={enteredNumber}
                    onChangeText={numberInputHandler}/>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        marginTop: 100,
        alignItems: "center",
    },
    inputContainer:{
        alignItems: "center",
        padding: 20,
        marginHorizontal: 20,
        marginTop: 26,
        backgroundColor: Color.primary800,
        borderRadius: 10,
        elevation: 4, /* Android shadow, the other is for ios */
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 0.2,
        shadowRadius: 6,
    },
    numberInput:{
        height: 50,
        fontSize: 32,
        borderBottomColor: Color.accent500,
        borderBottomWidth: 2,
        color: Color.accent500,
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: "center",
        width: 55,
    },
    buttonsContainer:{
        flexDirection: "row",
    },
    buttonContainer:{
        flex: 1,
    },
})

export default StartGameScreen;