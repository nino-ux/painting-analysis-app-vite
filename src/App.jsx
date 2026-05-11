import React from "react";
import { useState } from "react";

//import data
// import currentPaintingData from "./data/StarryNight.json"
// import 

//import hooks
import useGameLogic from "./logic/hooks/useGameLogic";

//import Components
import CategoryTree from "./components/CategoryTree";
import QuestionModal from "./components/QuestionModal";



function App() {

  const { elementRuntime, paintingData, categoryTreeData, updatedCategoryTree, currentElement, handleElementClick, handleAnswer} = useGameLogic();

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
        elementRuntime = {elementRuntime}
        handleAnswer = {handleAnswer}
      />
    </>
  )

}

export default App;