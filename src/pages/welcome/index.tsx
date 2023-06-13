import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import pokemonAnimation from './diglet.json';
import {useNavigation} from '@react-navigation/native'
import * as S from './styles'
import { Button } from '../../components/Button/Index';
import All from '../../assets/img/Pokédex_logo.png';
import Dots from '../../assets/img/dots.png'

export function Welcome(){
    const {navigate} = useNavigation()
    function handleNavigation(){
        navigate('Home')
    }
    


    return <S.Container>

        <S.Content>  

            <S.WrapperAnimation>
                
                <S.WrapperImage>
                
                     <AnimatedLottieView style= {{width: 400}}autoPlay source={pokemonAnimation}/> 
                     <S.All source={All}/>
                </S.WrapperImage>
              
            </S.WrapperAnimation>

            <S.Title>Olá!</S.Title>
            <S.subTitle>by dev-johnathan!</S.subTitle>

        </S.Content>
  

      <S.Footer>

           <Button  title='Iniciar' onPress={handleNavigation}/>
           
        </S.Footer>
        <S.Dots source={Dots}/>
    </S.Container>
}
