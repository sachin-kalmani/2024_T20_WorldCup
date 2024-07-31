import React, { useEffect, useState } from 'react'

const MatchTablecard = ({group}) => {
    const [matchTable,setMatchTable]=useState([]);
    useEffect(
        ()=>{
            const fetchMatchTable=async()=>{
                try{
                    const response = await fetch(`http://localhost:8888/team/matchTable/${group}`)
                    const data = await response.json()
                    setMatchTable(data);
                    console.log(data);
                }catch(e)
                {
                    console.error(e);
                }
            }
            fetchMatchTable()
        },[]
    )

  return (
    <div className='p-10 bg-[#6482AD] text-[#fff] rounded-[25px]'>
            <div className='font-bold text-[25px] py-5 text-center'><h1>{group}</h1></div>
            <table className='table-auto w-full text-center'>
            <thead>
                <tr className='p-10 border-b-[1px] border-[#B5CFB7]'>
                    <th className='w-[60%] text-left py-2 px-5'>Team</th>
                    <th>M</th>  
                    <th>W</th>
                    <th>L</th>
                    <th>NRR</th>
                    <th>Pts</th>
                </tr>
            </thead>
        {matchTable.map((table)=>(
            <tbody>
                <tr className='border-b-[1px] border-[#B5CFB7]'>
                    <td className='w-[60%] text-left py-3 px-5'>{table.teamName==='South Africa' && table.grpName==='Group 2' || table.teamName==='England' && table.grpName==='Group 2' || table.teamName==='India' && table.grpName==='Group 1' || table.teamName==='Afghanistan' && table.grpName==='Group 1'?table.teamName+" (Q)":table.teamName}</td>
                    <td>{table.matchPlayed}</td>
                    <td>{table.matchWon}</td>
                    <td>{table.matchLoss}</td>
                    <td>{table.netRunRate<0? table.netRunRate:"+"+table.netRunRate}</td>
                    <td>{table.matchPoints}</td>
                </tr>
            </tbody>
        ))}
        </table>
    </div>
  )
}

export default MatchTablecard