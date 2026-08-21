import Header from '../components/0_Header';
import Hero from '../components/1_Hero';
import Footer from '../components/Footer';
import Model from '../components/2_Model';
import Gallery from '../components/3_Gallery';
import Location from "../components/2_Location";
import Map from "../components/4_Map";
import Etap1 from "../components/5_ETAP_I";
import Etap2 from "../components/5_ETAP_II";

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

        <Etap1 />
        <Etap2 />

      </main>
      <Footer />
    </>
  )
}
