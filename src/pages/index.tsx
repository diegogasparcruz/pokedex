import Head from 'next/head';
import { useFetch } from 'hooks/useFetch';

import { Header, Card } from 'components';

import { Container, Main } from 'styles/pages/Home';

interface Pokemon {
  name: string;
  url: string;
}
interface DataProps {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}

export default function Home() {
  const { data, error } = useFetch<DataProps>('pokemon');

  return (
    <Container>
      <Head>
        <title>Pokédex | Home</title>
      </Head>

      <Header />

      <Main>
        {error && <h1>Ocorreu algum erro: {JSON.stringify(error)}</h1>}

        {!data ? (
          <h1>loading...</h1>
        ) : (
          data?.results.map((pokemon, index) => (
            <Card key={index} name={pokemon.name} />
          ))
        )}
      </Main>
    </Container>
  );
}
