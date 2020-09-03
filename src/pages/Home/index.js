import React from "react";
import { View, Text } from "react-native";

import { Container, Logo, Button, TextButton } from "./styles";

import logo from '../../assets/logoBranca.png';

export default function Home({navigation}) {
    return (
        <Container>
            <Logo source={logo}/>
            <Button onPress={() => navigation.navigate('Main')}>
                <TextButton>Começar o Jogo</TextButton>
            </Button>
        </Container>
    );
}
