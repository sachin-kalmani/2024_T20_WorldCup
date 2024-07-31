import React, { useEffect, useState } from 'react'
import MatchDetailCard from '../components/MatchDetailCard';
import MatchSmallCard from '../components/MatchSmallCard';
import { useParams } from 'react-router-dom';

const TeamPages = () => {
    const [team,setTeam]=useState({matches:[]});
    const {teamName}=useParams();
    useEffect(
        ()=>{
            const fetchMatches=async()=>{
                try{
                    const response= await fetch(`http://localhost:8888/team/teams/${teamName}`);
                    const data =await response.json();
                    console.log(data);
                        setTeam(data);
                }catch(e)
                {
                    console.error(e);
                }
            }
            fetchMatches();
        },[teamName]
    )

    if(!team || !team.teamName)
    {
        return <h1 className='p-10 text-[50px] absolute left-[15%]'>Team Not Found</h1>
    }
  return (
        <div className='p-10 absolute left-[12%] w-[90%]'>
                <h1 className='text-[70px] font-semibold'>{team.teamName}</h1>
                <MatchDetailCard teamName={team.teamName} match={team.matches[0]}/>
                <div className='grid grid-cols-4 gap-4 items-start'> 
                {team.matches.slice(1).map(match=><MatchSmallCard teamName={team.teamName} match={match}/>)}
                </div>
        </div>
  )
}

export default TeamPages