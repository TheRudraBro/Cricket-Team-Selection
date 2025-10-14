
import './App.css'
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
  const [availableBalance, setAvailableBalance] = useState(60622660)
  const [purchasedPlayers, setPurchasedPlayers] = useState([])

  const removePlayer = (p) =>{
    const filteredData = purchasedPlayers.filter(ply=> ply.player_name !== p.player_name);
    setPurchasedPlayers(filteredData);
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







    </>
  )
}

export default App
