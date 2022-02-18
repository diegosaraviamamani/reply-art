import ContactSection from '@components/ContactSection'
import HeroSection from '@components/HeroSection'
import Navbar from '@components/Navbar'
import OurWorkSection from '@components/OurWorkSection'
import { NavbarContext } from '@contexts/NavbarContext'
import Head from 'next/head'
import { useContext } from 'react'

export default function Home() {
  const {isOpen} = useContext(NavbarContext)
  return (
    <div className="">
      <Head>
        <title>Reply Art</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`relative z-0 ${isOpen&&'overflow-hidden h-[100vh]'}`}>
        <Navbar />
        <HeroSection />
        <OurWorkSection />
        <ContactSection />
      </main>
    </div>
  )
}
