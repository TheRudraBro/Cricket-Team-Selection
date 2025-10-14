import React, { use } from 'react';


const AvailablePlayers = ({playersPromise}) => {
    const playersData = use(playersPromise);
    console.log(playersData);
    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-1  md:grid-cols-3 gap-20 my-10'>

            {
                playersData.map(player=> <PlayerCard player={player}></PlayerCard> )
            }

{/* <div className="card bg-base-100 w-96 shadow-sm p-4">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="mt-4">
  <div className='flex '>
      <img className='h-[10ox] w-[25px]' src={userImg} alt="" /><h2 className="card-title ml-2">Virat Kohli</h2>
  </div>
    
    <div className='flex justify-between mt-4'>
<div className='flex items-center gap-2'>
    <img className='w-[20px] h-[20px]' src={flagImg} alt="" />
    <span>India</span>
</div>
<button className='btn'>All-Rounder</button>
    </div>


<div className='flex justify-between font-bold mt-4'>
    <span>Rating</span>
    <span>5</span>
</div>

<div className='flex justify-between font-semibold mt-4'>
    <span>Left Hand Bat</span>
    <span>Left Hand Bowl</span>
</div>

    <div className="card-actions mt-4 flex justify-between items-center">
        <p className='font-semibold'>Price: $1500000</p>
      <button className="btn">Choose Player</button>
    </div>
  </div>
</div> */}


            
        </div>
    );
};

export default AvailablePlayers;