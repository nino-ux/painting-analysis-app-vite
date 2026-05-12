import React from "react";
import { useState } from "react";

//import data
// import currentPaintingData from "./data/StarryNight.json"
// import 

//import hooks
import useGameLogic from "./logic/hooks/useGameLogic";
import useGameState from "./logic/hooks/useGameState";

//import Components
import CategoryTree from "./components/CategoryTree";
import QuestionModal from "./components/QuestionModal";




function App() {

  const { updatedCategoryTree, handleElementClick, handleAnswer } = useGameLogic();
  const { elementRuntime, setElementRuntime, paintingData, setPaintingData, currentElement, setCurrentElement, categoryTreeData, setCategoryTreeData } = useGameState();

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
        paintingData={paintingData}
        elementRuntime={elementRuntime}
        handleAnswer={handleAnswer}
      />
    </>
  )

}

export default App;