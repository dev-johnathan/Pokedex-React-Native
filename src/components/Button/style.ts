import styled, {css} from 'styled-components/native'

export const Container = styled.TouchableOpacity`

    ${({theme}) => css`
        width: 100%;
        height: 60px;
        background-color: ${theme.colors.welcome.theme};

        justify-content:center;
        align-items:center;
        border-radius: 100px;

    `}
`;

export const Title = styled.Text`

    ${({theme}) => css`
        font-size: 25px;
        color: ${theme.colors.text_white};
        border-radius: 200px;
    `}
`;

