import {Pressable, Text, StyleSheet, View} from "react-native";
import Color from "../../constants/colors";

function PrimaryButton({onPress, children}){
    return(
        <View style={styles.buttonOuterContainer}>
            <Pressable onPress={onPress} style={({pressed}) => pressed? [styles.pressed, styles.buttonInnerContainer]:styles.buttonInnerContainer }>
                <Text style={styles.buttonText}>
                    {children}
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonOuterContainer:{
        margin: 4,
        borderRadius: 28,
        overflow: "hidden"
    },
    buttonInnerContainer:{
        backgroundColor: Color.primary600,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 28,
        elevation: 2,
    },
    buttonText:{
        color: "#fff",
        textAlign: "center",
    },
    pressed:{
        opacity: 0.8,
        borderWidth: 1,
        borderColor: "rgba(221, 181, 47, 0.4)",
    }
})

export default PrimaryButton