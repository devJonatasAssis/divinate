import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    background-color: #fff;
    height: 100px;
`;

export const Content = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 24px 0 24px;
    margin-top: 10px;
`;

export const Buttons = styled.TouchableOpacity``;
export const Title = styled.Text`
  color: #808080;
  font-weight: bold;
  font-size: 20px;
`;
