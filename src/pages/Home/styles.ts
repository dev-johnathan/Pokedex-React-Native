import styled, { css } from "styled-components/native";
import { Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width


export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};
    padding: 10px;
  `}
`;


export const Header = styled.ImageBackground`
  ${({ theme }) => css`
    width: ${windowWidth}px;
    height: 250px;
    background-color: ${theme.colors.background};
    margin-left: -20px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.light_text};
    font-size: 32px;
    line-height: 38px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 10px;
  `}
`;

// export const SearchInput = styled.TextInput`
//   ${({ theme }) => css`
//     background-color: ${theme.colors.light_background};
//     color: ${theme.colors.text};
//     padding: 10px;
//     font-size: 16px;
//     border-radius: 8px;
//     margin-bottom: 10px;
//   `}
// `;

export const CardContainer = styled.TouchableOpacity`
  ${({ theme }) => css`
    background-color: ${theme.colors.light_background};
    border-radius: 8px;
    padding: 200px;
    flex-direction: row;
    align-items: center;
    margin-bottom: 50px;
  `}
`;

export const PokemonImage = styled.Image`
  ${({ theme }) => css`
    width: 80px;
    height: 80px;
    margin-right: 16px;
  `}
`;

export const PokemonInfo = styled.View`
  flex: 1;
`;

export const PokemonName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 4px;
  `}
`;

export const PokemonId = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: 14px;
  `}
`;

export const PokemonTypeContainer = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;

export const PokemonType = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: 14px;
    margin-right: 8px;
  `}
`;
