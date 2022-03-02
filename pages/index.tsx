import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import EventsCard from '../components/EventsCard';
import EvidenceCard from '../components/EvidenceCard';
import Sidebar from '../components/Sidebar';
import { EvidenceType } from '../types/EvidenceType';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  // TODO: do the thing where it actually makes sense and confirmed is the list of green, yellow = possible, red = eliminated
  const [confirmedEvidence, setConfirmedEvidence] = useState<EvidenceType[]>([]);
  const [possibleEvidence, setPossibleEvidence] = useState<EvidenceType[]>([]);
  const [eliminatedEvidence, setEliminatedEvidence] = useState<EvidenceType[]>([]);

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
        <EvidenceCard possibleEvidence={possibleEvidence} setPossibleEvidence={setPossibleEvidence} />
        <EventsCard />
      </div>
      <Sidebar possibleEvidence={possibleEvidence} confirmedEvidence={confirmedEvidence} />
    </div>
  );
};

export default Home;
