import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MatchDetailCard2 from '../components/MatchDetailCard2';

const TeamPages2 = () => {
  const[matchData,setMatchData]=useState([]);
  const{matchId}=useParams();
  useEffect(()=>
    {
        const fetcHMatch= async ()=>{
            try{
                const matchAPI=`http://localhost:8888/api/getMatchData/${matchId}`;
                const response=await fetch(matchAPI);
                const data=await response.json();
                setMatchData(data);
                console.log(data)
            }catch(e){
                console.error(e);
            }

        }
        fetcHMatch();
    },[matchId]
    )
  return (
    <div className='absolute left-[12%]  w-[90%] p-10'>
      <MatchDetailCard2 match={matchData}/>
      {/* <MatchDetailSmallCard2 matchId={matchId}/> */}
    </div>
  )
}

export default TeamPages2