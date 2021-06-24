import React, { useEffect, useState } from 'react';
import api from 'services/api';

import { formattedNumberPokemon } from 'utils/formattedNumberPokemon';

import Badge from 'components/Badge';

import { Container, Description, PokemonNumber, PokemonName } from './styles';

interface Pokemon {
  id: number;
  name: string;
  types: string[];
  image_url: string;
}

interface CardProps {
  name: string;
}

const Card: React.FC<CardProps> = ({ name }) => {
  const [pokemon, setPokemon] = useState<Pokemon>(null);

  useEffect(() => {
    api.get(`pokemon/${name}`).then(response => {
      const { id, sprites, types } = response.data;

      setPokemon({
        id,
        name,
        image_url: sprites.other['official-artwork'].front_default,
        types: types.map(({ type }) => type.name),
      });
    });
  }, []);

  return (
    <Container color={pokemon?.types[0]}>
      <Description>
        <PokemonNumber>
          <strong>#{formattedNumberPokemon(pokemon?.id, 3)}</strong>
        </PokemonNumber>
        <PokemonName>
          <strong>{pokemon?.name}</strong>
        </PokemonName>
        <span>
          {pokemon?.types.map(type => (
            <Badge key={type} type={type} />
          ))}
        </span>
      </Description>
      <img src={pokemon?.image_url} />
    </Container>
  );
};

export default Card;
