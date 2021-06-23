import React from 'react';

import Badge from 'components/Badge';

import { formattedNumberPokemon } from 'utils/formattedNumberPokemon';

import { Container, Description, PokemonNumber, PokemonName } from './styles';

interface Pokemon {
  id: number;
  name: string;
  types: string[];
  image_url: string;
}

interface CardProps {
  pokemon: Pokemon;
}

const Card: React.FC<CardProps> = ({ pokemon }) => {
  return (
    <Container color={pokemon.types[0]}>
      <Description>
        <PokemonNumber>
          <strong>#{formattedNumberPokemon(pokemon.id, 3)}</strong>
        </PokemonNumber>
        <PokemonName>
          <strong>{pokemon.name}</strong>
        </PokemonName>
        <span>
          {pokemon.types.map(type => (
            <Badge key={type} type={type} />
          ))}
        </span>
      </Description>
      <img src={pokemon.image_url} />
    </Container>
  );
};

export default Card;
