import { View, ScrollView, Image, Text, StyleSheet, useWindowDimensions} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Color from '../constants/colors';

function GameFinishedScreen({onRestart, numberRounds, correctNumber}){
    const {width, height} = useWindowDimensions()

    let imageSize = width*0.6

    if (height < width){
        imageSize = height*0.4
    }

    const imageStyle ={
        height: imageSize,
        width: imageSize,
        borderRadius: imageSize*0.5,
    }


    return(
    <ScrollView style={styles.screen}>
        <View style={styles.rootContainer}>
            <Title>Game Over!</Title>
            <View style={[styles.imageContainer, imageStyle]}>
                <Image source={require("../assets/images/success.png")} style={styles.image}/>
            </View>
            <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlightText}>{numberRounds} </Text>
            rounds to guess the number <Text style={styles.highlightText}>{correctNumber}</Text>!</Text>
            <PrimaryButton onPress={onRestart}>Start New Game!</PrimaryButton>
        </View>
    </ScrollView>)
}


const styles = StyleSheet.create({
    screen:{
        flex: 1,
    },
    rootContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    imageContainer:{
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