import {Pressable, Text, StyleSheet} from "react-native";

function CustomButton(props){

    return (
    <Pressable style={({pressed}) => [pressed? {backgroundColor: "#fff", borderColor: props.color}: {backgroundColor: props.color, borderColor: props.color}, styles.buttonContainer]} onPress={props.onPress}>
        {({ pressed }) => (
            <Text style={[{ color: pressed ? props.color : '#fff' }, styles.buttonText]}>
              {props.title}
            </Text>
          )}
    </Pressable>)
}

const styles = StyleSheet.create({
    buttonContainer:{
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
      },
    buttonText:{
        paddingVertical: 10,
        paddingHorizontal: 16
      },
    })

export default CustomButton