import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const teamAPI="http://localhost:8888/team/data"
const Teams = () => {

    const [team,setTeam]=useState([]);
    const fetchTeam=async(url)=>{
        try{
            const response=await fetch(url)
            const data=await response.json()
            if(data.length>0)
            {
                setTeam(data);
                console.log(data);
            }
        }catch(e)
        {
            console.error(e);
        }
    }

    useEffect(()=>{
        fetchTeam(teamAPI)
    },[])
  return (
    <>
    <div className='absolute left-[15%] p-5'>
            <h1 className='flex justify-start p-5 text-[30px] font-bold drop-shadow-md text-[#3E3232]'>Teams</h1>
    <div className='px-5 py-2 grid grid-cols-4 gap-4'>
        {
            team.map((eachTeam,key)=>{
                const teamRoute=`/team/${eachTeam.teamName}`;
                    return(
                     <div className='p-10 text-center bg-[#88D66C] text-[#fff] rounded-[20px] cursor-pointer' key={eachTeam.id}>
                     <h2 className='py-5 text-[25px]  text-[#FDFFAB] font-bold drop-shadow-md'><Link to={teamRoute}>{eachTeam.teamName}</Link></h2>
                        <p className='text-[18px] font-thin drop-shadow-md  text-[#FCFFE0]'>Matches Played : {eachTeam.totalMatches}</p>
                        <p className='text-[18px] font-thin drop-shadow-md  text-[#FCFFE0]'>Matches Won : {eachTeam.totalWins}</p>
                    </div>
                    )
            })
        }
    </div>
    </div>
    </>
  )
}

export default Teams