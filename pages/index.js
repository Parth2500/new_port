import Head from 'next/head';
import Link from 'next/link';
import { About, Intro, Projects, Contact } from '../components';

export default function Home() {
  return (
    <div className = "container mx-auto px-4 mb-8 lg:px-24">
      <Head>
        <title>Parth | Portfolio</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      
      <div className = "grid grid-cols-1">
        <Intro/>
        <Projects/>
        <About/>
        <Contact/>
      </div>
    </div>
  )
}
