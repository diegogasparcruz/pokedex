import { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import api from 'services/api';

import { Header, Card } from 'components';

import { Container, Main, Footer } from 'styles/pages/Home';

interface PokemonsProps {
  name: string;
  url: string;
}

export default function Home() {
  const LIMIT_POKEMON = 20;

  const [pokemons, setPokemons] = useState<PokemonsProps[]>([]);
  const [offsetApi, setOffsetApi] = useState(LIMIT_POKEMON);

  useEffect(() => {
    api
      .get('pokemon', {
        params: {
          limit: LIMIT_POKEMON,
        },
      })
      .then(response => {
        setPokemons(response.data.results);
      });
  }, []);

  const handleMorePokemons = useCallback(
    async offset => {
      const response = await api.get(`/pokemon`, {
        params: {
          limit: LIMIT_POKEMON,
          offset,
        },
      });

      setPokemons(pokemons => [...pokemons, ...response.data.results]);
      setOffsetApi(offsetApi => Number(offsetApi + LIMIT_POKEMON));
    },
    [LIMIT_POKEMON]
  );

  return (
    <Container>
      <Head>
        <title>Pokédex | Home</title>
      </Head>

      <Header />

      <Main>
        {pokemons.map((pokemon, index) => (
          <Card key={index} name={pokemon.name} />
        ))}
      </Main>

      <Footer>
        <button type="button" onClick={() => handleMorePokemons(offsetApi)}>
          Load more
        </button>
      </Footer>
    </Container>
  );
}
