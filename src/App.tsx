import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Statistics from './components/Statistics'
import Potential from './components/Potential'
import Activities from './components/Activities'
import Umkm from './components/Umkm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      <Navbar />
      <Hero />
      <Profile />
      <Statistics />
      <Potential />
      <Activities />
      <Umkm />
      <Footer />
    </div>
  )
}

export default App