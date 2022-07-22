import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Crypto Sale</title>
        <meta name="description" content="Crypto price updates instantly" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header/>
      </main>
    </div>
  )
}
