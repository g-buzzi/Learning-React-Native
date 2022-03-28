import {View, Image, StyleSheet} from "react-native";

function Logo(){
    return (
        <View style={styles.logoContainer}>
            <Image style={styles.logoImage} source={require("../assets/images/goal.png")}/>
        </View>)
}

const styles = StyleSheet.create({
    logoContainer:{
        marginBottom: 10,
        width: "100%",
        alignItems: 'center',
    },
    logoImage:{
      width: 100,
      height: 100,
      tintColor:'#5e0acc',
    }
});

export default Logo