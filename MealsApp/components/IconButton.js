import { Pressable } from "react-native"
import {Ionicons} from "@expo/vector-icons"

function IconButton({onPress, icon, color, size=24}){

    return(
        <Pressable onPress={onPress} style={({pressed}) => pressed? {opacity: 0.7}: null}>
            <Ionicons name={icon} size={size} color={color}/>
        </Pressable>
    )
}


export default IconButton