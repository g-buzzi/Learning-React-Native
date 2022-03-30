import {FlatList, Text, View, StyleSheet, Alert, useWindowDimensions } from "react-native"
import { useState, useEffect } from "react";
import {Ionicons} from "@expo/vector-icons"
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import GuessLogItem from "../components/game/GuessLogItem";
import Color from "../constants/colors";

function guess(min, max){
    let guess = Math.ceil((max - min)/2) + min
    return guess
}

let min = 1;
let max = 999;

function GameScreen({correctNumber, onGameOver}){
    const [currentGuess, setCurrentGuess] = useState(guess(1, 999))
    const [guessRounds, setGuessRounds] = useState([currentGuess])
    const {width, height} = useWindowDimensions()

    useEffect(() =>{
        if(currentGuess === correctNumber){
            onGameOver(guessRounds.length)
        }
    }, [currentGuess, correctNumber, onGameOver])

    useEffect(() => {
        min = 1;
        max = 999;
    }, [])

    function nextGuessHandler(higher){
        if (higher && correctNumber < currentGuess || !higher && correctNumber > currentGuess){
            Alert.alert("You lied!")
        }
        else{ 
            if(higher){
                min = currentGuess
            }
            else{
                max = currentGuess - 1
            }
            setCurrentGuess(guess(min, max))
            setGuessRounds(currentRounds => [guess(min, max), ...currentRounds])
        }
    }

    let content = (<>
                <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText>Higher or Lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={() => {nextGuessHandler(false)}}>
                            <Ionicons name="md-remove" size={24} color="white"/>
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={() => {nextGuessHandler(true)}}>
                            <Ionicons name="md-add" size={24} color="white"/>
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
    </>)

    if (width > 500){
        content = (<>
            <View style={styles.contentContainerWide}>
                <PrimaryButton onPress={() => {nextGuessHandler(false)}}>
                    <Ionicons name="md-remove" size={24} color="white"/>
                </PrimaryButton>
                <NumberContainer>{currentGuess}</NumberContainer>
                <PrimaryButton onPress={() => {nextGuessHandler(true)}}>
                    <Ionicons name="md-add" size={24} color="white"/>
                </PrimaryButton>
            </View>
        </>)
    }

    return(
        <View style={styles.screen}>
            <Title>Oponent's Guess</Title>
                {content}
            <View style={styles.listContainer}>
                <Text style={styles.listTitle}>Guesses</Text>
                <FlatList data={guessRounds} keyExtractor={item => item} renderItem={(itemData) => <GuessLogItem guess={itemData.item} roundNumber={guessRounds.length - itemData.index}/>}/>
            </View>
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        width: "100%",
        padding: 24,
        marginTop: 20,
        alignItems: "center",
    },
    buttonsDescriptionText:{
        color: "white",
        fontSize: 16,
    },
    buttonsContainer:{
        flexDirection: "row",
        marginTop: 10,
    },
    buttonContainer:{
        flex: 1,
    },
    contentContainerWide:{
        flexDirection: "row",
        alignItems: "center",
    },
    listContainer:{
        flex: 1,
        padding: 16,
        borderRadius: 10,
        borderWidth: 4,
        borderColor: Color.primary700,
        marginTop: 0,
    },
    listTitle:{
        textAlign: "center",
        fontFamily: "open-sans-bold",
        fontSize: 24,
        color: Color.primary700,
        marginBottom: 10,
    }
})
