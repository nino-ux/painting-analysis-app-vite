import React from "react";
import { useState } from "react";

//import logic
import updatedCategoryTree from './logic/updateCategoryTree';

//import hooks
// import useClickTracker from "./logic/hooks/useClickTracker";

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
      />
    </>
  )

}

export default App;