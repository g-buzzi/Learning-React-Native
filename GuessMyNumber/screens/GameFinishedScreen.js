import { View, Image, Text, StyleSheet} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Color from '../constants/colors';

function GameFinishedScreen({onRestart, numberRounds, correctNumber}){
    return(
    <View style={styles.rootContainer}>
        <Title>Game Over!</Title>
        <View style={styles.imageContainer}>
            <Image source={require("../assets/images/success.png")} style={styles.image}/>
        </View>
        <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlightText}>{numberRounds} </Text>
         rounds to guess the number <Text style={styles.highlightText}>{correctNumber}</Text>!</Text>
        <PrimaryButton onPress={onRestart}>Start New Game!</PrimaryButton>
    </View>)
}

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    imageContainer:{
        borderRadius: 150,
        width: 300,
        height: 300,
        borderWidth: 3,
        borderColor: Color.primary800,
        margin: 36,
        overflow: "hidden",
    },
    image:{
        width: "100%",
        height: "100%",
    },
    summaryText:{
        fontSize: 24,
        fontFamily: "open-sans",
        textAlign: "center",
        marginBottom: 24,
    },
    highlightText:{
        fontFamily: "open-sans-bold",
        color: Color.primary500,
    }
})

export default GameFinishedScreen