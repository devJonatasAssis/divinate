import styled, { css } from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #05aa7f;
`;

export const Content = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 30px;
`;

export const LabelJogador = styled.Text`
    color: #fff;
    margin-left: 24px;
    font-weight: bold;
    font-size: 15px;
`;
export const LabelUser = styled.Text`
    color: #fff;
    margin-left: 4px;
    font-size: 15px;
`;

export const User = styled.Text`
    color: #fff;
    margin-left: 5px;
`;

export const ButtonRefresh = styled.TouchableOpacity`
    margin-left: 24px;
    height: 45px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 200px;
    background-color: #62dafb;
    margin-top: 20px;
    border-radius: 6px;
`;

export const TextButtonRefresh = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    margin-right: 10px;
`;

export const Card = styled.View`
    width: 105px;
    height: 100px;
    ${(props) =>
        props.selected
            ? css`
                  background: #00a000;
                  border: 2px solid green;
              `
            : css`
                  background: #fff;
              `}
    margin-left: 24px;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
`;

export const ImageCard = styled.Image`
    width: 50%;
    height: 50%;
`;

export const TitleCard = styled.Text`
    margin-top: 5px;
    color: #fff;
    font-weight: bold;
`;

export const ButtonRisk = styled.TouchableOpacity`
    height: 45px;
    background-color: green;
    margin: 24px;
    justify-content: center;
    align-items: center;
`;

export const TextRisk = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
`;

export const TitleAnimal = styled.Text`
    font-size: 18px;
    font-style: italic;
`;

export const LabelAttempts = styled.Text`
    font-weight: bold;
    color: #fff;
`;

export const Attempts = styled.Text`
    color: #fff;
`;

export const UserView = styled.View`
    flex-direction: row;
`;
export const AttemptView = styled.View`
    margin-right: 24px;
`;
export const FinishButton = styled.TouchableOpacity`
    background: green;
    margin: 0 24px;
    height: 45px;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
`;

export const FinishText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #FFF
`;
