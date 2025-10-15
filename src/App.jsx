
import './App.css'
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar/Navbar';
import AvailablePlayers from './components/AvailablePlayers/availablePlayers';
import { Suspense, useState } from 'react';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';

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


<footer className='bg-gray-800 '>

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



<div className='bg-gray-800 text-white text-center p-4 mt-10'>
    <p>&copy; 2024 Cricket Team Selector. All rights reserved.</p>
</div>




</footer>



    </>
  )
}

export default App
