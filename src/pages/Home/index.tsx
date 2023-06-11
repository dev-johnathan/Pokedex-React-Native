import React, { useEffect, useState } from 'react';
import * as S from './styles';
import api from '../../services/api';
import { Card, Pokemon, PokemonType } from '../../components/Card';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import pokeballHeader from '../../assets/img/pokeball.png';
import { TextInput, TextInputProps, StyleProp, TextStyle } from 'react-native';

type Request = {
  id: number;
  types: PokemonType[];
};

export function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const { navigate } = useNavigation();

  function handleNavigation(pokemonId: number) {
    navigate('About', { pokemonId: pokemonId });
  }
  

  useEffect(() => {
    async function getAllPokemons() {
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
     
      <S.Header source={pokeballHeader} />
      <S.Title>Pokédex</S.Title>
      <TextInput
          style={S.SearchInput as StyleProp<TextStyle>}
          placeholder="Digite o número ou nome do Pokémon"
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
    </S.Container>
  );
}
