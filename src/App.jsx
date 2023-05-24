import { useState } from 'react'
import Header from './components/Header'
import ScoreBoard from './components/ScoreBoard'
import CardContainer from './components/CardContainer'
import './App.css'

function App() {
  let [score, setScore] = useState(0);
  let [topScore, setTopScore] = useState(0);

  return (
    <>
      <Header></Header>
      <ScoreBoard topScore={topScore} currentScore={score}></ScoreBoard>
      <CardContainer></CardContainer>
    </>
  )
}

export default App
