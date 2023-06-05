import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import pokemonAnimation from './pikachu.json';
import {useNavigation} from '@react-navigation/native'
import * as S from './styles'
import { Button } from '../../components/Button/Index';


export function Welcome(){
    const {navigate} = useNavigation()
    function handleNavigation(){
        navigate('Home')
    }
    


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

           <Button title='Iniciar' onPress={handleNavigation}/>
           
        </S.Footer>
    </S.Container>
}
