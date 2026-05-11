import React from "react";
import { useState } from "react";

//import logic
import updatedCategoryTree from './logic/updateCategoryTree';

//import hooks
import useGameState from "./logic/hooks/useGameState";

//import handlers
import handleAnswer from "./logic/handlers/handleAnswer";

//import data
import currentPaintingData from "./data/StarryNight.json"

//import Components
import CategoryTree from "./components/CategoryTree";
import QuestionModal from "./components/QuestionModal";


function App() {

  //States
  const [categoryTreeData, setCategoryTreeData] = useState(updatedCategoryTree);
  const [currentElement, setCurrentElement] = useState("");
  const [paintingData, setPaintingData] = useState(currentPaintingData);

  // const { currentElement, handleElementClick } = useClickTracker();

  //Handlers
  const handleElementClick = (e) => {
    setCurrentElement(e.target.textContent);
  }

  const {gameState, setGameState} = useGameState();


  return (
    <>
      <CategoryTree
        categoryTreeData={categoryTreeData}
        paintingData={paintingData}
        currentElement={currentElement}
        handleElementClick={handleElementClick}
      />
      <QuestionModal
        currentElement={currentElement}
        gameState = {gameState}
        setGameState = {setGameState}
        handleAnswer = {handleAnswer}
      />
    </>
  )

}

export default App;