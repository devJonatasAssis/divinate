import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #c2031d;
    align-items: center;
`;

export const Logo = styled.Image`
    margin-top: 20px;
`;

export const Title = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 20px;
`;

export const List = styled.FlatList.attrs({
    contentContainerStyle: { paddingHorizontal: 20 },
    showsVerticalScrollIndicator: false,
})`
    margin-top: 20px;
`;

export const ListItem = styled.View`
    background: #fff;
    margin-top: 10px;
    padding: 24px;
    border-radius: 6px;
`;

export const ItemName = styled.Text`
    font-size: 18px;
`;

export const Plays = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
`;

export const ItemPlay = styled.Text`
    color: #999;
`;
