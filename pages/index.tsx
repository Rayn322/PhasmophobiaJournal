import type { NextPage } from 'next';
import Head from 'next/head';
import EvidenceCard from '../components/EvidenceCard';
import Sidebar from '../components/Sidebar';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Phasmophobia Journal</title>
        <meta name="description" content="An advanced journal for Phasmophobia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.journal}>
        <h1 className={styles.title}>Phasmophobia Advanced Journal</h1>
      </div>
      <EvidenceCard />
      <Sidebar />
    </div>
  );
};

export default Home;
