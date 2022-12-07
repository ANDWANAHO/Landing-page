import Head from 'next/head'
import Layout from '../comps/layout'
import Header from '../comps/Header'
import Hero from '../comps/Hero'
import Image from 'next/image'

import styles from '../styles/Home.module.css'
import Footer from '../comps/Footer'
import Feature from '../comps/Feature'
import Service from '../comps/Service'
import About from '../comps/About'

export default function Home() {
  return (
    
      <Layout pageTitle = 'Landing Page Nextjs'>
        <Header/>
        <Hero/>
        <Feature/>
        <Service/>
        <About/>
        <Footer/>
      </Layout>

  )
}
