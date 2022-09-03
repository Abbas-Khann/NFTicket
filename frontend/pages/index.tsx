import type { NextPage } from 'next'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Countdown from '../components/Countdown';
import Card from '../components/Card';
import Groups from '../components/Groups';
import CallGroups from '../components/CallGroups';

const Home: NextPage = () => {

  return(
    <main className='bg-gray-900'>
      <Navbar />
      <Hero />
      <Countdown />
      <CallGroups />
    </main>
  )
}

export default Home
