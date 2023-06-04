import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import pokemonAnimation from './pikachuw.json';

import * as S from './styles'
import { Button } from '../../../components/Button/Index';


export function Welcome() {
    return <S.Container>
        <S.Content>  
            <S.WrapperAnimation>
                <S.WrapperImage>
                     <AnimatedLottieView style= {{width: 300}}autoPlay source={pokemonAnimation}/> 
                </S.WrapperImage>
            </S.WrapperAnimation>

            <S.Title>Bem vindo!</S.Title>
            <S.subTitle>Pokedex by dev-johnathan!</S.subTitle>

        </S.Content>
        <S.Footer>

           <Button title='Iniciar'/>
           
        </S.Footer>
    </S.Container>
}
