import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useState } from "react";
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameFinishedScreen from './screens/GameFinishedScreen';
import Color from './constants/colors';

export default function App() {

  const [userNumber, setUserNumber] = useState(null)
  const [gameIsOver, setGameIsOver] = useState(false)
  const [numberRounds, setNumberRounds] = useState(0)

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  })

  if(!fontsLoaded){
    return <AppLoading />
  }

  function startGame(pickedNumber){
    setUserNumber(pickedNumber)
  }

  function gameOverHandler(numberRounds){
    setGameIsOver(true)
    setNumberRounds(numberRounds)
  }

  function restartGame(){
    setGameIsOver(false)
    setUserNumber(null)
    setNumberRounds(0)
  }

  return (
    <LinearGradient colors={[Color.primary700, Color.accent500]} style={styles.rootScreen}>
      <ImageBackground source={require("./assets/images/background.png")} resizeMode={"cover"} style={styles.rootScreen} imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>
            {gameIsOver? <GameFinishedScreen onRestart={restartGame} correctNumber={userNumber} numberRounds={numberRounds}/>:
            userNumber? <GameScreen correctNumber={userNumber} onGameOver={gameOverHandler}/>:
            <StartGameScreen inputNumberHandler={startGame} />}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  backgroundImage:{
    opacity: 0.15,
  }
});
