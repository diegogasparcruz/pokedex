import { Header } from 'components/Header';
import Head from 'next/head';

import { Container, Main } from 'styles/pages/Home';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <Header />

      <Main></Main>
    </Container>
  );
}
