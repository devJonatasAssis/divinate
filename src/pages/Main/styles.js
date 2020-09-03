import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #c2031d;
    justify-content: center;
    padding: 24px;
`;

export const Logo = styled.Image``;

export const ContentLogo = styled.View`
    margin-bottom: 30px;
`;

export const ContentInput = styled.View`
    margin-bottom: 10px;
`;

export const Input = styled.TextInput`
    border: #fff;
    width: 100%;
    height: 45px;
    border-radius: 4px;
    padding-left: 10px;
    color: #808080;
    background-color: #fff;
`;

export const WelcomeText = styled.Text`
    color: #fff;
    font-size: 20px;
`;

export const Button = styled.TouchableOpacity`
    width: 50%;
    height: 45px;
    border: 3px solid #c2031d;
    background-color: #fff;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    background-color: #d22e2e;
    opacity: 0.8;
    flex-direction: row;
    align-items: center;
`;

export const TextButton = styled.Text`
    color: #FFF;
    font-weight: bold;
    font-size: 16px;
    margin-right: 10px;
`;

export const Label = styled.Text`
    color: #fff;
    font-size: 16px;
    margin-bottom: 10px;
`;

export const FooterButtons = styled.View`
    flex-direction: row;
`;
