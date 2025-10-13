

import './App.css'
import Navbar from './components/Navbar/Navbar';
import AvailablePlayers from './components/AvailablePlayers/availablePlayers';
import { Suspense } from 'react';
// import SelectedPlayers from './components/SelectedPlayers/selectedPlayers';

const fetchPlayers = async () => {
  const res = await fetch('/players.json');
  return res.json();
  
}


function App() {
const playersPromise = fetchPlayers();

  return (
    <>
<Navbar></Navbar>

<Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>

<AvailablePlayers playersPromise={playersPromise}>


</AvailablePlayers>

</Suspense>




{/* <SelectedPlayers>

  
</SelectedPlayers> */}
    </>
  )
}

export default App
