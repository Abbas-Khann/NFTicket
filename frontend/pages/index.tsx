import type { NextPage } from 'next'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Countdown from '../components/Countdown';

const Home: NextPage = () => {
  return(
    <main>
      <Navbar />
      <Hero />
      <Countdown />
    </main>
  )
}

export default Home
