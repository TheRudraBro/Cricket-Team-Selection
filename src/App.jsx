
import './App.css'
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar/Navbar';
import AvailablePlayers from './components/AvailablePlayers/availablePlayers';
import { Suspense, useState } from 'react';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';
import bannerImg from './assets/banner-main.png'
import bannerShadow from './assets/bg-shadow.png'
import logoFooter from './assets/logo-footer.png'

const fetchPlayers = async () => {
  const res = await fetch('/players.json');
  return res.json();
  
}
const playersPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true)
  const [availableBalance, setAvailableBalance] = useState(60000000)
  const [purchasedPlayers, setPurchasedPlayers] = useState([])

  const removePlayer = (p) =>{
    const filteredData = purchasedPlayers.filter(ply=> ply.player_name !== p.player_name);
    setPurchasedPlayers(filteredData);
    setAvailableBalance(availableBalance + parseInt( p.price.split("USD").join("").split(",").join("")));
  }



  return (
    <>
<Navbar availableBalance={availableBalance}></Navbar>

<header  className='max-w-[1200px] mx-auto bg-black rounded-xl p-20 text-center gap-10 md:gap-0 mt-10' style={{ backgroundImage: `url(${bannerShadow})` }}>
  <img className='h-[100px] w-[100px] mx-auto mb-4' src={bannerImg} alt="" />
<h2 className='font-bold text-white text-xl'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
<p className='text-white mt-4'>Beyond Boundaries Beyond Limits</p>
<button className='rounded-lg font-semibold bg-[#E7FE29] p-2 mt-4'>Claim Free Credit</button>



</header>





<div className='max-w-[1200px] mx-auto flex justify-between items-center p-4 mt-4'>
<h1 className='font-bold text-xl'>{
  toggle === true ? 'Available Players' : `Selected Players (${purchasedPlayers.length}/6)`
}</h1>
<div className='font-semibold'>
  <button onClick={() => setToggle(true)} className={`py-3 px-4 border-1 border-gray-400 rounded-l-xl border-r-0 ${toggle ? 'bg-[#E7FE29]' : ''}`}>Available</button>
  <button onClick={() => setToggle(false)} className={`py-3 px-4 border-1 border-gray-400 rounded-r-xl border-l-0 ${!toggle ? 'bg-[#E7FE29]' : ''}`}>Selected <span>({purchasedPlayers.length})</span></button>
</div>
</div>


{
  toggle === true?<Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>

<AvailablePlayers purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playersPromise={playersPromise}>


</AvailablePlayers>

</Suspense>:<SelectedPlayers removePlayer={removePlayer} purchasedPlayers={purchasedPlayers}></SelectedPlayers>
}


<ToastContainer></ToastContainer>

<main className='max-w-[1200px] mx-auto text-center p-10 mt-10 border-2 border-gray-300 rounded-xl mb-10'>


<h1 className='font-bold'>Subscribe to our Newsletter</h1>
<p className='mt-4'>Get the latest updates and news right in your inbox!</p>
<div className='mt-4'>
  <div>
    <label className="input validator">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input type="email" placeholder="mail@site.com" required />
</label>
<div className="validator-hint hidden">Enter valid email address</div>
  </div>
  <div className='mt-4'>
    <button className='bg-gray-800 text-white p-2 rounded-lg'>Send Email</button>
  </div>
</div>



</main>



<footer className='bg-gray-800 '>

  <div className='max-w-[1200px] mx-auto flex justify-center p-10'>
    <img src={logoFooter} alt="Logo" />
  </div>

<div className='text-white text-center p-4 mt-10 flex justify-between items-center max-w-[1200px] mx-auto flex-col md:flex-row gap-10 md:gap-0'>
  <div className="about">
  <h2 className="text-2xl font-bold mb-2">About Us</h2>
  <p>We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
</div>


<div className="quickLinks">
  <h2 className="text-2xl font-bold mb-2">Quick Links</h2>
  <ul>
    <li><a href="#home" className="text-blue-400">Home</a></li>
    <li><a href="#about" className="text-blue-400">About</a></li>
    <li><a href="#services" className="text-blue-400">Services</a></li>
    <li><a href="#contact" className="text-blue-400">Contact</a></li>
  </ul>
</div>





<div className="Subscribe mb-2">
<h2 className='text-2xl font-bold '>Subscribe</h2>
<p>Subscribe to our newsletter for the <br /> latest updates.</p>

</div>
</div>



<div className='text-white text-center p-4 mt-10'>
    <p>&copy;{" "} <a href="https://github.com/TheRudraBro" target="_blank" rel="noopener noreferrer" className="text-white">Rudra Mojumder</a>{" "} || All rights reserved.</p>
</div>





</footer>



    </>
  )
}

export default App
// Closeed