import Head from 'next/head';
import Image from 'next/image'
import { SubscribeButton } from '../components/SubscribeButton/index'

import styles from './home.module.scss';

export default function Home() {
  return (
      <>
        <Head>
          <title>Home | ig.news</title>
        </Head>

        <main className={styles.contentContainer}>
          <section className={styles.hero}>
            <span>👏 Hey, welcome</span>
            <h1>News about the <span>React</span> world</h1>
            <p>
              Get acess to all the publications <br />
              <span>for $9.90 month</span>

            </p>

            <SubscribeButton />

          </section>

          <Image src="/images/avatar.svg" alt="Girl Coding" width="336" height="521" />

        </main>
      </>
  );
}
