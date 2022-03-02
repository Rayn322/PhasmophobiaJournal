import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import EventsCard from '../components/EventsCard';
import EvidenceCard from '../components/EvidenceCard';
import Sidebar from '../components/Sidebar';
import { EvidenceType } from '../types/EvidenceType';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const [possibleEvidence, setPossibleEvidence] = useState<EvidenceType[]>([]);
  const [confirmedEvidence, setConfirmedEvidence] = useState<EvidenceType[]>([]);

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

      <div className={styles.cards}>
        <EvidenceCard />
        <EventsCard />
      </div>
      <Sidebar possibleEvidence={possibleEvidence} confirmedEvidence={confirmedEvidence} />
    </div>
  );
};

export default Home;
