import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Model from '../components/Model'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Model />
      </main>
      <Footer />
    </>
  )
}
