import React, { useState } from 'react';

import userImg from '../../assets/user1.png'
import flagImg from '../../assets/flag.png'
import { toast } from 'react-toastify';

const PlayerCard = ({player, setAvailableBalance, availableBalance, setPurchasedPlayers, purchasedPlayers}) => {

    const [isSelected, setIsSelected] = useState(false);

    const handleSelected = (playerData) => {
        const playerPrice = parseInt(playerData.price.split("USD").join("").split(",").join(""));
        if(playerPrice > availableBalance){
            toast("You don't have enough balance to select this player");
            return;
        }
        if(purchasedPlayers.length >= 6){
            toast("You can select maximum 6 players");
            return;
        }
        setIsSelected(true);
        setAvailableBalance(availableBalance - playerPrice);

              setPurchasedPlayers([...purchasedPlayers, playerData])


    }
    return (
       <div className="card bg-base-100 w-96 shadow-sm p-4">
  <figure>
    <img
      src={player.player_image}
      alt="Cricket Players" />
  </figure>
  <div className="mt-4">
  <div className='flex '>
      <img className='h-[10ox] w-[25px]' src={userImg} alt="" /><h2 className="card-title ml-2">{player.player_name}</h2>
  </div>
    
    <div className='flex justify-between mt-4'>
<div className='flex items-center gap-2'>
    <img className='w-[20px] h-[20px]' src={flagImg} alt="" />
    <span>{player.player_country}</span>
</div>
<button className='btn'>{player.playing_role}</button>
    </div>


<div className='flex justify-between font-bold mt-4'>
    <span>Rating</span>
    <span>{player.rating}</span>
</div>

<div className='flex justify-between font-semibold mt-4'>
    <span>{player.bating_style}</span>
    <span>{player.bowling_style}</span>
</div>

    <div className="card-actions mt-4 flex justify-between items-center">
        <p className='font-semibold'>Price: {player.price}</p>
      <button disabled={isSelected} onClick={()=>{
          handleSelected(player);
      }} className="btn">{isSelected===true?"Selected":"Choose Player"}</button>
    </div>
  </div>
</div>)
   
};

export default PlayerCard;