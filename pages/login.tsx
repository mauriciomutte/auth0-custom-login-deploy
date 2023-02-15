import Head from 'next/head'
import { Inter } from '@next/font/google'

import styles from '../styles/Login.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Login() {
  return (
    <>
      <Head>
        <title>Auth0 custom login deploy</title>
        <meta
          name='description'
          content='GenCreate a pipeline to automate Auth0 deploy'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <h1 className={inter.className}>Auth0 custom login deploy</h1>
          <div className={styles.content}>
            <p className={inter.className}>
              Using Azure Pipeline to automate Auth0 custom login deploy
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
