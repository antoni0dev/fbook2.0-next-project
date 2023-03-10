import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Feed from '@/components/Feed'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>

        <Header />
        <Feed />
    </div>
  )
}
