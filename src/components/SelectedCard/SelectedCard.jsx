import React from 'react';

const SelectedCard = ({player, removePlayer}) => {
    console.log(player);
    const handleRemove = () =>{
        removePlayer(player);
    }
    return (
         <div className='border-2 border-gray-300 rounded-2xl flex justify-between items-center p-4 mt-4'>
<div className='flex items-center gap-4'>
    <img src={player.player_image} className='h-[60px] w-[60px] rounded-xl' alt="" />
    <div>
        <h1 className='font-semibold text-xl'>{player.player_name}</h1>
        <p className=''>{player.playing_role}</p>
    </div>
</div>
<div onClick={handleRemove}>
    <img src="https://i.ibb.co.com/Y4zgZF8Z/Frame.png" alt="" />
</div>
           </div>
    );
};

export default SelectedCard;