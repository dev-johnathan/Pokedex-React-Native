import styled, {css} from "styled-components/native";


export const Container = styled.View`

    ${({theme}) => css`
        flex: 1;
        background-color: ${theme.colors.welcome.theme}
    
    `}
`;
export const Content = styled.View`
        height: 75%;
        justify-content: center;
        align-items: center;

`;

export const Footer = styled.View`

    ${({theme}) => css`
        justify-content: center;
        align-items: center;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        height: 25%;
        background-color: ${theme.colors.welcome.theme2};
        padding: 20px;
    
    `}

`;


export const Title = styled.Text`

    ${({theme})=> css`
        font-size: 40px;
        color: ${theme.colors.text_white}
        margin-top: 20px;
    `}


`;

export const subTitle = styled.Text`

    ${({theme})=> css`
        font-size: 16px;
        margin-top: 20px;
        color: ${theme.colors.text_white}
    
    `}


`;

export const WrapperAnimation = styled.View`
      
        ${({theme})=> css`
        width: 300px;
        height: 300px;
        background-color: ${theme.colors.welcome.theme3};
        border-radius: 100px;
        margin-top: 100px;
        justify-content: center;
        align-items: center;
        transform: rotate(0deg)
`}

`;


export const WrapperImage = styled.View`
      
        transform: rotate(-90deg);

`;