import type { NextPage } from 'next'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Countdown from '../components/Countdown';
import Card from '../components/Card';

const Home: NextPage = () => {
  return(
    <main>
      <Navbar />
      <Hero />
      <Countdown />
      <Card />
      {/* <Card /> */}
    </main>
  )
}

export default Home
