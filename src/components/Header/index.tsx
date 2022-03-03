import Image from 'next/image'
import styles from './styles.module.scss'

import { SignInButton } from '../SignInButton/index'

export function Header() {
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image src="/images/logo.svg" alt="ig.news" width="110" height="31" />
                <nav>
                    <a href="" className={styles.active}>Home</a>
                    <a href="" >Posts</a>
                </nav>

                <SignInButton />
            </div>
        </header>
    )
}