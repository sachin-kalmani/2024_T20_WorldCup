import React, { useEffect, useState } from 'react'
import MatchCard from '../components/MatchCard';

const MatchPages = () => {
    const[match,setMatch]=useState([]);

    useEffect(()=>
    {
        const fetcHMatch= async ()=>{
            try{
                const matchAPI="http://localhost:8888/api/data";
                const response=await fetch(matchAPI);
                const data=await response.json();
                setMatch(data);
                console.log(data)
            }catch(e){
                console.error(e);
            }

        }
        fetcHMatch();
    },[]
    )
  return (
    <div className='absolute left-[15%]  w-[80%] p-5'>
        <h1 className='p-5 text-[30px] font-bold drop-shadow-md text-[#3E3232]'>Matches</h1>
        {
            match.map((eachMatch)=><MatchCard match={eachMatch}/>)
        }
        </div>
  )
}

export default MatchPages