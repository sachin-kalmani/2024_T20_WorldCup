import React from 'react'
import { Link } from 'react-router-dom';

const MatchCard = ({match}) => {
  const matchMethod=match.matchWinners==="Rain" ? "Match Cancelled Due to Rain" : `${match.matchWinners} won the Match`;
  const matchRoute=`/match/${match.matchNumber}`
  return (
    <Link to={matchRoute}><div className='grid grid-cols-3 items-center p-4 bg-[#009FBD] m-4 rounded-[15px] text-[#fff] font-smibold text-[16px] drop-shadow-md'>
      <h1>Match {match.matchNumber}</h1>
      <h2 className='justify-self-center'>{match.team1} vs {match.team2}</h2>
      <h2 className='justify-self-end'>{matchMethod}</h2>
    </div></Link>
  )
}

export default MatchCard