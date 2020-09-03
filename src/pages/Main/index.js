import React, { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import {
    Container,
    Logo,
    WelcomeText,
    Input,
    Button,
    TextButton,
    Label,
    ContentInput,
    ContentLogo,
    FooterButtons,
} from "./styles";
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

Feather.loadFont();
AntDesign.loadFont();

import logo from "../../assets/logoBranca.png";

export default function Main({ navigation }) {
    const [user, setUser] = useState("");

    function handleInitialGame() {
        try {
            AsyncStorage.setItem("user", user);
            navigation.navigate("Table");
        } catch (error) {
            console.log("Erro: ", error);
        }
    }

    return (
        <Container>
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
                <ContentLogo>
                    <Logo source={logo} />
                    <WelcomeText>Bem vindo ao nosso jogo.</WelcomeText>
                </ContentLogo>

                <ContentInput>
                    <Label>Jogador</Label>
                    <Input
                        value={user}
                        onChangeText={setUser}
                        placeholder="Digite o nome do primeiro participante."
                        placeholderTextColor="#DDD"
                    />
                </ContentInput>

                <FooterButtons>
                    <Button onPress={handleInitialGame}>
                        <TextButton>Iniciar</TextButton>
                        <Feather name="log-in" color="#FFF" size={16} />
                    </Button>
                    <Button onPress={() => navigation.navigate("Ranking")}>
                        <TextButton>Ranking</TextButton>
                        <AntDesign name="star" color="#FFF" size={16} />
                    </Button>
                </FooterButtons>
            </KeyboardAvoidingView>
        </Container>
    );
}
