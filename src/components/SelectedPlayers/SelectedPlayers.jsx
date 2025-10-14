import React from 'react';

const SelectedPlayers = ({purchasedPlayers}) => {

    return (
        <div className='max-w-[1200px] mx-auto'>
           <div className='border-2 border-gray-300 rounded-2xl flex justify-between items-center p-4'>
<div className='flex items-center gap-4'>
    <img src="https://i.ibb.co.com/j1K0Dt1/desktop-wallpaper-list-of-most-liked-facebook-pages-in-bangladesh-shakib-al-hasan.jpg" className='h-[60px] w-[60px] rounded-xl' alt="" />
    <div>
        <h1 className='font-semibold text-xl'>Sakib Al-Hasan</h1>
        <p className=''>Left Hand Bat</p>
    </div>
</div>
<div>
    <img src="https://i.ibb.co.com/Y4zgZF8Z/Frame.png" alt="" />
</div>
           </div>
        </div>
    );
};

export default SelectedPlayers;