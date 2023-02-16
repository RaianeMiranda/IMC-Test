import {View, Image, TouchableOpacity, Text} from "react-native";
import {TextInput} from "react-native-paper";

export const FeedbackScreen = () =>{
    return (
        <View>
            <Image
                source={{ uri: 'https://picsum.photos/150' }}
                style={{ width: 200, height: 200, marginBottom: 20 }}
                resizeMode="contain"
            />
            <TextInput
            label="Digite seu nome"
            />
            <TextInput
            label="Digite seu E-mail"
            />
            <TextInput
            label="Deixe aqui sua opnião!!"
            />
              <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <Text>Enviar</Text>
        </TouchableOpacity>
        </View>
    )
}
