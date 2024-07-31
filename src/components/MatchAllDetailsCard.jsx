import React from 'react'

const MatchAllDetailsCard = ({match}) => {

    const matchWinners=match.matchWinners==="Rain"? "Match Cancelled Due to Rain" : <h1>{match.matchWinners} won By {match.winningMargin} {match.matchWonBy}</h1>;
    const tossDecision=match.tossDecision==="Batting"? "Bat" :"Bowl";

  return (
    <div className='flex flex-col bg-[#88D66C] p-5 px-8 rounded-[10px] drop-shadow-md'>
      <h1 className='text-[25px] font-semibold flex justify-center'>Match {match.matchNumber}</h1>
        <div className='grid grid-cols-2 items-start my-10'> 
        <div className='flex flex-col  justify-self-start items-start'>
        <h1 className='text-[30px] font-semibold flex justify-center'>{match.team1} <br /> vs {match.team2}</h1>
        <h1 className='font-thin text-[16px]'>{match.matchDate}</h1>
        <h1>{match.matchStage}</h1>
        <h1 className='italic font-semibold text-[20px]'>at {match.matchVenue}</h1>
        </div>
        {match.matchWinners==="Rain" ? (<h1 className='text-[20px] font-bold'></h1>) :(
        <div className='flex flex-col items-end '>
        <h1 className='my-1 text-[17px] font-medium'>{match.tossWinner} won the toss and chose to {tossDecision} first</h1>
        <h1 className='my-1 text-[17px] font-medium'>FirstInning Score: {match.firstInningScore}/{match.firstInningWicket}</h1>
        <h1 className='my-1 text-[17px] font-medium'>SecondInning Score: {match.secodInningScore}/{match.secodInningWicket}</h1>
        <h1 className='my-1 text-[17px] font-medium'>{match.topScorer}: {match.highestScore}</h1>
        <h1 className='my-1 text-[17px] font-medium'>{match.bestBowler}: {match.bestBowlerFigure}/{match.bestBowlerRuns}</h1>
        <h1 className='my-1 text-[17px] font-medium'>Player Of the Match : {match.playerOfMatch}</h1>
        </div>)}
        </div>
        {/* ---another div */}
        <h1 className='text-[18px] italic font-semibold flex justify-center'>{matchWinners},</h1>
        <h1 className='flex justify-center font-thin italic'>Match {match.matchNumber} of 55</h1>
    </div>
  )
}

export default MatchAllDetailsCard