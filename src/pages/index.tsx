import Head from 'next/head';

type Props = {
  title: string;
};

const bla = 'varssssssss';

export default function Home({ title = 'React Avancado' }: Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{title}</h1>
    </div>
  );
}
