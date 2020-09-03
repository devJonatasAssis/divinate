import React from "react";
import { StatusBar } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import { Container, Content, Buttons, Title } from "./styles";

import Feather from "react-native-vector-icons/Feather";
Feather.loadFont();

export default function Header({ title, navigation }) {

    async function logout() {
        await AsyncStorage.clear();
        navigation.navigate('Home');
    }

    return (
        <Container>
            <StatusBar barStyle="default" />
            <Content>
                <Buttons onPress={() => navigation.goBack()}>
                    <Feather name="arrow-left" size={24} color="#808080" />
                </Buttons>
                <Title>{title}</Title>
                <Buttons onPress={logout}>
                    <Feather name="power" size={24} color="#808080" />
                </Buttons>
            </Content>
        </Container>
    );
}
