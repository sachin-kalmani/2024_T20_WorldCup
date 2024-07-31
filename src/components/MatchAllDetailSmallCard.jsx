import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import MatchPages from '../pages/MatchPages';

const MatchAllDetailSmallCard = ({matchId}) => {
  if(!matchId) return null;
  const matchNumber=matchId;
  const[nextMatch,setNextMatch]= useState([])
  useEffect(()=>
  {
   const fetchNextMatch = async ()=>{
    try{
      const matchDataAPI=`http://localhost:8888/api/getNext/${matchNumber}`;
      const response = await fetch(matchDataAPI);
      const data= await response.json();
      setNextMatch(data);
      console.log(data);
    }catch(e){
      console.error(e);
    }
   } 
   fetchNextMatch();
  },[matchNumber]
)
  const matchPageRoute="/match";
  return (
    <div className='flex justify-start gap-10 items-center p-5'>
      {
        nextMatch.map((eachMatch)=>(
          <Link to={"/match/"+eachMatch.matchNumber}><div className='bg-[#FDDE55] p-5 drop-shadow-md rounded-[15px]'>
          <h1 className='mb-2 text-center font-semibold text-[20px]'>Match {eachMatch.matchNumber}</h1>
          <h1 className='text-left font-semibold text-[18px] '>{eachMatch.team1} vs {eachMatch.team2}</h1>
          <h1 className='italic font-normal text-center'>{eachMatch.matchWinners==="Rain"? "Match Cancelled Due to Rain" : `${eachMatch.matchWinners} won By ${eachMatch.winningMargin} ${eachMatch.matchWonBy}`}</h1>
          </div></Link>
        ))
      }
      <Link to={matchPageRoute}><div className='flex justify-end items-start'><h1>More..</h1></div></Link>
    </div>
  )
}

export default MatchAllDetailSmallCard