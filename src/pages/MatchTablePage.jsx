import React from 'react'
import MatchTablecard from '../components/MatchTablecard';

const MatchTablePage = () => {
    const arr=['Group A','Group B','Group C','Group D ','Group 1','Group 2'];
    // const color=
  return (
    <div  className='p-5 absolute left-[15%] w-[80%] flex flex-col gap-10'>
      <h1 className='p-5 text-[30px] font-bold drop-shadow-md text-[#3E3232]'>Points Table</h1>
        {
            arr.map((group)=>(
                    <MatchTablecard group={group}/>
            ))
        }
    </div>
  )
}

export default MatchTablePage