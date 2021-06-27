import React from 'react';

import Icon from 'components/Icon';
import Input from 'components/Input';

import { Container, Filters, Title } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Filters>
        <a href="#">
          <Icon name="generation" />
        </a>
        <a href="#">
          <Icon name="sort" />
        </a>
      </Filters>

      <Title>
        <h1>Pokédex</h1>
        <p>Search for Pokémon by name or using the National Pokédex number.</p>
      </Title>

      <Input
        className="inputSearch"
        name="search"
        placeholder="What Pokémon are you looking for?"
      >
        <Icon name="search" size={16} />
      </Input>
    </Container>
  );
};

export default Header;
