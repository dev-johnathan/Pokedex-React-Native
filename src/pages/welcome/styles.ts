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
        font-weight: bold;
        color: ${theme.colors.text_white}
        margin-top: 20px;
    `}


`;

export const subTitle = styled.Text`

    ${({theme})=> css`
        font-size: 16px;
        margin-top: 5px;
        color: ${theme.colors.text_white}
    
    `}


`;


export const All = styled.Image`
  witdh: 80px;
  transform: rotate(180deg);
  position: absolute;
  display: flex;
`;

export const Dots = styled.Image `
  position: relative;
  display: flex;
  width: 100%;
  height: 10%;
  opacity: 0.99;
  transform: rotate(180deg);
  margin-top: -270px;
`;

export const WrapperAnimation = styled.View`
      
        ${({theme})=> css`
        width: 350px;
        height: 35px;
        margin-right: 10px;
        background-color: ${theme.colors.light_text};
        border-radius: 40px;
        margin-top: 140px;
        justify-content: center;
        align-items: center;
        transform: rotate(0deg)
`}

`;


export const WrapperImage = styled.View`
        margin-top: 100px;
        transform: rotate(-180deg);

`;

