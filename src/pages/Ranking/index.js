import React, { useState, useEffect } from "react";
import { Container, Logo, Title, List, ListItem, ItemName, ItemPlay, Plays } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
Icon.loadFont();
import Header from "../../components/Header";
import getRealm from "../../services/realm";

import logo from "../../assets/logoBranca.png";

export default function Ranking({ navigation }) {
    const [ranking, setRanking] = useState([]);

    useEffect(() => {
        async function loadRanking() {
            const realm = await getRealm();
            const data = realm.objects("Ranking").sorted("plays", false);
            setRanking(data);
        }
    }, []);

    return (
        <>
            <Header title="Ranking" navigation={navigation} />
            <Container>
                <Logo source={logo} />
                <Title>Conheça nosso Top 5</Title>

                <List
                    keyboardShouldPersistTaps="handled"
                    data={ranking}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => (
                        <ListItem>
                            <ItemName>{item.name}</ItemName>

                            <Plays>
                                <ItemPlay>nº de jogadas {item.plays}</ItemPlay>
                                <Icon name="star" color="#daa520" size={18} />
                            </Plays>
                        </ListItem>
                    )}
                />
            </Container>
        </>
    );
}
