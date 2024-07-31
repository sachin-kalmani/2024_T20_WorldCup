import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Group from './components/Group';
import Teams from './components/Teams';
import TeamPages from './pages/TeamPages';
import MatchPages from './pages/MatchPages';
import MatchAllDetails from './pages/MatchAllDetails';
import MatchTablePage from './pages/MatchTablePage';
import HomePage from './pages/HomePage';


const App = () => {
  return (
    <div >
    <Router>
      <Group/>
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/team' element={<Teams/>}/>
          <Route path='/team/:teamName' element={<TeamPages/>}/>
          <Route path='/match' element={<MatchPages/>}/>
          <Route path='/match/:matchId' element={<MatchAllDetails/>}/>
          <Route path='/pointsTable' element={<MatchTablePage/>}/>
      </Routes>
    </Router>
    </div>
    
  )
}

export default App