import Head from 'next/head';

import { Container } from 'styles/pages/Home';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <Container></Container>
    </div>
  );
}
