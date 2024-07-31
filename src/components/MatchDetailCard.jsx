import React from 'react'
import { Link } from 'react-router-dom';

const MatchDetailCard = ({teamName,match}) => {
    if(!match) return null;
    const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
    const otherTeamRoute = `/team/${otherTeam}`;
    const matchRoute=`/match/${match.matchNumber}`
    const matchWinners=match.matchWinners==="Rain"? " " : <h1>{match.matchWinners} won By {match.winningMargin} {match.matchWonBy}</h1>;
    const tossDecision=match.tossDecision==="Batting"? "Bat" :"Bowl";
    const color=match.matchWinners === otherTeam ? "#FF6969" : "#88D66C";
  return (
   <Link to={matchRoute}><div className='py-5'>
        <h1>Latest Matches</h1>
        <div className={`mt-5 flex justify-between p-5 items-center bg-[${color}] rounded-[15px]`}>
                <div>
                    <h1 className='text-[30px] font-semibold drop-shadow-md'> vs <Link to={otherTeamRoute}>{otherTeam}</Link></h1>
                    <h1 className='drop-shadow-md'>{match.matchDate}</h1>
                    <h1 className='drop-shadow-md'>{match.matchStage} , Match {match.matchNumber}</h1>
                    <h1 className='drop-shadow-md'>at {match.matchVenue}</h1>
                    <h1 className='drop-shadow-md'>{matchWinners}</h1>
                </div>
                   {match.matchWinners==="Rain" ? (<h1 className='text-[20px] font-bold'>Match Cancelled Due to Rain</h1>) :(
                     <div className='flex flex-col gap-2 items-end'>
                     <h1 className='drop-shadow-md'>{match.tossWinner} won the toss and chose to {tossDecision} first</h1>
                     <h1 className='drop-shadow-md'>FirstInning Score : {match.firstInningScore}/{match.firstInningWicket}</h1>
                     <h1 className='drop-shadow-md'>SecondInning Score : {match.secodInningScore}/{match.secodInningWicket}</h1>
                     <h1 className='drop-shadow-md'>{match.topScorer} : {match.highestScore}</h1>
                     <h1 className='drop-shadow-md'>{match.bestBowler} : {match.bestBowlerFigure}/{match.bestBowlerRuns}</h1>
                </div>    
                    ) 
                   }
        </div>
    </div></Link>
  )
}

export default MatchDetailCard