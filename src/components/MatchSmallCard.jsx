import React from 'react'
import { Link } from 'react-router-dom';


const MatchSmallCard = ({teamName,match}) => {
    if(!match) return null;
    const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
    const otherTeamRoute = `/team/${otherTeam}`;
    const matchRoute=`/match/${match.matchNumber}`
    const matchWinners=match.matchWinners==="Rain"? "Match Cancelled Due to Rain" : <h1>{match.matchWinners} won By {match.winningMargin} {match.matchWonBy}</h1>;
    const color=match.matchWinners === otherTeam ? "#FF6969" : "#88D66C";
  return (
    <Link to={matchRoute}><div className={`p-3 bg-[${color}] rounded-[15px] min-h-32`}>
            <h1 className='font-semibold mb-2'>vs
            <Link to={otherTeamRoute}> {otherTeam}</Link></h1>
            <h1 className='font-light'>{match.matchStage}, Match {match.matchNumber}</h1>
            <h1 className='font-light'>{matchWinners}</h1>
    </div></Link>
  )
}

export default MatchSmallCard