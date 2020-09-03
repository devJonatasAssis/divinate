import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity, StyleSheet, Text } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import getRealm from "../../services/realm";
import {
    Container,
    Content,
    LabelJogador,
    LabelUser,
    Card,
    ImageCard,
    TitleCard,
    TitleAnimal,
    LabelAttempts,
    Attempts,
    UserView,
    AttemptView,
    FinishButton,
    FinishText,
} from "./styles";
import Header from "../../components/Header";

import cat from "../../assets/cards/cat.png";
import dog from "../../assets/cards/dog.png";
import giraffe from "../../assets/cards/giraffe.png";
import horse from "../../assets/cards/horse.png";
import lion from "../../assets/cards/lion.png";
import monkey from "../../assets/cards/monkey.png";

const cards = [
    {
        id: 1,
        nome: "Gato",
        imagem: cat,
    },
    {
        id: 2,
        nome: "Gato",
        imagem: cat,
    },
    {
        id: 3,
        nome: "Cachoro",
        imagem: dog,
    },
    {
        id: 4,
        nome: "Cachoro",
        imagem: dog,
    },
    {
        id: 5,
        nome: "Girafa",
        imagem: giraffe,
    },
    {
        id: 6,
        nome: "Girafa",
        imagem: giraffe,
    },
    {
        id: 7,
        nome: "Cavalo",
        imagem: horse,
    },
    {
        id: 8,
        nome: "Cavalo",
        imagem: horse,
    },
    {
        id: 9,
        nome: "Leão",
        imagem: lion,
    },
    {
        id: 10,
        nome: "Leão",
        imagem: lion,
    },
    {
        id: 11,
        nome: "Macaco",
        imagem: monkey,
    },
    {
        id: 12,
        nome: "Macaco",
        imagem: monkey,
    },
];

export default function Table({ navigation }) {
    const [user, setUser] = useState("");
    const [dados, setDados] = useState(cards);
    const [tent, setTent] = useState(0);
    const [selected, setSelected] = useState([]);

    const selectionHandler = (ind) => {
        if (selected.length === 2) return;
        dados[ind].isSelected = true;
        const selectedArray = selected.slice();
        selectedArray.push(dados[ind]);
        setSelected(selectedArray);
    };

    useEffect(() => {
        getUser();
        embaralharArray(dados);
        let array = dados.map((item, index) => {
            item.isSelected = false;
            return { ...item };
        });
        setDados(array);
    }, []);

    useEffect(() => {
        const [item1, item2] = selected;
        if (!item1 || !item2) return;

        item1.isSelected = item1.nome === item2.nome;
        item2.isSelected = item1.nome === item2.nome;

        setTent(tent + 1);
        setSelected([]);
    }, [selected, setSelected, setTent]);

    async function getUser() {
        let user = await AsyncStorage.getItem("user");
        setUser(user);
    }

    function embaralharArray(array) {
        let index_current = array.length,
            value_tmp,
            index_aleatory;

        while (0 !== index_current) {
            index_aleatory = Math.floor(Math.random() * index_current);
            index_current -= 1;

            value_tmp = array[index_current];
            array[index_current] = array[index_aleatory];
            array[index_aleatory] = value_tmp;
        }

        return array;
    }

    async function handleFinishSession() {
        const data = {
            id: Math.random(),
            name: await AsyncStorage.getItem("user"),
            plays: tent,
        };

        const realm = await getRealm();

        realm.write(() => {
            realm.create("Ranking", data);
        });

        navigation.navigate('Ranking')
    }

    return (
        <>
            <Header title="Mesa de cartas" navigation={navigation} />
            <Container>
                <Content>
                    <UserView>
                        <LabelJogador>Jogador: </LabelJogador>
                        <LabelUser>{user}</LabelUser>
                    </UserView>

                    <AttemptView>
                        <LabelAttempts>
                            Jogadas: <Attempts>{tent}</Attempts>
                        </LabelAttempts>
                    </AttemptView>
                </Content>

                <FlatList
                    data={dados}
                    numColumns={3}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => selectionHandler(index)}>
                            <Card selected={item.isSelected}>
                                {item.isSelected ? <ImageCard source={item.imagem} /> : <TitleAnimal>ANIMAL</TitleAnimal>}
                                {item.isSelected ? <TitleCard>{item.nome}</TitleCard> : <Text></Text>}
                            </Card>
                        </TouchableOpacity>
                    )}
                />

                <FinishButton onPress={() => handleFinishSession()}>
                    <FinishText>Encerrar o Jogo</FinishText>
                </FinishButton>
            </Container>
        </>
    );
}
