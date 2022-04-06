import { View, Text, StyleSheet } from "react-native"
import Color from "../../constants/color"

function List({data}){

    return(
        data.map((dataPoint, index) => <View key={index} style={styles.item}> 
                                            <Text style={styles.itemText}>{dataPoint}</Text>
                                        </View>)
    )
}

const styles = StyleSheet.create({
    item:{
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 16,
        marginVertical: 4,
        width: "100%",
        backgroundColor: Color.accent600,
    },
    itemText:{
        fontSize: 16,
        color: Color.primary600,
        textAlign: "center",
    },
})

export default List