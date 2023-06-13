import React from 'react';
import { Text } from 'react-native-svg';
import LottieView from 'lottie-react-native';
import load from './load.json';

import * as S from './styles';

export function Load() {
  return (
    <S.Container>
      <LottieView autoPlay source={load} loop style={{ width: 500 }} />
      <S.Text> Carregando..</S.Text>
    </S.Container>
  );
}
