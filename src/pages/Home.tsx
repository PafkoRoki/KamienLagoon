import Header from '../components/0_Header';
import Hero from '../components/1_Hero';
import Footer from '../components/Footer';
import Model from '../components/2_Model';
import Gallery from '../components/3_Gallery';
import Location from "../components/2_Location";
import Map from "../components/4_Map";

export default function Home() {
  return (
    <>
      <Header />
      <main>

        <Hero />

        <Model />

        <Location />

        <Gallery />

        <Map />

      </main>
      <Footer />
    </>
  )
}
