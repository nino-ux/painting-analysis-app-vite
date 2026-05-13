import React from "react";
import { useState } from "react";

//import data
// import currentPaintingData from "./data/StarryNight.json"
// import 

//import hooks
// import useGameLogic from "./logic/hooks/useGameLogic";
import useGameState from "./logic/hooks/useGameState";

//import Components
import CategoryTree from "./components/CategoryTree";
import QuestionModal from "./components/QuestionModal";




function App() {


  const { 
    paintingData, 
    setPaintingData, 
    categoryTreeData, 
    setCategoryTreeData, 
    currentElement, 
    setCurrentElement, 
    elementRuntime, 
    setElementRuntime,
    updatedCategoryTree, 
    handleAnswer, 
    handleElementClick } = useGameState();
  // const { updatedCategoryTree, handleAnswer, handleElementClick } = useGameLogic(currentElement, setCurrentElement, elementRuntime, setElementRuntime);

  return (
    <>
      <CategoryTree
        categoryTreeData={categoryTreeData}
        paintingData={paintingData}
        currentElement={currentElement}
        elementRuntime={elementRuntime}
        handleElementClick={handleElementClick}
      />
      <QuestionModal
        currentElement={currentElement}
        paintingData={paintingData}
        elementRuntime={elementRuntime}
        setElementRuntime={setElementRuntime}
        handleAnswer={handleAnswer}
      />
    </>
  )

}

export default App;