import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Teams from './Teams';




const Group = () => {
    const matchRoute='/match';
  return (
    <>
    <div className='p-5 bg-[#B6C7AA] text-[#323232] flex flex-col justify-start items-start fixed h-lvh'>
        <h1 className='text-[25px] drop-shadow-md flex justify-center'>Dashboard</h1>
        <div className='mt-5 flex justify-center flex-col items-start'>
                <h1 className='py-5 font-normal text-[18px] drop-shadow-md'><Link to='/'>Home</Link></h1>
                <h1 className='py-5 font-normal text-[18px] drop-shadow-md'><Link to='/team'>Teams</Link></h1>
                <h1 className='py-5 font-normal text-[18px] drop-shadow-md'><Link to='/match'>Matches</Link></h1>
            <h1 className='py-5 font-normal text-[18px] drop-shadow-md'><Link to='/pointsTable'>Points Table</Link></h1>
        </div>
    </div>
    </>
  )
}

export default Group