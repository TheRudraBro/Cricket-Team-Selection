import React from 'react';
import navImg from '../../assets/logo.png'
import dollarImg from '../../assets/dollar1.png'

const Navbar = () => {
    return (
        <div className="navbar max-w-[1200px] mx-auto">
  <div className="flex-1">
    <a className="text-xl">
      <img className='h-[60px] w-[60px]' src={navImg} alt="" />
    </a>
  </div>
  <div className="flex items-center gap-2 ">
   <span>6000000000</span>
   <span>Coin</span>
   <img className='h-[20px] w-[20px]' src={dollarImg} alt="" />
  </div>
</div>
    );
};

export default Navbar;