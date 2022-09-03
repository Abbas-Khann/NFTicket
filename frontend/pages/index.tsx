import type { NextPage } from 'next'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Countdown from '../components/Countdown';
import CallGroups from '../components/CallGroups';
import BuyTickets from '../components/BuyTickets';

const Home: NextPage = () => {

  return(
    <main>
      <Navbar />
      <Hero />
      <Countdown />
      <CallGroups />
      <BuyTickets />
    </main>
  )
}

export default Home
