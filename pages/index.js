import Head from 'next/head'
import CryptoList from '../components/CryptoList';
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home({coins}) {
  return (
    <div>
      <Head>
        <title>Crypto Trade</title>
        <meta name="description" content="Crypto price updates instantly" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout>
          <Hero />
          <CryptoList coins={coins.coins}/>
        </Layout>
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("https://api.coinstats.app/public/v1/coins?skip=0&limit=20");
  const data = await res.json();

  return {
    props: {
      coins: data,
    },
  }
}
