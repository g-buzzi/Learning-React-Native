import { StyleSheet, Text, View, Pressable, Platform } from 'react-native';
import Color from '../constants/color';

function CategoryCard({title, color, onPress}){
    return(
        <View style={[{backgroundColor: color},styles.card]}>
            <Pressable android_ripple={{color: "#ddd"}} 
                       style={({pressed}) => [styles.button, Platform.OS === "ios" && pressed? styles.buttonPressed: null]}
                       onPress={onPress}>
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: {height:2, width: 0},
        shadowOpacity: 0.25,
        shadowRadius: 8,
        overflow: Platform.OS === "android"? "hidden": "visible",
        backgroundColor: Color.accent500,
        borderWidth: 2,
        borderColor: Color.accent600
    },
    button:{
        flex: 1,
    },
    buttonPressed:{
        opacity: 0.3,
        backgroundColor: "#ddd",
    },
    innerContainer:{
        flex: 1,
        padding: 16,
        alignItems: "center",
        justifyContent: "center"
    },
    title:{
        fontWeight: "bold",
        fontSize: 18,
        color: Color.primary500,
    }
})

export default CategoryCard