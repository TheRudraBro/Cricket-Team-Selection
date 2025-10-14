import React from 'react';

const SelectedCard = (player) => {
    console.log(player);
    return (
         <div className='border-2 border-gray-300 rounded-2xl flex justify-between items-center p-4'>
<div className='flex items-center gap-4'>
    <img src={player.player_image} className='h-[60px] w-[60px] rounded-xl' alt="" />
    <div>
        <h1 className='font-semibold text-xl'>{player.player_name}</h1>
        <p className=''>{player.player_role}</p>
    </div>
</div>
<div>
    <img src="https://i.ibb.co.com/Y4zgZF8Z/Frame.png" alt="" />
</div>
           </div>
    );
};

export default SelectedCard;