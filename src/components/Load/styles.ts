import styled from 'styled-components/native';
import { css } from 'jquery';
import theme from '../../global/styles/theme';



export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: -100px;
  padding: 20px;
  justify-content: center;
`;


export const Text = styled.Text`
    color: ${theme.colors.load_text};
    font-size: 14px;
    font-weight: bold;
    margin-top: -80px;
  
`;