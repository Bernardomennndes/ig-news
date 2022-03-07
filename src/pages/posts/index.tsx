import Head from 'next/head';
import styles from './style.module.scss';

export default function Posts() {
    return(
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a>
                        <time>12 de fevereiro de 2022</time>
                        <strong>Creating a Monorepo with Lerna and Yarn Workspaces</strong>
                        <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
                    </a>
                    <a>
                        <time>12 de fevereiro de 2022</time>
                        <strong>Creating a Monorepo with Lerna and Yarn Workspaces</strong>
                        <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
                    </a>
                    <a>
                        <time>12 de fevereiro de 2022</time>
                        <strong>Creating a Monorepo with Lerna and Yarn Workspaces</strong>
                        <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
                    </a>
                </div>
            </main>
        </>
    );
}