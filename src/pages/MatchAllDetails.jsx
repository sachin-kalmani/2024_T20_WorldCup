import React, { useEffect, useState } from 'react'
import MatchAllDetailsCard from '../components/MatchAllDetailsCard';
import { useParams } from 'react-router-dom';
import MatchAllDetailSmallCard from '../components/MatchAllDetailSmallCard';

const MatchAllDetails = () => {
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
      <MatchAllDetailsCard match={matchData}/>
      <MatchAllDetailSmallCard matchId={matchId}/>
    </div>
  )
}

export default MatchAllDetails