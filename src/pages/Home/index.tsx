import React, { useEffect, useState } from 'react';
import * as S from './styles';
import api from '../../services/api';
import { Card, Pokemon, PokemonType } from '../../components/Card';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import pokeballHeader from '../../assets/img/pokeball.png';
import { Load } from '../../components/Load';
import { TextInput, TextInputProps, StyleProp, TextStyle } from 'react-native';

type Request = {
  id: number;
  types: PokemonType[];
};

export function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const { navigate } = useNavigation();

  function handleNavigation(pokemonId: number) {
    navigate('About', { pokemonId: pokemonId });
  }
  

  useEffect(() => {
    async function getAllPokemons() {
      try {
        const response = await api.get('/pokemon?limit=1000');
        const { results } = response.data;

        const payloadPokemons = await Promise.all(
          results.map(async (pokemon: Pokemon) => {
            const { id, types } = await getMoreInfo(pokemon.url);
            return {
              name: pokemon.name,
              id,
              types,
            };
          })
        );

        setPokemons(payloadPokemons);
        setIsLoading(false);
      } catch (error) {
        console.log('Erro ao carregar os Pokémons:', error);
        setIsLoading(false);
      }
    }

    getAllPokemons();
  }, []);

  async function getMoreInfo(url: string): Promise<Request> {
    const response = await api.get(url);
    const { id, types } = response.data;
    return {
      id,
      types,
    };
  }

  function handleSearch(query: string) {
    setSearchQuery(query.toLowerCase());
  }

  const filteredPokemons = pokemons.filter((pokemon) => {
    return (
      pokemon.name.toLowerCase().includes(searchQuery) ||
      pokemon.id.toString().includes(searchQuery)
    );
  });

  return (
    <S.Container>
      {isLoading ? (
        <Load />
      ) : (
        <>
          <S.Header source={pokeballHeader} />
          <S.Title>Escolha o seu Pokémon</S.Title>
          <TextInput
            style={S.SearchInput as StyleProp<TextStyle>}
            placeholder="Digite o número ou nome do Pokémon aqui."
            onChangeText={handleSearch}
            value={searchQuery}
          />

          <FlatList
            data={filteredPokemons}
            keyExtractor={(pokemon) => pokemon.id.toString()}
            renderItem={({ item: pokemon }) => (
              <Card
                data={pokemon}
                onPress={() => {
                  handleNavigation(pokemon.id);
                }}
              />
            )}
          />
        </>
      )}
    </S.Container>
  );
}
