import React from 'react';
import * as S from './style'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TouchableOpacityProps } from 'react-native';


type Props = {
    title: string;
} & TouchableOpacityProps


export function Button ({title, ...rest}: Props) {
    return <S.Container {...rest}>
       
        <S.Title>{title}</S.Title>
    
    </S.Container>
}