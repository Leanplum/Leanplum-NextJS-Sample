import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Layout.module.css'
import { Tracking } from '../components/tracking'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Leanplum + Next.js</title>
        <meta name="description" content="Sample app showing how to integrate the Leanplum JS SDK in a Next.js app" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <header className={styles.header}>
        <nav className={styles.menu}>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
        </nav>
      </header>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        Leanplum + Next.js demo application
      </footer>

      // start user session when visiting a page with this layout
      <Tracking.Start />
    </div>
  )
}
