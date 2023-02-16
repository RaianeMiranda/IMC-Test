import {View} from "react-native";
import {TextInput} from "react-native-paper";

export const FeedbackScreen = () =>{
    return (
        <View>
            <TextInput
            label="Digite seu E-mail"
            value="insira um email"
            autoCompleteType="email"
            textContentType="emailAdress"
            />
        </View>
    )
}


<Image
                source={{ uri: require("../../assets/senac.png") }}
                style={{ width: 200, height: 200, marginBottom: 20 }}
                resizeMode="contain"
            />