import { useEffect, useState, useRef } from "react";
import Header from './components/Header'
import ScoreBoard from './components/ScoreBoard'
import CardContainer from './components/CardContainer'
import './App.css'

function App() {
  let [score, setScore] = useState(0);
  let [topScore, setTopScore] = useState(0);
  let [catsArray, setCatsArray] = useState([]);
  let [clickedCards, setClickedCards] = useState([]);
  let effectRan = useRef(false);
  useEffect(() => {
      if(!effectRan.current){
          const fetchCats = async () => {
              let response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
              let data = await response.json();
              setCatsArray(data);
          }
          fetchCats();
          effectRan.current = true;
      }
  }, [])
  const onClick = (e) => {
    updateScore();
    setCatsArray(randomizeArray(catsArray));
    checkSameCard(e.target.getAttribute('cardid'));
  }
  const updateScore = () => {
    setScore(score => ++score);
  }
  const updateTopScore = () => {
    setTopScore(topScore => topScore < score ? score : topScore);
  }
  const randomizeArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let randIndex = Math.floor(Math.random() * arr.length);
        let temp = arr[i];
        arr[i] = arr[randIndex];
        arr[randIndex] = temp;
    }
    return arr;
  }
  const checkSameCard = (id) => {
    if(clickedCards.includes(id)){
      setScore(0);
      updateTopScore();
      setClickedCards([]);
    }
    else{
      setClickedCards([...clickedCards, id]);
    }
  }
  return (
    <>
      <Header></Header>
      <ScoreBoard topScore={topScore} currentScore={score}></ScoreBoard>
      <CardContainer onClick={onClick} catsArray={catsArray} ></CardContainer>
    </>
  )
}

export default App
